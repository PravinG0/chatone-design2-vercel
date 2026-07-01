import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import logo from "@/assets/chatone-horizontal.png.asset.json";
import icon from "@/assets/chatone-icon.png.asset.json";
import {
  ArrowRight, Check, Sparkles, Cloud, Palette, Code2, BarChart3, BookOpen,
  Zap, Bot, MessageSquare, Globe, Layers, ShieldCheck, Plus, Minus,
} from "lucide-react";

/* ---------------- NAV ---------------- */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = ["Features", "How it works", "Integrations", "Pricing", "FAQ"];
  return (
    <>
      <div className="w-full text-center text-xs py-2.5 bg-brand-gradient text-white/95 font-medium tracking-wide">
        <Sparkles className="inline w-3.5 h-3.5 -mt-0.5 mr-1.5" />
        Trusted by 2,000+ businesses · Start free today, no credit card needed
      </div>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-xl border-b border-black/5" : "bg-white/40 backdrop-blur-md"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5">
          <a href="#" className="flex items-center gap-2">
            <img src={logo.url} alt="ChatOne" className="h-8 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                className="relative px-3.5 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors group"
              >
                {l}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-brand-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href="#" className="hidden sm:inline-flex text-sm font-medium text-foreground/80 hover:text-foreground px-3 py-2">
              Sign in
            </a>
            <MagneticButton>Get started free</MagneticButton>
          </div>
        </nav>
      </motion.header>
    </>
  );
}

/* ---------------- Magnetic Button ---------------- */
export function MagneticButton({
  children, href = "#", variant = "primary", icon: Icn,
}: { children: ReactNode; href?: string; variant?: "primary" | "ghost"; icon?: React.ComponentType<{ className?: string }> }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width - 0.5) * 14);
    y.set(((e.clientY - r.top) / r.height - 0.5) * 10);
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <motion.a
      ref={ref} href={href} onMouseMove={onMove} onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={variant === "primary" ? "btn-magnetic group" : "btn-ghost-pill group"}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {Icn ? <Icn className="w-4 h-4 transition-transform group-hover:translate-x-0.5" /> : null}
      </span>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "radial-gradient(120px 60px at var(--mx,50%) 50%, rgba(255,255,255,0.35), transparent 60%)",
          }}
        />
      )}
    </motion.a>
  );
}

/* ---------------- HERO ---------------- */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBlob = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const mouseX = useMotionValue(0.5); const mouseY = useMotionValue(0.5);
  const spotX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const spotY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mouseX.set((e.clientX - r.left) / r.width);
        mouseY.set((e.clientY - r.top) / r.height);
      }}
      className="relative overflow-hidden pt-20 pb-32 mesh-bg"
    >
      {/* Animated blobs */}
      <motion.div style={{ y: yBlob }} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-[#6C4BFF]/20 blur-[120px] animate-blob" />
        <div className="absolute top-40 -right-32 w-[560px] h-[560px] rounded-full bg-[#3B82F6]/25 blur-[130px] animate-blob" style={{ animationDelay: "-6s" }} />
        <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-indigo-200/60 blur-[120px] animate-blob" style={{ animationDelay: "-12s" }} />
      </motion.div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />

      {/* Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: useTransform(
            [spotX, spotY],
            ([x, y]: number[]) =>
              `radial-gradient(500px 400px at ${x * 100}% ${y * 100}%, rgba(108,75,255,0.18), transparent 60%)`
          ),
        }}
      />

      <motion.div style={{ opacity }} className="relative max-w-7xl mx-auto px-6 pt-14 pb-8 text-center">
        <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6C4BFF]" />
            No-code · Free to start
          </span>
        </motion.div>

        <h1 className="font-display mt-6 text-[clamp(2.5rem,7vw,5.75rem)] leading-[0.98] tracking-tight text-brand-ink max-w-5xl mx-auto">
          <StaggerText text="The AI chatbot for websites" />
          <br />
          <span className="text-gradient-brand italic">that speaks for your brand</span>
        </h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-7 max-w-2xl mx-auto text-lg text-foreground/60"
        >
          ChatOne learns from your own content and answers every visitor question instantly, around the clock.
          Upload documents, connect cloud storage, deploy in minutes.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton icon={ArrowRight}>Get started free</MagneticButton>
          <MagneticButton variant="ghost" icon={ArrowRight}>See a live demo</MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-8 flex items-center justify-center gap-3 text-sm text-foreground/60"
        >
          <div className="flex -space-x-2">
            {["J", "M", "A", "R", "+"].map((c, i) => (
              <span key={i}
                className="w-7 h-7 rounded-full border-2 border-white text-[11px] font-semibold text-white flex items-center justify-center bg-brand-gradient"
                style={{ backgroundPosition: `${i * 30}% 0` }}
              >{c}</span>
            ))}
          </div>
          Loved by <strong className="text-foreground">2,000+ teams</strong> across 50+ countries
        </motion.div>
      </motion.div>

      {/* Hero mockup */}
      <ChatMockup />
    </section>
  );
}

function StaggerText({ text }: { text: string }) {
  return (
    <span className="inline">
      {text.split(" ").map((w, i) => (
        <motion.span key={i} className="inline-block mr-[0.22em]"
          initial={{ y: "80%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ delay: 0.15 + i * 0.06, duration: 0.75, ease: [0.2, 0.7, 0.2, 1] }}
        >{w}</motion.span>
      ))}
    </span>
  );
}

/* ---------------- Chat Mockup ---------------- */
function ChatMockup() {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0, scale: 0.96 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative mt-14 max-w-4xl mx-auto px-6"
    >
      <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-white/80 to-white/30 shadow-[0_60px_120px_-40px_rgba(108,75,255,0.35)]">
        <div className="rounded-[calc(1.5rem-6px)] bg-white/90 backdrop-blur-xl border border-black/5 overflow-hidden">
          {/* window bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-black/5 bg-white/60">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
            <div className="ml-3 text-xs text-foreground/50">chatone.ai / preview</div>
          </div>
          <div className="grid md:grid-cols-[1fr_360px]">
            <div className="hidden md:block p-8 border-r border-black/5 mesh-bg">
              <div className="h-3 w-24 rounded-full bg-foreground/10 mb-4" />
              <div className="h-6 w-4/5 rounded-md bg-foreground/10 mb-2" />
              <div className="h-6 w-2/3 rounded-md bg-foreground/10 mb-6" />
              <div className="h-24 w-full rounded-xl bg-foreground/5" />
              <div className="mt-4 flex gap-2">
                <div className="h-8 w-24 rounded-full bg-brand-gradient" />
                <div className="h-8 w-24 rounded-full bg-foreground/10" />
              </div>
            </div>
            <div className="p-5 bg-gradient-to-b from-white to-indigo-50/40">
              <div className="flex items-center gap-3 pb-3 border-b border-black/5">
                <img src={icon.url} alt="Aria" className="w-9 h-9 rounded-xl shadow-md" />
                <div>
                  <div className="text-sm font-semibold text-brand-ink">Aria · Support Bot</div>
                  <div className="text-[11px] text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online now
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-3 text-sm">
                <ChatBubble side="bot" delay={0.9}>👋 Hi! I'm Aria. Ask me anything about products, shipping, or policies.</ChatBubble>
                <ChatBubble side="user" delay={1.6}>Do you ship internationally?</ChatBubble>
                <ChatBubble side="bot" delay={2.4}>Yes — we ship to 50+ countries with tracked delivery. Want a quote for your address?</ChatBubble>
                <TypingDots delay={3.3} />
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-full bg-white border border-black/5 px-3 py-2 shadow-sm">
                <MessageSquare className="w-4 h-4 text-foreground/40" />
                <span className="text-sm text-foreground/40 flex-1">Ask Aria anything…</span>
                <button className="w-7 h-7 rounded-full bg-brand-gradient text-white flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating cards */}
        <motion.div
          animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:flex absolute -left-10 top-24 glass-card rounded-2xl px-4 py-3 items-center gap-3"
        >
          <div className="w-9 h-9 rounded-xl bg-brand-gradient text-white flex items-center justify-center"><Zap className="w-4 h-4" /></div>
          <div>
            <div className="text-xs text-foreground/50">Support tickets</div>
            <div className="text-sm font-semibold text-brand-ink">−60% this month</div>
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: -2 }}
          className="hidden md:flex absolute -right-8 bottom-16 glass-card rounded-2xl px-4 py-3 items-center gap-3"
        >
          <div className="w-9 h-9 rounded-xl bg-indigo-50 text-[#6C4BFF] flex items-center justify-center"><Bot className="w-4 h-4" /></div>
          <div>
            <div className="text-xs text-foreground/50">Live in</div>
            <div className="text-sm font-semibold text-brand-ink">under 5 minutes</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ChatBubble({ side, children, delay = 0 }: { side: "bot" | "user"; children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`flex ${side === "user" ? "justify-end" : "justify-start"}`}
    >
      <div className={
        side === "bot"
          ? "max-w-[85%] rounded-2xl rounded-tl-md bg-white border border-black/5 px-3.5 py-2.5 shadow-sm text-brand-ink"
          : "max-w-[85%] rounded-2xl rounded-tr-md bg-brand-gradient text-white px-3.5 py-2.5 shadow-md"
      }>{children}</div>
    </motion.div>
  );
}
function TypingDots({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay }}
      className="inline-flex items-center gap-1 rounded-2xl rounded-tl-md bg-white border border-black/5 px-3 py-2.5 shadow-sm w-fit">
      {[0, 1, 2].map((i) => (
        <motion.span key={i} className="w-1.5 h-1.5 rounded-full bg-foreground/40"
          animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </motion.div>
  );
}

/* ---------------- Marquee ---------------- */
export function Marquee() {
  const industries = [
    "E-commerce stores", "SaaS platforms", "Healthcare portals", "Real estate firms",
    "Education platforms", "Restaurant chains", "Travel agencies", "Finance platforms",
    "Marketing agencies", "Non-profits", "IT service providers", "Logistics companies",
  ];
  return (
    <section className="py-14 border-y border-black/5 bg-white overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-foreground/50 mb-6">
        Works across every industry
      </p>
      <div className="relative">
        <div className="flex gap-10 whitespace-nowrap animate-marquee will-change-transform">
          {[...industries, ...industries].map((n, i) => (
            <span key={i} className="text-lg md:text-xl font-medium text-foreground/40 hover:text-foreground/80 transition">
              {n} <span className="text-[#6C4BFF]/40 mx-4">✦</span>
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}

/* ---------------- Reveal helper ---------------- */
export function Reveal({ children, delay = 0, y = 24 }: { children: ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >{children}</motion.div>
  );
}

/* ---------------- Counter ---------------- */
export function Counter({ to, suffix = "", duration = 1.6 }: { to: number; suffix?: string; duration?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / (duration * 1000), 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ---------------- Why ChatOne ---------------- */
export function WhyChatOne() {
  const bullets = [
    "Train on your own PDFs, DOCX, and websites",
    "Auto-sync with Google Drive and OneDrive",
    "Embed on any website in under 5 minutes",
    "Fully branded with your colors and logo",
    "Works on WordPress, Shopify, React, HTML — any stack",
  ];
  const stats = [
    { k: <><Counter to={60} suffix="%" /></>, label: "Support tickets resolved", sub: "Average reduction in the first month" },
    { k: "< 5 min", label: "Time to deploy", sub: "From signup to a live, trained chatbot" },
    { k: "24 / 7", label: "Always available", sub: "Weekends, holidays, off-hours" },
  ];
  return (
    <section className="relative py-32 px-6" id="why-chatone">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="eyebrow"><span className="w-1.5 h-1.5 rounded-full bg-[#6C4BFF]" />Why ChatOne</span>
          <h2 className="font-display mt-5 text-5xl md:text-6xl leading-[1.02] tracking-tight text-brand-ink">
            One platform. <span className="text-gradient-brand italic">Every answer.</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/60 max-w-xl">
            Your visitors ask questions every day. ChatOne turns your existing documents, PDFs, and web pages
            into a 24/7 AI assistant that responds instantly in plain, natural language. No scripts. No flowcharts.
          </p>
          <ul className="mt-8 space-y-3">
            {bullets.map((b, i) => (
              <Reveal key={b} delay={i * 0.05}>
                <li className="flex items-start gap-3 text-[15px] text-foreground/80">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-gradient text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  {b}
                </li>
              </Reveal>
            ))}
          </ul>
          <div className="mt-8"><MagneticButton icon={ArrowRight}>Try ChatOne free</MagneticButton></div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="glass-card rounded-2xl p-6 flex items-center gap-6"
              >
                <div className="font-display text-5xl md:text-6xl text-gradient-brand leading-none">{s.k}</div>
                <div>
                  <div className="text-sm font-semibold text-brand-ink">{s.label}</div>
                  <div className="text-sm text-foreground/55">{s.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Features ---------------- */
export function Features() {
  const items = [
    { icon: BookOpen, title: "Knowledge Base", desc: "Upload PDFs, DOCX, or TXT — or point ChatOne to any URL. It crawls and learns automatically.", tags: ["PDF upload", "Web crawling", "URL training"] },
    { icon: Sparkles, title: "Custom Tone Training", desc: "Set the exact personality. Friendly, professional, technical — or write your own system prompt.", tags: ["Tone settings", "Custom prompts", "Brand voice"] },
    { icon: Cloud, title: "Cloud Sync", desc: "Connect Google Drive and OneDrive so your chatbot always has the latest documents.", tags: ["Google Drive", "OneDrive", "Real-time"] },
    { icon: Palette, title: "Custom Branding", desc: "Upload your logo, choose brand colors, and design the widget. Your brand, not a generic bubble.", tags: ["Logo", "Themes", "Widget UI"] },
    { icon: Code2, title: "Easy Embedding", desc: "One line of code. Works on WordPress, Shopify, Wix, React, Vue, HTML — every tech stack.", tags: ["JavaScript", "WordPress", "React"] },
    { icon: BarChart3, title: "Usage Tracking", desc: "Monitor conversations, track questions, and identify gaps in your knowledge base.", tags: ["Analytics", "Logs", "Reports"] },
  ];
  return (
    <section id="features" className="relative py-32 px-6 bg-gradient-to-b from-white via-indigo-50/30 to-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-60" />
      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow"><span className="w-1.5 h-1.5 rounded-full bg-[#6C4BFF]" />Features</span>
            <h2 className="font-display mt-5 text-5xl md:text-6xl leading-[1.02] tracking-tight text-brand-ink">
              Everything you need to build a <span className="text-gradient-brand italic">smart AI chatbot</span>
            </h2>
            <p className="mt-5 text-lg text-foreground/60">
              Six core features that take you from zero to a fully deployed AI website assistant — setup takes minutes, not months.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <FeatureCard {...f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icn, title, desc, tags }: { icon: any; title: string; desc: string; tags: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
      }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="grad-border relative rounded-2xl p-6 h-full glass-card overflow-hidden group"
    >
      <div className="grad-border-inner rounded-2xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(260px 200px at ${pos.x}% ${pos.y}%, rgba(108,75,255,0.15), transparent 70%)` }}
      />
      <div className="relative">
        <div className="w-11 h-11 rounded-xl bg-brand-gradient text-white flex items-center justify-center shadow-lg shadow-[#6C4BFF]/25 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          <Icn className="w-5 h-5" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-brand-ink">{title}</h3>
        <p className="mt-2 text-[15px] text-foreground/60 leading-relaxed">{desc}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="text-[11px] font-medium px-2 py-1 rounded-full bg-indigo-50 text-[#4c39c9] border border-indigo-100">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- How it works ---------------- */
export function HowItWorks() {
  const steps = [
    { n: "01", t: "Create your bot", d: "Name your bot, choose its tone — friendly, professional, or technical — and write a custom system prompt for your brand voice.", icon: Bot },
    { n: "02", t: "Upload your knowledge", d: "Add PDFs, DOCX files, or paste any website URL. ChatOne reads your content and builds a smart knowledge base automatically.", icon: BookOpen },
    { n: "03", t: "Customize the look", d: "Upload your logo, choose brand colors, and write a welcome message. It should feel like a natural part of your site.", icon: Palette },
    { n: "04", t: "Embed and go live", d: "Copy one line of code. Paste it into your website. Your AI assistant is live and answering visitors around the clock.", icon: Code2 },
  ];
  return (
    <section id="how-it-works" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow"><span className="w-1.5 h-1.5 rounded-full bg-[#6C4BFF]" />How it works</span>
            <h2 className="font-display mt-5 text-5xl md:text-6xl leading-[1.02] tracking-tight text-brand-ink">
              From zero to live chatbot in <span className="text-gradient-brand italic">under 10 minutes</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#6C4BFF]/40 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }} className="relative rounded-2xl p-6 bg-white border border-black/5 hover:border-[#6C4BFF]/30 transition-all h-full shadow-sm hover:shadow-xl hover:shadow-[#6C4BFF]/10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl text-gradient-brand">{s.n}</span>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#6C4BFF] flex items-center justify-center">
                    <s.icon className="w-4.5 h-4.5" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-ink">{s.t}</h3>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{s.d}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Use Cases ---------------- */
export function UseCases() {
  const uses = [
    { icon: "🎧", t: "AI Customer Support", d: "Reduce ticket volume by up to 60%. Your AI answers common questions instantly, so your team can focus on conversations that need a real person.", link: "customer support" },
    { icon: "🛒", t: "E-commerce & Shopify", d: "Turn browsers into buyers. ChatOne answers product questions, recommends items, and handles checkout queries — reducing cart abandonment.", link: "e-commerce" },
    { icon: "🚀", t: "SaaS Platform Support", d: "Let your AI assistant handle onboarding, feature explanations, and troubleshooting using your product docs and knowledge base.", link: "SaaS use case" },
    { icon: "📖", t: "Documentation Sites", d: "Add a conversational AI to your docs so visitors can ask questions in plain language instead of searching through pages of content.", link: "docs use case" },
  ];
  return (
    <section className="relative py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow"><span className="w-1.5 h-1.5 rounded-full bg-[#6C4BFF]" />Use cases</span>
            <h2 className="font-display mt-5 text-5xl md:text-6xl leading-[1.02] tracking-tight text-brand-ink">
              Built for every type of <span className="text-gradient-brand italic">business</span>
            </h2>
            <p className="mt-5 text-lg text-foreground/60">
              Whether you run a Shopify store, a SaaS platform, or a local service business, ChatOne has a use case built for you.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {uses.map((u, i) => (
            <Reveal key={u.t} delay={i * 0.06}>
              <motion.div whileHover={{ y: -6 }} className="glass-card rounded-2xl p-8 h-full group">
                <div className="text-3xl">{u.icon}</div>
                <h3 className="mt-4 text-2xl font-semibold text-brand-ink">{u.t}</h3>
                <p className="mt-3 text-[15px] text-foreground/60 leading-relaxed">{u.d}</p>
                <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#6C4BFF] group-hover:gap-2.5 transition-all">
                  Explore {u.link} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Integrations ---------------- */
export function Integrations() {
  const cards = [
    { icon: Cloud, t: "Google Drive", d: "Connect Drive folders and ChatOne syncs your documents automatically. Update a file and your bot knows instantly.", tag: "Auto-sync enabled" },
    { icon: Layers, t: "Microsoft OneDrive", d: "Connect OneDrive and your chatbot always has the most current version of every document you've shared.", tag: "Auto-sync enabled" },
    { icon: Globe, t: "WordPress Plugin", d: "The easiest WordPress chatbot plugin you'll install. Add a shortcode, paste your embed ID — live in under 2 minutes.", tag: "Plugin available" },
  ];
  const stacks = ["Shopify", "Wix", "Squarespace", "Webflow", "Framer", "React", "Vue", "Angular", "HTML"];
  return (
    <section id="integrations" className="relative py-32 px-6 bg-brand-ink text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[#6C4BFF]/20 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/15 blur-[140px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 noise" />
      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-[11px] uppercase tracking-[0.15em] text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" /> Integrations
            </span>
            <h2 className="font-display mt-5 text-5xl md:text-6xl leading-[1.02] tracking-tight">
              Connects to the tools your team <span className="text-gradient-brand italic">already uses</span>
            </h2>
            <p className="mt-5 text-lg text-white/60">
              ChatOne fits into your existing workflow — Google Drive, OneDrive, and every major website platform out of the box.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }} className="relative rounded-2xl p-7 bg-white/[0.04] border border-white/10 backdrop-blur-xl h-full hover:bg-white/[0.06] transition">
                <div className="w-11 h-11 rounded-xl bg-brand-gradient text-white flex items-center justify-center shadow-lg shadow-[#6C4BFF]/40">
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{c.t}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{c.d}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-emerald-300/90">
                  <Check className="w-3.5 h-3.5" /> {c.tag}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center gap-3 justify-center text-sm text-white/50">
            <span className="text-white/40">Also works with:</span>
            {stacks.map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
export function Pricing() {
  const plans = [
    { name: "Free", price: "$0", period: "/ forever", cta: "Get started free", featured: false,
      features: ["100 requests / month", "1 chatbot", "Knowledge base", "Website embed", "Basic analytics"] },
    { name: "Standard", price: "$29", period: "/ mo", cta: "Start free trial", featured: false,
      features: ["10,000 requests / month", "3 chatbots", "Advanced knowledge base", "Google Drive & OneDrive sync", "Custom branding", "Usage analytics"] },
    { name: "Pro", price: "$99", period: "/ mo", cta: "Start free trial", featured: true, badge: "Most popular",
      features: ["25,000 requests / month", "10 chatbots", "Everything in Standard", "Advanced analytics", "API access", "White-label option", "Dedicated support", "Multi-user access"] },
    { name: "Custom", price: "Tailored", period: "", cta: "Contact our team", featured: false,
      features: ["Unlimited requests", "Unlimited chatbots", "Everything in Pro", "Dedicated account manager", "Custom integrations", "SLA guarantee", "CCPA / HIPAA support"] },
  ];
  return (
    <section id="pricing" className="relative py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-2xl text-center mx-auto">
            <span className="eyebrow"><span className="w-1.5 h-1.5 rounded-full bg-[#6C4BFF]" />Pricing</span>
            <h2 className="font-display mt-5 text-5xl md:text-6xl leading-[1.02] tracking-tight text-brand-ink">
              Simple pricing, including a <span className="text-gradient-brand italic">genuinely free plan</span>
            </h2>
            <p className="mt-5 text-lg text-foreground/60">
              No surprise fees. No "contact us for pricing." Plans built for every size of business.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.07}>
              <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`relative rounded-2xl p-7 h-full flex flex-col ${
                  p.featured
                    ? "bg-brand-ink text-white shadow-[0_40px_80px_-20px_rgba(108,75,255,0.5)] scale-[1.02]"
                    : "bg-white border border-black/[0.06] shadow-sm"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-semibold px-3 py-1 rounded-full bg-brand-gradient text-white uppercase tracking-wider shadow-lg">
                    {p.badge}
                  </span>
                )}
                <div className={`text-sm font-medium ${p.featured ? "text-white/60" : "text-foreground/55"}`}>{p.name}</div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className={`font-display text-5xl ${p.featured ? "text-white" : "text-brand-ink"}`}>{p.price}</span>
                  <span className={`text-sm ${p.featured ? "text-white/50" : "text-foreground/50"}`}>{p.period}</span>
                </div>
                <div className={`my-6 h-px ${p.featured ? "bg-white/10" : "bg-black/5"}`} />
                <ul className="space-y-2.5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className={`text-sm flex items-start gap-2 ${p.featured ? "text-white/70" : "text-foreground/70"}`}>
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.featured ? "text-[#a78bfa]" : "text-[#6C4BFF]"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`mt-7 w-full rounded-full py-3 text-sm font-semibold transition ${
                  p.featured
                    ? "bg-brand-gradient text-white hover:brightness-110"
                    : "bg-brand-ink text-white hover:bg-brand-ink/90"
                }`}>{p.cta}</button>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function FAQ() {
  const items = [
    { q: "How is ChatOne different from other AI chatbots?", a: "ChatOne is trained exclusively on your documents, policies, and products — meaning accurate, brand-aligned answers every time. No generic responses and no irrelevant information, just answers your visitors can trust." },
    { q: "Is ChatOne really free? What's the catch?", a: "ChatOne has a genuinely free plan with 1 chatbot and 100 requests per month. No credit card required, no time limit. When you need more bots or requests, paid plans start at $29 per month." },
    { q: "How do I add a chatbot to my website?", a: "Under 10 minutes. Create your bot, upload your documents, copy a single line of JavaScript embed code, and paste it before the closing body tag. Works with WordPress, Shopify, React, Squarespace, and any tech stack." },
    { q: "Do you have a WordPress chatbot plugin?", a: "Yes. ChatOne has a dedicated WordPress plugin. Add your chatbot using a simple shortcode — no coding required. It works with WordPress, WooCommerce, and Elementor." },
    { q: "Can ChatOne handle customer service conversations?", a: "Yes. ChatOne's conversational AI handles FAQs, policy questions, order status, and troubleshooting. If a question falls outside its knowledge base, it can escalate to a human agent or collect contact details for follow-up." },
    { q: "Does it work for e-commerce stores?", a: "Yes. ChatOne's AI chatbot is widely used on Shopify and WooCommerce. Train it on your product catalog, shipping, and return policies — it handles common order queries automatically." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <span className="eyebrow"><span className="w-1.5 h-1.5 rounded-full bg-[#6C4BFF]" />FAQ</span>
          <h2 className="font-display mt-5 text-5xl md:text-6xl leading-[1.02] tracking-tight text-brand-ink">
            Questions people ask <span className="text-gradient-brand italic">before getting started</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/60">Everything you need to know about ChatOne.</p>
        </Reveal>
        <div className="mt-12 divide-y divide-black/5 border-t border-b border-black/5">
          {items.map((it, i) => {
            const active = open === i;
            return (
              <div key={i}>
                <button onClick={() => setOpen(active ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                >
                  <span className={`text-lg font-medium transition-colors ${active ? "text-[#6C4BFF]" : "text-brand-ink group-hover:text-[#6C4BFF]"}`}>
                    {it.q}
                  </span>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${active ? "bg-brand-gradient text-white rotate-180" : "bg-indigo-50 text-[#6C4BFF]"}`}>
                    {active ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-[15px] text-foreground/65 leading-relaxed">{it.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
export function CTA() {
  return (
    <section className="relative py-24 px-6">
      <div className="relative max-w-6xl mx-auto rounded-[2rem] overflow-hidden bg-brand-ink text-white p-14 md:p-20 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#6C4BFF]/40 blur-[120px] animate-blob" />
          <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/35 blur-[130px] animate-blob" style={{ animationDelay: "-6s" }} />
        </div>
        <div className="pointer-events-none absolute inset-0 noise" />
        <Reveal>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-[11px] uppercase tracking-[0.15em] text-white/70">
            <ShieldCheck className="w-3.5 h-3.5" /> Ready when you are
          </span>
          <h2 className="font-display mt-6 text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Your website chatbot could be <span className="text-gradient-brand italic">live today.</span>
          </h2>
          <p className="mt-5 text-lg text-white/60 max-w-2xl mx-auto">
            Join thousands of businesses using ChatOne to answer visitor questions, reduce support volume, and scale confidently.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton icon={ArrowRight}>Start for free — no card needed</MagneticButton>
            <a href="#" className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white/85 hover:text-white transition">
              See a live demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-7 flex items-center justify-center gap-6 text-sm text-white/50">
            <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400" /> Setup in under 10 minutes</span>
            <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400" /> Cancel anytime</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  const cols = [
    { h: "Product", l: ["Features", "Pricing", "Integrations", "Changelog"] },
    { h: "Use Cases", l: ["Customer Support", "E-commerce", "SaaS Platforms", "Documentation"] },
    { h: "Resources", l: ["Blog", "Documentation", "Comparisons", "About"] },
    { h: "Legal", l: ["Privacy", "Terms", "Sitemap", "Contact"] },
  ];
  return (
    <footer className="relative pt-20 pb-10 px-6 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-6 gap-10">
        <div className="md:col-span-2">
          <img src={logo.url} alt="ChatOne" className="h-8" />
          <p className="mt-5 text-sm text-foreground/60 max-w-xs leading-relaxed">
            The AI chatbot for websites trusted by businesses worldwide. Build, train, and deploy in minutes. No coding required.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div className="text-sm font-semibold text-brand-ink">{c.h}</div>
            <ul className="mt-4 space-y-2.5">
              {c.l.map((i) => (
                <li key={i}><a href="#" className="text-sm text-foreground/60 hover:text-foreground transition">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-16 pt-6 border-t border-black/5 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-foreground/50">
        <span>© 2026 ChatOne. All rights reserved.</span>
        <span>The AI chatbot for websites.</span>
      </div>
    </footer>
  );
}
