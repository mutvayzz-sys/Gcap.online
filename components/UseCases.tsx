"use client";

import { motion } from "framer-motion";
import { Building2, Code2, GraduationCap, Home, Megaphone, Stethoscope } from "lucide-react";
import { useCases } from "@/src/data/useCases";

const icons = [GraduationCap, Building2, Megaphone, Code2, Home, Stethoscope];

export default function UseCases() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" data-reveal-group>
      {useCases.map((useCase, i) => {
        const Icon = icons[i];
        return (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 min-h-[230px] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_20px_60px_rgba(17,17,17,0.08)]"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#F9F7F3] flex items-center justify-center mb-7 transition-transform duration-300 group-hover:scale-[1.04]" aria-hidden="true">
              <Icon size={20} strokeWidth={1.8} />
            </div>
            <h4 className="text-[22px] font-medium tracking-tight mb-3">{useCase.title}</h4>
            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{useCase.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
