"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CalendarClock,
  CheckCircle2,
  Clock3,
  DatabaseZap,
  FileCheck2,
  Layers3,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const blobBase = "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com";

const shots = {
  dashboard: {
    src: `${blobBase}/01-dashboard-command-center.png`,
    alt: "Headmaster dashboard showing active runs, approvals, memory updates, automations, and system status.",
  },
  chat: {
    src: `${blobBase}/02-chat-ask-headmaster.png`,
    alt: "Headmaster chat view generating a product launch plan from workspace context.",
  },
  runs: {
    src: `${blobBase}/03-runs-execution-history.png`,
    alt: "Runs page showing workflow execution history, agents, statuses, and durations.",
  },
  approvals: {
    src: `${blobBase}/04-approvals-queue.png`,
    alt: "Approvals queue showing product launch documents awaiting human review.",
  },
  documents: {
    src: `${blobBase}/05-documents-knowledge-base.png`,
    alt: "Documents page showing approved workspace files and knowledge sources.",
  },
  memory: {
    src: `${blobBase}/06-memory-providers.png`,
    alt: "Memory page showing agent memory, user profile, providers, and persona tabs.",
  },
  automations: {
    src: `${blobBase}/07-automations-schedules.png`,
    alt: "Automations page showing scheduled workflows and recurring tasks.",
  },
  workflows: {
    src: `${blobBase}/08-workflows-skills-library.png`,
    alt: "Workflows page showing reusable skills and workflow playbooks.",
  },
  agents: {
    src: `${blobBase}/09-agents-profiles.png`,
    alt: "Agents page showing specialist agent profiles with models, memory, skills, and tools.",
  },
  integrations: {
    src: `${blobBase}/10-integrations-channels-mcp.png`,
    alt: "Integrations page showing channels, tools, connectors, MCP servers, webhooks, and API keys.",
  },
  models: {
    src: `${blobBase}/11-model-stack-providers-tayx.png`,
    alt: "Model stack page showing TayX, cloud models, coding models, local models, and enterprise endpoints.",
  },
  guided: {
    src: `${blobBase}/12-guided-workflow-run.png`,
    alt: "Guided workflow run showing steps, context, tools, output preview, and approval checkpoint.",
  },
};

const navItems = ["Products", "Solutions", "Resources", "Company", "Pricing"];

const proofPoints = [
  { label: "Persistent context", icon: DatabaseZap },
  { label: "Human approvals", icon: ShieldCheck },
  { label: "Reusable workflows", icon: Workflow },
  { label: "Model routing", icon: Network },
];

const operatingLayer = [
  "Memory",
  "Workflows",
  "Approvals",
  "Tools",
  "Channels",
  "Automations",
  "Agents",
  "Documents",
  "Model routing",
];

function ProductShot({
  src,
  alt,
  label,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Card className={cn("overflow-hidden rounded-3xl border bg-card shadow-xl shadow-foreground/5", className)}>
      {label ? (
        <CardHeader className="border-b bg-secondary/50 px-5 py-4">
          <CardTitle className="text-sm font-medium text-foreground">{label}</CardTitle>
          <CardDescription>Approved Headmaster interface image</CardDescription>
        </CardHeader>
      ) : null}
      <CardContent className="p-0">
        <Image
          src={src}
          alt={alt}
          width={1792}
          height={1024}
          priority={priority}
          className="h-auto w-full"
        />
      </CardContent>
      <CardFooter className="border-t bg-secondary/30 px-5 py-3 text-xs text-muted-foreground">
        Product proof, not concept art
      </CardFooter>
    </Card>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("flex max-w-3xl flex-col gap-4", align === "center" && "mx-auto items-center text-center")}>
      <Badge variant="outline" className="rounded-full bg-background px-3 py-1 text-muted-foreground">
        {eyebrow}
      </Badge>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">{title}</h2>
      <p className="text-lg leading-8 text-muted-foreground">{copy}</p>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  copy,
}: {
  icon: typeof Bot;
  title: string;
  copy: string;
}) {
  return (
    <Card className="rounded-2xl bg-card/80 shadow-sm">
      <CardHeader>
        <div className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <Icon aria-hidden="true" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{copy}</CardDescription>
      </CardHeader>
      <CardContent>
        <Separator />
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">Built for repeatable organization work.</CardFooter>
    </Card>
  );
}

function NavBar() {
  return (
    <header className="sticky top-0 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="GCAP home">
          <Image src="/images/logo.svg" alt="GCAP logo" width={34} height={34} className="size-9 rounded-md" />
          <span className="text-xl font-semibold tracking-tight">GCAP</span>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink href={`#${item.toLowerCase()}`}>{item}</NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" asChild>
            <a href="mailto:waitlist@gcap.online?subject=Book%20a%20GCAP%20Headmaster%20Demo">Book a Demo</a>
          </Button>
          <Button asChild>
            <a href="mailto:waitlist@gcap.online?subject=Try%20Headmaster">Try Headmaster</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open navigation menu">
              <Menu data-icon="inline-start" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>GCAP navigation</SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="rounded-md px-2 py-2 text-lg font-medium text-foreground">
                  {item}
                </a>
              ))}
              <Separator />
              <Button variant="outline" asChild>
                <a href="mailto:waitlist@gcap.online?subject=Book%20a%20GCAP%20Headmaster%20Demo">Book a Demo</a>
              </Button>
              <Button asChild>
                <a href="mailto:waitlist@gcap.online?subject=Try%20Headmaster">Try Headmaster</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function SplitSection({
  eyebrow,
  title,
  copy,
  points,
  shot,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  points?: string[];
  shot: (typeof shots)[keyof typeof shots];
  reverse?: boolean;
}) {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className={cn("flex flex-col gap-6", reverse && "lg:order-2")}>
          <SectionHeading eyebrow={eyebrow} title={title} copy={copy} />
          {points ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <Badge key={point} variant="secondary" className="justify-start rounded-full px-3 py-2 text-sm">
                  <CheckCircle2 aria-hidden="true" />
                  {point}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>
        <ProductShot src={shot.src} alt={shot.alt} label={eyebrow} className={cn(reverse && "lg:order-1")} />
      </div>
    </section>
  );
}

export default function ShadcnHeadmasterVariant() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <NavBar />

      <section id="products" className="overflow-hidden px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-7">
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="rounded-full px-3 py-1">
                  <Sparkles aria-hidden="true" />
                  Headmaster by GCAP
                </Badge>
                <Badge variant="outline" className="rounded-full bg-card px-3 py-1 text-muted-foreground">
                  Separate shadcn variant
                </Badge>
              </div>
              <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
                Persistent AI agents for organizations that run on repeat work.
              </h1>
              <p className="max-w-3xl text-xl leading-9 text-muted-foreground">
                Headmaster remembers context, learns workflows, connects to tools, schedules recurring work, and routes sensitive actions through human approval.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="mailto:waitlist@gcap.online?subject=Book%20a%20GCAP%20Headmaster%20Demo">
                    Book a Demo
                    <ArrowRight data-icon="inline-end" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#system">Explore the System</a>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 rounded-3xl border bg-card p-5 shadow-xl shadow-foreground/5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">Agent operating layer</p>
                  <p className="text-sm text-muted-foreground">Work console, memory, tools, approvals.</p>
                </div>
                <Badge variant="secondary">Warm light theme</Badge>
              </div>
              <Separator />
              <div className="grid gap-3 sm:grid-cols-2">
                {proofPoints.map(({ label, icon: Icon }) => (
                  <Card key={label} className="rounded-2xl bg-secondary/40 shadow-none">
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                          <Icon aria-hidden="true" />
                        </div>
                        <CardTitle className="text-sm">{label}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 pt-0">
                      <CardDescription>Practical controls for real work.</CardDescription>
                    </CardContent>
                    <CardFooter className="hidden" />
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <ProductShot src={shots.dashboard.src} alt={shots.dashboard.alt} priority label="Dashboard / Command Center" />
        </div>
      </section>

      <Separator />

      <SplitSection
        eyebrow="More than a chat box"
        title="Ask Headmaster. Get work moving."
        copy="Start with a request, attach context, and let Headmaster turn it into a plan, workflow, draft, or approval-ready output."
        points={["Attach context", "Use approved tools", "Generate plans, drafts, and docs", "Route for review when needed"]}
        shot={shots.chat}
      />

      <section id="solutions" className="bg-secondary/40 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <ProductShot src={shots.workflows.src} alt={shots.workflows.alt} label="Workflows / Skills Library" />
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Reusable workflows"
              title="Reusable workflows, not one-off prompts."
              copy="Headmaster can turn repeated work into reusable workflow skills: launch plans, research briefs, email campaigns, client reports, progress updates, and more."
            />
            <Card className="rounded-2xl bg-card/90">
              <CardHeader>
                <CardTitle>Workflows are the public surface.</CardTitle>
                <CardDescription>Skills are the reusable engine underneath: the saved steps, context, tool permissions, checks, and approval checkpoints that make repeated work reliable.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {operatingLayer.map((item) => (
                    <Badge key={item} variant="secondary" className="rounded-full">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">Built to become an operating rhythm, not a prompt archive.</CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section id="system" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <SectionHeading
            eyebrow="Guided workflow theater"
            title="See a workflow run from start to approval."
            copy="Headmaster loads context, uses approved tools, drafts outputs, tracks progress, and pauses for review when human approval is required."
            align="center"
          />
          <ProductShot src={shots.guided.src} alt={shots.guided.alt} label="Guided Workflow Run" />
          <div className="grid gap-4 md:grid-cols-3">
            <FeatureCard icon={Layers3} title="Loads the right context" copy="Workspace memory, documents, and saved workflow instructions come forward before work begins." />
            <FeatureCard icon={Workflow} title="Runs with approved tools" copy="Agents can follow the workflow, use connected tools, and keep the run visible." />
            <FeatureCard icon={FileCheck2} title="Pauses at approvals" copy="Sensitive actions wait for human review, edits, approval, rejection, or requested changes." />
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <SectionHeading
            eyebrow="Memory + Documents"
            title="Context that stays with the workspace."
            copy="Headmaster can remember useful context and use approved documents so workflows do not start from zero every time."
          />
          <Tabs defaultValue="memory" className="gap-6">
            <TabsList className="w-full max-w-md justify-start">
              <TabsTrigger value="memory">Memory</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="memory">
              <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <Card className="rounded-2xl bg-card/90">
                  <CardHeader>
                    <CardTitle>Built-in memory, user profiles, providers, and persona controls.</CardTitle>
                    <CardDescription>These controls help preserve how work should be done, which preferences matter, and what context can be reused.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Separator />
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground">Memory remains workspace-oriented and reviewable.</CardFooter>
                </Card>
                <ProductShot src={shots.memory.src} alt={shots.memory.alt} label="Memory Providers" />
              </div>
            </TabsContent>
            <TabsContent value="documents">
              <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <Card className="rounded-2xl bg-card/90">
                  <CardHeader>
                    <CardTitle>Approved files become workflow context.</CardTitle>
                    <CardDescription>Policies, templates, reports, briefs, spreadsheets, and working files become approved context for workflows.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Separator />
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground">Useful context can follow repeated work without starting over.</CardFooter>
                </Card>
                <ProductShot src={shots.documents.src} alt={shots.documents.alt} label="Documents / Knowledge Base" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <SplitSection
        eyebrow="Integrations / Channels / MCP"
        title="Connect the systems work already lives in."
        copy="Headmaster can connect communication channels, approved tools, connectors, webhooks, APIs, and MCP servers so workflows can reach the systems your team already uses."
        points={["Channels", "Tools", "Connectors", "MCP Servers", "Webhooks", "API Keys"]}
        shot={shots.integrations}
      />

      <SplitSection
        eyebrow="Specialist agents"
        title="Specialist agents with their own workspace."
        copy="Each agent can have its own model, memory, skills, tools, and role. Researchers, strategists, copywriters, analysts, admins, and code agents can work as focused helpers."
        shot={shots.agents}
        reverse
      />

      <section id="resources" className="bg-secondary/40 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionHeading
              eyebrow="Operations"
              title="Work runs, waits, and records what happened."
              copy="Scheduled work, approvals, and execution history keep Headmaster practical for teams that need control."
            />
          </div>
          <div className="grid gap-6 lg:col-span-2">
            <Card className="overflow-hidden rounded-3xl">
              <CardHeader>
                <Badge variant="secondary" className="w-fit rounded-full"><CalendarClock aria-hidden="true" /> Scheduled work</Badge>
                <CardTitle className="text-2xl">Work that wakes up on schedule.</CardTitle>
                <CardDescription>Recurring workflows can prepare reports, summaries, reminders, follow-ups, and approvals before anyone asks. Sensitive actions can still wait for review.</CardDescription>
              </CardHeader>
              <CardContent>
                <ProductShot src={shots.automations.src} alt={shots.automations.alt} label="Automations / Schedules" />
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">Recurring work without removing human control.</CardFooter>
            </Card>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="rounded-3xl">
                <CardHeader>
                  <Badge variant="outline" className="w-fit rounded-full bg-background"><ShieldCheck aria-hidden="true" /> Approvals</Badge>
                  <CardTitle>Control stays with people.</CardTitle>
                  <CardDescription>Headmaster can prepare work, but sensitive actions can pause for approval. Review, approve, reject, or request changes before anything important leaves the workspace.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProductShot src={shots.approvals.src} alt={shots.approvals.alt} label="Approvals Queue" />
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">Approval checkpoints protect important actions.</CardFooter>
              </Card>
              <Card className="rounded-3xl">
                <CardHeader>
                  <Badge variant="outline" className="w-fit rounded-full bg-background"><Clock3 aria-hidden="true" /> Runs</Badge>
                  <CardTitle>Every run leaves a trail.</CardTitle>
                  <CardDescription>Track what ran, which agent handled it, what status it reached, how long it took, and what needs attention.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProductShot src={shots.runs.src} alt={shots.runs.alt} label="Runs / Execution History" />
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">Operational history makes work inspectable.</CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="company" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Model stack / TayX"
              title="Model-agnostic by design."
              copy="Headmaster can route work across cloud models, coding models, local models, enterprise endpoints, custom endpoints, and GCAP’s own TayX model layer."
            />
            <Card className="rounded-2xl border-primary/20 bg-accent/60">
              <CardHeader>
                <CardTitle>TayX is the model layer.</CardTitle>
                <CardDescription>TayX is GCAP’s own trained and fine-tuned model layer for agentic work, coding, research, long-context reasoning, and tool-heavy workflows.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['trained', 'fine-tuned', 'optimized', 'tested', 'evaluated', 'agent-native'].map((item) => (
                    <Badge key={item} variant="outline" className="rounded-full bg-background">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">No benchmark claims, just clear positioning.</CardFooter>
            </Card>
          </div>
          <ProductShot src={shots.models.src} alt={shots.models.alt} label="Model Stack / Providers / TayX" />
        </div>
      </section>

      <section id="pricing" className="px-5 pb-20 md:px-8 md:pb-28">
        <Card className="mx-auto max-w-7xl overflow-hidden rounded-3xl border-primary/20 bg-card shadow-xl shadow-foreground/5">
          <CardHeader className="items-center gap-5 px-6 py-14 text-center md:px-16 md:py-20">
            <Badge className="rounded-full px-3 py-1">GCAP Headmaster</Badge>
            <CardTitle className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">Build your persistent AI workforce.</CardTitle>
            <CardDescription className="max-w-2xl text-lg leading-8">Headmaster works with your tools, your data, your models, and your people.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-3 px-6 pb-12 sm:flex-row sm:justify-center md:px-16">
            <Button size="lg" asChild>
              <a href="mailto:waitlist@gcap.online?subject=Book%20a%20GCAP%20Headmaster%20Demo">Book a Demo</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:waitlist@gcap.online?subject=Try%20Headmaster">Try Headmaster</a>
            </Button>
          </CardContent>
          <CardFooter className="justify-center border-t bg-secondary/40 px-6 py-5 text-center text-sm text-muted-foreground">
            Separate shadcn variant for review. The GCAP identity and logo are preserved.
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
