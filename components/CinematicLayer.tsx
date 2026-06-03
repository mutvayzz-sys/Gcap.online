"use client";

import { useEffect } from "react";

type LenisController = {
  raf: (time: number) => void;
  scrollTo: (target: HTMLElement, options?: { offset?: number }) => void;
  destroy: () => void;
};

type MagneticElement = HTMLElement & {
  __magnetBound?: boolean;
};

declare global {
  interface Window {
    __lenis?: LenisController;
  }
}

export default function CinematicLayer() {
  useEffect(() => {
    const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const FINE = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    // Scroll progress bar
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);

    const updateProgress = () => {
      const el = document.documentElement;
      const progress = el.scrollTop / (el.scrollHeight - el.clientHeight);
      bar.style.width = (progress * 100).toFixed(2) + "%";
    };
    window.addEventListener("scroll", updateProgress, { passive: true });

    // Chapter nav
    buildChapters();

    if (REDUCED) return cleanup;

    // Lenis smooth scroll
    let lenis: LenisController | null = null;
    let lenisRaf: number | null = null;
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      window.__lenis = lenis;
      function rafLoop(time: number) {
        lenis?.raf(time);
        lenisRaf = requestAnimationFrame(rafLoop);
      }
      lenisRaf = requestAnimationFrame(rafLoop);
    });

    // Intercept all hash anchor clicks and route through Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href")!.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: 0 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.addEventListener("click", handleAnchorClick);

    // Custom cursor (fine pointer only)
    if (FINE) initCursor();

    // Film grain
    initGrain();

    // Scroll reveals
    initReveals();

    function buildChapters() {
      const secs = [...document.querySelectorAll("[data-chapter]")] as HTMLElement[];
      if (!secs.length) return;
      const existing = document.querySelector(".chapters");
      if (existing) existing.remove();
      const rail = document.createElement("div");
      rail.className = "chapters";
      secs.forEach((sec) => {
        const id = sec.getAttribute("data-chapter")!;
        const label = sec.getAttribute("data-label") || id;
        const btn = document.createElement("button");
        btn.className = "chapter";
        btn.setAttribute("data-goto", id);
        btn.innerHTML = `<span class="chapter-label">${label}</span><span class="chapter-dot"></span>`;
        btn.addEventListener("click", () => {
          const target = document.getElementById(id);
          if (!target) return;
          if (window.__lenis) {
            window.__lenis.scrollTo(target, { offset: 0 });
          } else {
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
        rail.appendChild(btn);
      });
      document.body.appendChild(rail);

      // IntersectionObserver for active chapter
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const sec = entry.target as HTMLElement;
          const id = sec.getAttribute("data-chapter");
          const isDark = sec.getAttribute("data-theme") === "dark";
          document.querySelectorAll(".chapter").forEach((c) =>
            c.classList.toggle("active", c.getAttribute("data-goto") === id)
          );
          rail.classList.toggle("on-dark", isDark);
        });
      }, { threshold: 0, rootMargin: "-45% 0px -45% 0px" });
      secs.forEach((sec) => io.observe(sec));
    }

    function initCursor() {
      if (document.querySelector(".cursor-ring")) return;
      const ring = document.createElement("div");
      ring.className = "cursor-ring";
      const dot = document.createElement("div");
      dot.className = "cursor-dot";
      document.body.appendChild(ring);
      document.body.appendChild(dot);
      document.body.classList.add("has-cursor");

      let mx = innerWidth / 2, my = innerHeight / 2;
      let rx = mx, ry = my;
      const LERP = 0.15;

      window.addEventListener("pointermove", (e) => {
        mx = e.clientX; my = e.clientY;
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      });

      const bindMagnets = () => {
        document.querySelectorAll("[data-magnet]").forEach((el: Element) => {
          const elem = el as MagneticElement;
          if (elem.__magnetBound) return;
          elem.__magnetBound = true;
          elem.addEventListener("pointerenter", () => ring.classList.add("is-magnet"));
          elem.addEventListener("pointerleave", () => {
            ring.classList.remove("is-magnet");
            elem.style.transition = "transform var(--dur-leave) var(--ease-confident)";
            elem.style.transform = "translate(0,0)";
          });
          elem.addEventListener("pointermove", (e) => {
            const r = elem.getBoundingClientRect();
            const dx = (e.clientX - (r.left + r.width / 2)) * 0.18;
            const dy = (e.clientY - (r.top + r.height / 2)) * 0.3;
            elem.style.transition = "transform var(--dur-fast) var(--ease-confident)";
            elem.style.transform = `translate(${dx}px, ${dy}px)`;
          });
        });
      };
      bindMagnets();
      setTimeout(bindMagnets, 800);

      function loop() {
        rx += (mx - rx) * LERP;
        ry += (my - ry) * LERP;
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
        requestAnimationFrame(loop);
      }
      requestAnimationFrame(loop);
    }

    function initGrain() {
      if (document.querySelector(".grain")) return;
      const c = document.createElement("canvas");
      c.className = "grain";
      c.width = 220; c.height = 220;
      document.body.appendChild(c);
      const ctx = c.getContext("2d")!;
      let frame = 0;
      (function draw() {
        frame++;
        if (frame % 2 === 0) {
          const img = ctx.createImageData(c.width, c.height);
          const d = img.data;
          for (let i = 0; i < d.length; i += 4) {
            const v = (Math.random() * 255) | 0;
            d[i] = d[i + 1] = d[i + 2] = v;
            d[i + 3] = 255;
          }
          ctx.putImageData(img, 0, 0);
        }
        requestAnimationFrame(draw);
      })();
    }

    function initReveals() {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.transition = "opacity 1.3s cubic-bezier(0.16,1,0.30,1), transform 1.3s cubic-bezier(0.16,1,0.30,1)";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.style.willChange = "auto";
          io.unobserve(el);
        });
      }, { threshold: 0, rootMargin: "0px 0px -16% 0px" });

      const groupIo = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const group = entry.target;
          const items = group.querySelectorAll("[data-reveal-item]") as NodeListOf<HTMLElement>;
          items.forEach((item, i) => {
            setTimeout(() => {
              item.style.transition = "opacity 1.2s cubic-bezier(0.16,1,0.30,1), transform 1.2s cubic-bezier(0.16,1,0.30,1)";
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, i * 110);
          });
          groupIo.unobserve(group);
        });
      }, { threshold: 0, rootMargin: "0px 0px -20% 0px" });

      document.querySelectorAll("[data-reveal]").forEach((el) => {
        const elem = el as HTMLElement;
        elem.style.opacity = "0";
        elem.style.transform = "translateY(40px)";
        elem.style.willChange = "transform, opacity";
        io.observe(elem);
      });

      document.querySelectorAll("[data-reveal-group]").forEach((group) => {
        const items = group.querySelectorAll("[data-reveal-item]") as NodeListOf<HTMLElement>;
        items.forEach((item) => {
          item.style.opacity = "0";
          item.style.transform = "translateY(34px)";
        });
        groupIo.observe(group);
      });
    }

    function cleanup() {
      window.removeEventListener("scroll", updateProgress);
      document.removeEventListener("click", handleAnchorClick);
      if (lenisRaf !== null) cancelAnimationFrame(lenisRaf);
      if (lenis) lenis.destroy();
    }

    return cleanup;
  }, []);

  return null;
}
