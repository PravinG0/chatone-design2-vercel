import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import logo from "@/assets/chatone-horizontal.png.asset.json";
import icon from "@/assets/chatone-icon.png.asset.json";
import {
  ArrowRight, Check, Sparkles, Cloud, Palette, Code2, BarChart3, BookOpen,
  Zap, Bot, MessageSquare, Globe, Layers, ShieldCheck, Plus, Minus,
  Twitter, Github, Linkedin, Youtube, Rocket, Upload, Wand2, Send,
  ShoppingBag, Headphones, FileText, TrendingUp,
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

/* ---------------- Section Heading ---------------- */
function SectionHeading({
  eyebrow, title, highlight, desc, center = false,
}: { eyebrow: string; title: string; highlight?: string; desc?: string; center?: boolean }) {
  return (
    <Reveal>
      <div className={center ? "max-w-2xl mx-auto text-center" : "max-w-2xl"}>
        <span className="eyebrow"><span className="w-1.5 h-1.5 rounded-full bg-[#6C4BFF]" />{eyebrow}</span>
        <h2 className="font-display mt-5 text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-brand-ink">
          {title}{highlight && <> <span className="text-gradient-brand italic">{highlight}</span></>}
        </h2>
        {desc && <p className="mt-5 text-lg text-foreground/60 leading-relaxed">{desc}</p>}
      </div>
    </Reveal>
  );
}

/* ---------------- Tilt Card ---------------- */
function TiltCard({ children, className = "", intensity = 8 }: { children: ReactNode; className?: string; intensity?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0); const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 20 });
  const sry = useSpring(ry, { stiffness: 180, damping: 20 });
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * intensity); rx.set(-py * intensity);
  };
  const reset = () => { rx.set(0); ry.set(0); };
  return (
    <motion.div
      ref={ref} onMouseMove={onMove} onMouseLeave={reset}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Why ChatOne ---------------- */
export function WhyChatOne() {
  const bullets = [
    { icon: BookOpen, t: "Train on your content", d: "PDFs, DOCX, websites — all in one workspace." },
    { icon: Cloud, t: "Sync from the cloud", d: "Google Drive & OneDrive stay in perfect sync." },
    { icon: Code2, t: "Deploy in minutes", d: "One line of code on any website, any stack." },
    { icon: Palette, t: "Match your brand", d: "Colors, logo, tone — fully yours." },
  ];
  return (
    <section id="why-chatone" className="relative py-28 md:py-36 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-60" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <SectionHeading
            center
            eyebrow="Why ChatOne"
            title="One platform."
            highlight="Every answer."
            desc="Turn every document you already have into a 24/7 AI assistant that answers instantly, on brand, in plain language."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[minmax(180px,auto)]">
          <Reveal>
            <TiltCard className="md:col-span-3 rounded-3xl p-8 md:p-10 h-full bg-white border border-black/[0.06] shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_60px_-30px_rgba(108,75,255,0.25)] overflow-hidden relative group">
              <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#6C4BFF]/15 blur-3xl group-hover:scale-125 transition-transform duration-700" />
              <div className="relative">
                <div className="eyebrow"><TrendingUp className="w-3.5 h-3.5" /> Support impact</div>
                <div className="font-display mt-6 text-7xl md:text-8xl text-gradient-brand leading-none">
                  <Counter to={60} suffix="%" />
                </div>
                <p className="mt-4 text-lg text-brand-ink font-medium">Support tickets resolved</p>
                <p className="mt-1 text-sm text-foreground/55">Average reduction in the first month.</p>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="md:col-span-3 grid grid-cols-2 gap-4 md:gap-5 h-full">
              <TiltCard className="rounded-3xl p-6 h-full bg-gradient-to-br from-[#6C4BFF] to-[#3B82F6] text-white shadow-[0_20px_60px_-25px_rgba(108,75,255,0.6)] overflow-hidden relative flex flex-col justify-between">
                <Rocket className="w-6 h-6 opacity-80" />
                <div>
                  <div className="font-display text-4xl md:text-5xl leading-none">&lt; 5<span className="text-2xl md:text-3xl"> min</span></div>
                  <p className="mt-2 text-sm text-white/85">From signup to a live, trained chatbot.</p>
                </div>
              </TiltCard>
              <TiltCard className="rounded-3xl p-6 h-full bg-white border border-black/[0.06] shadow-[0_20px_60px_-30px_rgba(15,23,42,0.1)] flex flex-col justify-between">
                <ShieldCheck className="w-6 h-6 text-[#6C4BFF]" />
                <div>
                  <div className="font-display text-4xl md:text-5xl text-brand-ink leading-none">24/7</div>
                  <p className="mt-2 text-sm text-foreground/60">Always on — weekends, holidays, off-hours.</p>
                </div>
              </TiltCard>
            </div>
          </Reveal>

          {bullets.map((b, i) => (
            <Reveal key={b.t} delay={0.15 + i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="rounded-2xl p-6 h-full bg-white/70 backdrop-blur-xl border border-black/[0.06] hover:border-[#6C4BFF]/25 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-[0_15px_40px_-20px_rgba(108,75,255,0.25)] transition-all flex items-start gap-4"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-indigo-50 border border-indigo-100 text-[#6C4BFF] flex items-center justify-center">
                  <b.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-brand-ink">{b.t}</h3>
                  <p className="mt-1 text-sm text-foreground/60 leading-relaxed">{b.d}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.35}>
          <div className="mt-12 flex justify-center"><MagneticButton icon={ArrowRight}>Try ChatOne free</MagneticButton></div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Features ---------------- */
type FeatureItem = {
  icon: any;
  eyebrow: string;
  title: string;
  desc: string;
  variant: "violet" | "ink" | "cream" | "blue";
  visual: "kb" | "tone" | "sync" | "brand" | "embed" | "analytics";
};

const FEATURE_ITEMS: FeatureItem[] = [
  { icon: BookOpen, eyebrow: "Knowledge", title: "Feed it anything.\nIt learns instantly.", desc: "Drop PDFs, DOCX, or a URL — ChatOne crawls, chunks, and indexes automatically.", variant: "violet", visual: "kb" },
  { icon: Sparkles, eyebrow: "Personality", title: "A voice that sounds\nunmistakably yours.", desc: "Dial in tone, style, and guardrails with prompt-level control.", variant: "ink", visual: "tone" },
  { icon: Cloud, eyebrow: "Sync", title: "Always in sync with\nyour source of truth.", desc: "Connect Google Drive & OneDrive — updates stream in live.", variant: "cream", visual: "sync" },
  { icon: Palette, eyebrow: "Brand", title: "Pixel-perfect to your\nbrand, not a bubble.", desc: "Logo, colors, radius, position — every detail tunable.", variant: "violet", visual: "brand" },
  { icon: Code2, eyebrow: "Embed", title: "One line of code.\nAnywhere on the web.", desc: "WordPress, Shopify, Wix, React, Vue, plain HTML — works everywhere.", variant: "blue", visual: "embed" },
  { icon: BarChart3, eyebrow: "Insights", title: "See what your users\nactually ask for.", desc: "Live conversations, top questions, knowledge gaps — all in one view.", variant: "ink", visual: "analytics" },
];

export function Features() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] });

  // Compute translate distance based on rendered widths at runtime
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const total = trackRef.current.scrollWidth;
      const view = trackRef.current.clientWidth;
      setDistance(Math.max(0, total - view));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -distance]);
  const xSpring = useSpring(x, { stiffness: 120, damping: 26, mass: 0.4 });
  const progressWidth = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);

  return (
    <section
      id="features"
      ref={wrapRef}
      className="relative"
      style={{ height: `${100 + FEATURE_ITEMS.length * 55}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden bg-gradient-to-b from-white via-[#F6F4FF] to-white">
        {/* soft brand mesh */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(circle, #C9B8FF 0%, transparent 60%)" }} />
          <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, #A8CBFF 0%, transparent 60%)" }} />
        </div>

        {/* Header row */}
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-10 pt-24 md:pt-28">
          <div className="flex items-end justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="eyebrow">
                <Sparkles className="w-3 h-3" /> Features
              </span>
            </div>
            <div className="hidden md:flex items-center gap-3 text-xs font-medium text-brand-ink/50">
              <span>Scroll</span>
              <div className="h-[2px] w-28 rounded-full bg-brand-ink/10 overflow-hidden">
                <motion.div className="h-full bg-gradient-to-r from-[#9132FB] to-[#0C87FD]" style={{ width: progressWidth }} />
              </div>
            </div>
          </div>
          <h2 className="mt-6 max-w-4xl font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-brand-ink">
            Everything you need to ship a{" "}
            <span className="text-gradient-brand italic">smart AI assistant</span>.
          </h2>
        </div>

        {/* Horizontal track */}
        <div className="relative z-10 flex-1 flex items-center mt-8 md:mt-12">
          <motion.div
            ref={trackRef}
            style={{ x: xSpring }}
            className="flex gap-6 md:gap-8 pl-6 md:pl-10 pr-[20vw] will-change-transform"
          >
            {FEATURE_ITEMS.map((f, i) => (
              <FeatureCard key={f.title} item={f} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const VARIANT_STYLES: Record<FeatureItem["variant"], { bg: string; text: string; sub: string; chip: string; ring: string }> = {
  violet: { bg: "bg-[#E6DBFF]", text: "text-[#1A0B4A]", sub: "text-[#1A0B4A]/70", chip: "bg-white/70 text-[#4B1FB8] border-[#4B1FB8]/15", ring: "ring-white/60" },
  ink:    { bg: "bg-[#0B0B2E]", text: "text-white",     sub: "text-white/70",     chip: "bg-white/10 text-white border-white/15",         ring: "ring-white/10" },
  cream:  { bg: "bg-[#F3EEE3]", text: "text-[#1A0B4A]", sub: "text-[#1A0B4A]/65", chip: "bg-white text-[#4B1FB8] border-[#4B1FB8]/15",   ring: "ring-black/5" },
  blue:   { bg: "bg-[#DCEBFF]", text: "text-[#031B4E]", sub: "text-[#031B4E]/70", chip: "bg-white/80 text-[#0C87FD] border-[#0C87FD]/20", ring: "ring-white/60" },
};

function FeatureCard({ item, index }: { item: FeatureItem; index: number }) {
  const s = VARIANT_STYLES[item.variant];
  const Icn = item.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`relative shrink-0 w-[82vw] sm:w-[62vw] md:w-[46vw] lg:w-[36vw] xl:w-[32vw] h-[62vh] md:h-[68vh] rounded-[32px] overflow-hidden ${s.bg} ${s.text} shadow-[0_30px_80px_-40px_rgba(15,10,60,0.35)] ring-1 ${s.ring}`}
    >
      {/* Top: text */}
      <div className="relative p-8 md:p-10">
        <div className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full border ${s.chip}`}>
          <Icn className="w-3.5 h-3.5" /> {item.eyebrow}
        </div>
        <h3 className="mt-6 font-display text-3xl md:text-[40px] leading-[1.05] tracking-tight whitespace-pre-line">
          {item.title}
        </h3>
        <p className={`mt-4 max-w-md text-[15px] md:text-base leading-relaxed ${s.sub}`}>{item.desc}</p>
      </div>

      {/* Bottom: visual */}
      <div className="absolute inset-x-0 bottom-0 h-[46%] md:h-[48%] px-6 md:px-8 pb-6 md:pb-8">
        <FeatureVisual kind={item.visual} variant={item.variant} />
      </div>
    </motion.article>
  );
}

function FeatureVisual({ kind, variant }: { kind: FeatureItem["visual"]; variant: FeatureItem["variant"] }) {
  const dark = variant === "ink";
  const surface = dark ? "bg-white/[0.06] border-white/10 text-white" : "bg-white border-black/5 text-brand-ink";
  const subtext = dark ? "text-white/60" : "text-brand-ink/60";

  if (kind === "kb") {
    const files = [
      { name: "brand-guide.pdf", size: "2.4 MB", tag: "PDF" },
      { name: "help-center.com", size: "312 pages", tag: "URL" },
      { name: "product.docx", size: "180 KB", tag: "DOC" },
    ];
    return (
      <div className={`relative w-full h-full rounded-2xl border p-4 md:p-5 backdrop-blur ${surface} overflow-hidden`}>
        <div className={`text-xs font-medium ${subtext}`}>Ingesting sources…</div>
        <div className="mt-3 space-y-2">
          {files.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.12 }}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${dark ? "bg-white/[0.05]" : "bg-brand-ink/[0.03]"}`}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9132FB] to-[#0C87FD] flex items-center justify-center text-white text-[10px] font-bold">{f.tag}</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{f.name}</div>
                <div className={`text-[11px] ${subtext}`}>{f.size}</div>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.9 }}
                className="w-16 h-1.5 rounded-full bg-gradient-to-r from-[#9132FB] to-[#0C87FD]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "tone") {
    return (
      <div className={`relative w-full h-full rounded-2xl border p-5 ${surface} flex flex-col justify-end gap-3`}>
        <div className="absolute top-4 right-4 flex gap-1.5">
          {["Friendly", "Expert", "Concise"].map((t, i) => (
            <span key={t} className={`text-[10px] font-semibold px-2 py-1 rounded-full ${i === 1 ? "bg-gradient-to-r from-[#9132FB] to-[#0C87FD] text-white" : dark ? "bg-white/10 text-white/70" : "bg-brand-ink/[0.06]"}`}>{t}</span>
          ))}
        </div>
        <div className={`max-w-[75%] rounded-2xl rounded-bl-sm px-4 py-3 text-sm ${dark ? "bg-white/[0.08]" : "bg-brand-ink/[0.04]"}`}>
          What's your return policy?
        </div>
        <div className="max-w-[80%] self-end rounded-2xl rounded-br-sm px-4 py-3 text-sm bg-gradient-to-br from-[#9132FB] to-[#0C87FD] text-white">
          Happy to help! Returns are free within 30 days — I can start one for you now.
        </div>
      </div>
    );
  }

  if (kind === "sync") {
    return (
      <div className={`relative w-full h-full rounded-2xl border p-5 ${surface} flex items-center justify-center`}>
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9132FB] to-[#0C87FD] flex items-center justify-center text-white shadow-lg z-10">
            <Cloud className="w-7 h-7" />
          </div>
          {[
            { label: "Drive", angle: -140 },
            { label: "OneDrive", angle: -40 },
            { label: "Notion", angle: 90 },
          ].map((n, i) => {
            const rad = (n.angle * Math.PI) / 180;
            const r = 110;
            const dx = Math.cos(rad) * r;
            const dy = Math.sin(rad) * r;
            return (
              <div key={n.label} className="absolute" style={{ transform: `translate(${dx}px, ${dy}px)` }}>
                <div className={`px-3 py-2 rounded-xl text-xs font-semibold ${dark ? "bg-white/10 text-white" : "bg-white text-brand-ink shadow-md"} border ${dark ? "border-white/10" : "border-black/5"}`}>
                  {n.label}
                </div>
              </div>
            );
          })}
          <svg className="absolute inset-0 w-full h-full" viewBox="-160 -120 320 240" fill="none">
            {[-140, -40, 90].map((a, i) => {
              const rad = (a * Math.PI) / 180;
              const r = 90;
              return (
                <motion.line
                  key={i}
                  x1="0" y1="0"
                  x2={Math.cos(rad) * r} y2={Math.sin(rad) * r}
                  stroke="url(#syncG)" strokeWidth="1.5" strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
                />
              );
            })}
            <defs>
              <linearGradient id="syncG" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#9132FB" />
                <stop offset="100%" stopColor="#0C87FD" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    );
  }

  if (kind === "brand") {
    return (
      <div className={`relative w-full h-full rounded-2xl border p-5 ${surface} grid grid-cols-2 gap-3`}>
        <div className="flex flex-col gap-2">
          <div className={`text-[11px] font-semibold uppercase tracking-wider ${subtext}`}>Theme</div>
          <div className="flex gap-2">
            {["#9132FB", "#0C87FD", "#01013A", "#F3EEE3"].map((c) => (
              <div key={c} className="w-8 h-8 rounded-full ring-2 ring-white shadow" style={{ background: c }} />
            ))}
          </div>
          <div className={`mt-3 text-[11px] font-semibold uppercase tracking-wider ${subtext}`}>Radius</div>
          <div className="flex gap-2">
            {[8, 14, 22].map((r) => (
              <div key={r} className={`w-8 h-8 border-2 ${dark ? "border-white/40" : "border-brand-ink/30"}`} style={{ borderRadius: r }} />
            ))}
          </div>
        </div>
        <div className="relative rounded-xl bg-gradient-to-br from-[#9132FB] to-[#0C87FD] p-3 flex flex-col justify-end">
          <div className="rounded-lg bg-white/95 p-3 text-brand-ink text-xs shadow-lg">
            <div className="font-semibold">ChatOne</div>
            <div className="opacity-60 text-[10px]">How can I help?</div>
          </div>
          <div className="mt-2 self-end w-10 h-10 rounded-full bg-white/95 shadow-lg flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-[#9132FB]" />
          </div>
        </div>
      </div>
    );
  }

  if (kind === "embed") {
    return (
      <div className={`relative w-full h-full rounded-2xl border ${surface} overflow-hidden font-mono text-[13px]`}>
        <div className={`flex items-center gap-1.5 px-4 py-2.5 border-b ${dark ? "border-white/10" : "border-black/5"}`}>
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <span className={`ml-3 text-[11px] ${subtext} font-sans`}>index.html</span>
        </div>
        <pre className="p-4 leading-relaxed overflow-hidden">
<span className={subtext}>{"<!-- Paste before </body> -->"}</span>{"\n"}
<span className={dark ? "text-[#A8CBFF]" : "text-[#0C87FD]"}>{"<script"}</span>{" "}
<span className={dark ? "text-[#C9B8FF]" : "text-[#9132FB]"}>{"src"}</span>=
<span className={dark ? "text-[#FFD98A]" : "text-[#B8860B]"}>{'"chatone.io/w.js"'}</span>{"\n        "}
<span className={dark ? "text-[#C9B8FF]" : "text-[#9132FB]"}>{"data-id"}</span>=
<span className={dark ? "text-[#FFD98A]" : "text-[#B8860B]"}>{'"co_9K2H"'}</span>{"\n        "}
<span className={dark ? "text-[#C9B8FF]" : "text-[#9132FB]"}>{"defer"}</span>
<span className={dark ? "text-[#A8CBFF]" : "text-[#0C87FD]"}>{"></script>"}</span>
        </pre>
        <div className={`absolute bottom-3 right-3 flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full ${dark ? "bg-white/10 text-white" : "bg-brand-ink/[0.06]"}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Live
        </div>
      </div>
    );
  }

  // analytics
  const bars = [40, 62, 48, 78, 55, 88, 72];
  return (
    <div className={`relative w-full h-full rounded-2xl border p-5 ${surface}`}>
      <div className="flex items-baseline justify-between">
        <div>
          <div className={`text-[11px] font-semibold uppercase tracking-wider ${subtext}`}>Conversations</div>
          <div className="mt-1 text-3xl font-bold">12,847</div>
        </div>
        <div className={`text-[11px] font-semibold px-2 py-1 rounded-full ${dark ? "bg-emerald-400/20 text-emerald-300" : "bg-emerald-50 text-emerald-700"}`}>+24.3%</div>
      </div>
      <div className="mt-6 h-24 flex items-end gap-2">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 rounded-t-md bg-gradient-to-t from-[#9132FB] to-[#0C87FD]"
          />
        ))}
      </div>
      <div className={`mt-3 flex justify-between text-[10px] ${subtext}`}>
        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => <span key={d}>{d}</span>)}
      </div>
    </div>
  );
}

/* ---------------- How it works ---------------- */
export function HowItWorks() {
  const steps = [
    { n: "01", t: "Create your bot", d: "Name your bot, choose its tone — friendly, professional, or technical — and write a system prompt that captures your brand voice.", icon: Bot },
    { n: "02", t: "Upload your knowledge", d: "Add PDFs, DOCX files, or paste any website URL. ChatOne reads your content and builds a smart knowledge base automatically.", icon: Upload },
    { n: "03", t: "Customize the look", d: "Upload your logo, choose brand colors, and write a welcome message. It should feel like a natural part of your site.", icon: Wand2 },
    { n: "04", t: "Embed and go live", d: "Copy one line of code. Paste it into your website. Your AI assistant is live and answering visitors 24/7.", icon: Send },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-it-works" className="relative py-28 md:py-36 px-6 bg-gradient-to-b from-white via-surface to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <SectionHeading
            center
            eyebrow="How it works"
            title="From zero to live chatbot in"
            highlight="under 10 minutes"
            desc="A four-step flow designed to feel effortless — no engineers required."
          />
        </div>

        <div ref={ref} className="relative mt-20">
          <div aria-hidden className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-black/[0.06]">
            <motion.div style={{ height: lineHeight }} className="w-full bg-gradient-to-b from-[#6C4BFF] to-[#3B82F6] rounded-full" />
          </div>

          <div className="space-y-14 md:space-y-24">
            {steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${right ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div aria-hidden className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-brand-gradient ring-4 ring-white shadow-lg shadow-[#6C4BFF]/40" />
                  </div>

                  <div className={`pl-16 md:pl-0 ${right ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                    <span className="font-display text-6xl md:text-7xl text-gradient-brand leading-none">{s.n}</span>
                    <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-brand-ink tracking-tight">{s.t}</h3>
                    <p className="mt-3 text-[15px] text-foreground/60 leading-relaxed max-w-md md:inline-block">{s.d}</p>
                  </div>

                  <div className={`pl-16 md:pl-0 ${right ? "md:pr-16" : "md:pl-16"}`}>
                    <TiltCard intensity={6} className="rounded-3xl p-8 bg-white border border-black/[0.06] shadow-[0_20px_60px_-30px_rgba(108,75,255,0.25)] relative overflow-hidden">
                      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-60" />
                      <div className="relative flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-brand-gradient text-white flex items-center justify-center shadow-lg shadow-[#6C4BFF]/30 shrink-0">
                          <s.icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="h-2.5 w-2/3 rounded-full bg-foreground/10" />
                          <div className="mt-2 h-2.5 w-1/2 rounded-full bg-foreground/10" />
                          <div className="mt-4 h-2 w-full rounded-full bg-indigo-50 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${40 + i * 15}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                              className="h-full bg-brand-gradient"
                            />
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Use Cases ---------------- */
export function UseCases() {
  const uses = [
    { icon: Headphones, t: "AI Customer Support", d: "Cut ticket volume by up to 60%. Your AI handles common questions instantly, so your team focuses on conversations that matter.", link: "customer support", stat: "60% fewer tickets" },
    { icon: ShoppingBag, t: "E-commerce & Shopify", d: "Turn browsers into buyers. Answer product questions, recommend items, and handle checkout queries — reducing cart abandonment.", link: "e-commerce", stat: "3× conversions" },
    { icon: Rocket, t: "SaaS Platform Support", d: "Let your AI handle onboarding, feature explanations, and troubleshooting using your product docs and knowledge base.", link: "SaaS use case", stat: "2× activation" },
    { icon: FileText, t: "Documentation Sites", d: "Add a conversational layer to your docs so visitors ask questions in plain language instead of hunting through pages.", link: "docs use case", stat: "Instant answers" },
  ];
  return (
    <section className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <SectionHeading
            center
            eyebrow="Use cases"
            title="Built for every type of"
            highlight="business"
            desc="From Shopify stores to SaaS platforms — a use case built for you."
          />
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {uses.map((u, i) => (
            <Reveal key={u.t} delay={i * 0.06}>
              <TiltCard intensity={5} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="relative rounded-3xl p-8 md:p-10 h-full bg-white border border-black/[0.05] shadow-[0_1px_2px_rgba(15,23,42,0.04),0_15px_40px_-25px_rgba(15,23,42,0.15)] hover:border-[#6C4BFF]/25 hover:shadow-[0_30px_70px_-30px_rgba(108,75,255,0.3)] transition-all group overflow-hidden"
                >
                  <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-100/70 to-blue-100/50 blur-3xl opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700" />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-brand-gradient text-white flex items-center justify-center shadow-lg shadow-[#6C4BFF]/30 group-hover:rotate-6 transition-transform duration-500 shrink-0">
                        <u.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-[#4c39c9] border border-indigo-100 whitespace-nowrap">{u.stat}</span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-brand-ink tracking-tight">{u.t}</h3>
                    <p className="mt-3 text-[15px] text-foreground/60 leading-relaxed">{u.d}</p>
                    <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#6C4BFF] group-hover:gap-2.5 transition-all">
                      Explore {u.link} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </TiltCard>
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
    { icon: Cloud, t: "Google Drive", d: "Connect Drive folders and ChatOne syncs your documents automatically. Update a file — your bot knows instantly.", tag: "Auto-sync" },
    { icon: Layers, t: "Microsoft OneDrive", d: "Connect OneDrive and your chatbot always has the most current version of every document you've shared.", tag: "Auto-sync" },
    { icon: Globe, t: "WordPress Plugin", d: "The easiest WordPress chatbot plugin. Add a shortcode, paste your embed ID — live in under 2 minutes.", tag: "Plugin" },
  ];
  const stacks = ["Shopify", "Wix", "Squarespace", "Webflow", "Framer", "React", "Vue", "Angular", "HTML"];
  return (
    <section id="integrations" className="relative py-28 md:py-36 px-6 overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-white">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-60" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <SectionHeading
            center
            eyebrow="Integrations"
            title="Connects to the tools your team"
            highlight="already uses"
            desc="Google Drive, OneDrive, and every major website platform — out of the box."
          />
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <TiltCard className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="relative rounded-3xl p-7 h-full bg-white/80 backdrop-blur-xl border border-black/[0.06] shadow-[0_1px_2px_rgba(15,23,42,0.04),0_15px_40px_-25px_rgba(15,23,42,0.15)] hover:border-[#6C4BFF]/25 hover:shadow-[0_30px_70px_-30px_rgba(108,75,255,0.3)] transition-all overflow-hidden group"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6C4BFF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 rounded-2xl bg-brand-gradient text-white flex items-center justify-center shadow-lg shadow-[#6C4BFF]/25 group-hover:scale-110 transition-transform">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-brand-ink tracking-tight">{c.t}</h3>
                  <p className="mt-2 text-[15px] text-foreground/60 leading-relaxed">{c.d}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                    <Check className="w-3.5 h-3.5" /> {c.tag}
                  </div>
                </motion.div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 rounded-3xl border border-black/[0.06] bg-white/70 backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.15)]">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="md:w-1/3">
                <div className="text-sm uppercase tracking-[0.18em] text-foreground/50 font-semibold">Works everywhere</div>
                <p className="mt-3 text-lg text-brand-ink">Drop ChatOne into any stack in minutes.</p>
              </div>
              <div className="flex-1 flex flex-wrap gap-2.5">
                {stacks.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="px-4 py-2 rounded-full bg-white border border-black/[0.06] text-sm text-foreground/75 hover:text-brand-ink hover:border-[#6C4BFF]/30 hover:shadow-md transition cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
export function Pricing() {
  const [yearly, setYearly] = useState(false);
  const plans = [
    { name: "Free", monthly: 0, yearly: 0, cta: "Get started free", featured: false,
      desc: "Everything you need to try ChatOne.",
      features: ["100 requests / month", "1 chatbot", "Knowledge base", "Website embed", "Basic analytics"] },
    { name: "Standard", monthly: 29, yearly: 23, cta: "Start free trial", featured: false,
      desc: "For growing sites and small teams.",
      features: ["10,000 requests / mo", "3 chatbots", "Drive & OneDrive sync", "Custom branding", "Usage analytics"] },
    { name: "Pro", monthly: 99, yearly: 79, cta: "Start free trial", featured: true, badge: "Most popular",
      desc: "For businesses that need scale and control.",
      features: ["25,000 requests / mo", "10 chatbots", "Everything in Standard", "Advanced analytics", "API access", "White-label", "Dedicated support"] },
    { name: "Custom", monthly: null as number | null, yearly: null as number | null, cta: "Contact our team", featured: false,
      desc: "For enterprise and regulated industries.",
      features: ["Unlimited requests", "Unlimited chatbots", "Everything in Pro", "Dedicated CSM", "Custom integrations", "SLA", "HIPAA support"] },
  ];
  return (
    <section id="pricing" className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <SectionHeading
            center
            eyebrow="Pricing"
            title="Simple pricing, including a"
            highlight="genuinely free plan"
            desc={`No surprise fees. No "contact us for pricing." Plans built for every size of business.`}
          />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-white border border-black/[0.06] shadow-sm">
              {([["Monthly", false], ["Yearly", true]] as const).map(([label, val]) => (
                <button
                  key={String(label)}
                  onClick={() => setYearly(val)}
                  className="relative px-5 py-2 text-sm font-medium rounded-full transition-colors"
                >
                  {yearly === val && (
                    <motion.span layoutId="billpill" className="absolute inset-0 rounded-full bg-brand-gradient shadow-md shadow-[#6C4BFF]/30" transition={{ type: "spring", stiffness: 300, damping: 28 }} />
                  )}
                  <span className={`relative z-10 ${yearly === val ? "text-white" : "text-foreground/70"}`}>
                    {label}{val ? <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded ${yearly ? "bg-white/20 text-white" : "bg-emerald-50 text-emerald-600"}`}>-20%</span> : null}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {plans.map((p, i) => {
            const price = p.monthly === null ? "Tailored" : `$${yearly ? p.yearly : p.monthly}`;
            const period = p.monthly === null ? "" : p.monthly === 0 ? "/ forever" : yearly ? "/ mo, billed yearly" : "/ month";
            return (
              <Reveal key={p.name} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className={`relative rounded-3xl p-7 h-full flex flex-col transition-all ${
                    p.featured
                      ? "bg-white border-2 border-[#6C4BFF]/40 shadow-[0_40px_100px_-40px_rgba(108,75,255,0.5)] lg:scale-[1.04] lg:-my-2"
                      : "bg-white border border-black/[0.06] shadow-[0_1px_2px_rgba(15,23,42,0.04),0_10px_30px_-20px_rgba(15,23,42,0.1)] hover:border-[#6C4BFF]/25 hover:shadow-[0_25px_60px_-25px_rgba(108,75,255,0.2)]"
                  }`}
                >
                  {p.featured && (
                    <>
                      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-indigo-50/70 via-white to-white" />
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-brand-gradient text-white uppercase tracking-wider shadow-lg shadow-[#6C4BFF]/40 whitespace-nowrap">
                        <Sparkles className="w-3 h-3 inline -mt-0.5 mr-1" />{p.badge}
                      </span>
                    </>
                  )}
                  <div className="relative flex flex-col h-full">
                    <div className="text-sm font-semibold text-brand-ink">{p.name}</div>
                    <p className="mt-1 text-xs text-foreground/55">{p.desc}</p>
                    <div className="mt-6 flex items-baseline gap-1 min-h-[56px]">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={`${p.name}-${yearly}`}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.25 }}
                          className="font-display text-5xl text-brand-ink leading-none"
                        >{price}</motion.span>
                      </AnimatePresence>
                      <span className="text-xs text-foreground/50">{period}</span>
                    </div>
                    <div className="my-6 h-px bg-black/5" />
                    <ul className="space-y-2.5 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="text-sm flex items-start gap-2 text-foreground/75">
                          <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${p.featured ? "bg-brand-gradient text-white" : "bg-indigo-50 text-[#6C4BFF]"}`}>
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button className={`mt-7 w-full rounded-full py-3 text-sm font-semibold transition ${
                      p.featured
                        ? "bg-brand-gradient text-white shadow-lg shadow-[#6C4BFF]/30 hover:brightness-110 hover:-translate-y-0.5"
                        : "bg-white text-brand-ink border border-black/10 hover:border-[#6C4BFF]/40 hover:text-[#6C4BFF]"
                    }`}>{p.cta}</button>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function FAQ() {
  const items = [
    { q: "How is ChatOne different from other AI chatbots?", a: "ChatOne is trained exclusively on your documents, policies, and products — meaning accurate, brand-aligned answers every time. No generic responses and no irrelevant information, just answers your visitors can trust." },
    { q: "Is ChatOne really free? What's the catch?", a: "ChatOne has a genuinely free plan with 1 chatbot and 100 requests per month. No credit card required, no time limit. When you need more, paid plans start at $29 per month." },
    { q: "How do I add a chatbot to my website?", a: "Under 10 minutes. Create your bot, upload your documents, copy a single line of JavaScript embed code, and paste it before the closing body tag. Works with WordPress, Shopify, React, Squarespace, and any tech stack." },
    { q: "Do you have a WordPress chatbot plugin?", a: "Yes. ChatOne has a dedicated WordPress plugin. Add your chatbot using a simple shortcode — no coding required. It works with WordPress, WooCommerce, and Elementor." },
    { q: "Can ChatOne handle customer service conversations?", a: "Yes. ChatOne handles FAQs, policy questions, order status, and troubleshooting. If a question falls outside its knowledge base, it can escalate to a human agent or collect contact details for follow-up." },
    { q: "Does it work for e-commerce stores?", a: "Yes. ChatOne is widely used on Shopify and WooCommerce. Train it on your product catalog, shipping, and return policies — it handles common order queries automatically." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28 md:py-36 px-6 bg-gradient-to-b from-white via-surface to-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)] gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions people ask"
            highlight="before starting"
            desc="Everything you need to know about ChatOne. Can't find what you're looking for?"
          />
          <div className="mt-8"><MagneticButton variant="ghost" icon={ArrowRight}>Contact our team</MagneticButton></div>
        </div>

        <div className="space-y-3">
          {items.map((it, i) => {
            const active = open === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <motion.div
                  layout
                  className={`rounded-2xl border transition-colors ${
                    active
                      ? "bg-white border-[#6C4BFF]/25 shadow-[0_20px_50px_-25px_rgba(108,75,255,0.25)]"
                      : "bg-white/70 backdrop-blur border-black/[0.06] hover:border-[#6C4BFF]/20"
                  }`}
                >
                  <button
                    onClick={() => setOpen(active ? null : i)}
                    aria-expanded={active}
                    className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left group"
                  >
                    <span className={`text-[16px] md:text-lg font-medium transition-colors ${active ? "text-brand-ink" : "text-brand-ink/85 group-hover:text-brand-ink"}`}>
                      {it.q}
                    </span>
                    <motion.span
                      animate={{ rotate: active ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${active ? "bg-brand-gradient text-white shadow-md shadow-[#6C4BFF]/30" : "bg-indigo-50 text-[#6C4BFF]"}`}
                    >
                      {active ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </motion.span>
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
                        <p className="px-6 pb-6 pr-12 text-[15px] text-foreground/65 leading-relaxed">{it.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
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
      <div className="relative max-w-6xl mx-auto rounded-[2rem] overflow-hidden border border-[#6C4BFF]/15 bg-gradient-to-br from-white via-indigo-50/40 to-white p-14 md:p-20 text-center shadow-[0_40px_100px_-40px_rgba(108,75,255,0.4)]">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#6C4BFF]/25 blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#3B82F6]/25 blur-[130px]"
          />
        </div>
        <motion.div
          animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:flex absolute left-10 top-16 glass-card rounded-2xl px-3.5 py-2 items-center gap-2 text-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Aria replied in 0.4s
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: -2 }}
          className="hidden md:flex absolute right-10 bottom-20 glass-card rounded-2xl px-3.5 py-2 items-center gap-2 text-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#6C4BFF]" /> 12,483 messages today
        </motion.div>

        <div className="relative">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#6C4BFF]/20 bg-white/70 backdrop-blur text-[11px] uppercase tracking-[0.15em] text-brand-ink/70">
              <ShieldCheck className="w-3.5 h-3.5 text-[#6C4BFF]" /> Ready when you are
            </span>
            <h2 className="font-display mt-6 text-4xl md:text-6xl leading-[1.02] tracking-tight text-brand-ink">
              Your website chatbot could be <span className="text-gradient-brand italic">live today.</span>
            </h2>
            <p className="mt-5 text-lg text-foreground/60 max-w-2xl mx-auto">
              Join thousands of businesses using ChatOne to answer visitor questions, reduce support volume, and scale confidently.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton icon={ArrowRight}>Start for free — no card needed</MagneticButton>
              <MagneticButton variant="ghost" icon={ArrowRight}>See a live demo</MagneticButton>
            </div>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-foreground/55">
              <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> Setup in under 10 minutes</span>
              <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> Cancel anytime</span>
              <span className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> No credit card</span>
            </div>
          </Reveal>
        </div>
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
  const socials = [
    { i: Twitter, l: "Twitter" }, { i: Github, l: "GitHub" }, { i: Linkedin, l: "LinkedIn" }, { i: Youtube, l: "YouTube" },
  ];
  return (
    <footer className="relative pt-20 pb-10 px-6 bg-gradient-to-b from-white to-surface border-t border-black/5 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6C4BFF]/40 to-transparent" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#6C4BFF]/10 blur-[130px]" />

      <Reveal>
        <div className="relative max-w-7xl mx-auto rounded-3xl border border-black/[0.06] bg-white/80 backdrop-blur-xl p-8 md:p-10 mb-16 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.15)] flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <h3 className="font-display text-2xl md:text-3xl text-brand-ink tracking-tight">Get product updates in your inbox</h3>
            <p className="mt-1.5 text-sm text-foreground/60">One short email a month. No spam, ever.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex-1 flex items-center gap-2 rounded-full bg-white border border-black/[0.08] p-1.5 pl-5 shadow-sm focus-within:border-[#6C4BFF]/40 transition">
            <input type="email" placeholder="you@company.com" className="flex-1 bg-transparent outline-none text-sm placeholder:text-foreground/40" />
            <button type="submit" className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient text-white text-sm font-semibold px-4 py-2 shadow-md shadow-[#6C4BFF]/30 hover:brightness-110 transition">
              Subscribe <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </Reveal>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-6 gap-10">
        <div className="md:col-span-2">
          <img src={logo.url} alt="ChatOne" className="h-8" />
          <p className="mt-5 text-sm text-foreground/60 max-w-xs leading-relaxed">
            The AI chatbot for websites trusted by businesses worldwide. Build, train, and deploy in minutes.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs text-foreground/60 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            All systems operational
          </div>
          <div className="mt-6 flex items-center gap-2">
            {socials.map((s) => (
              <a key={s.l} href="#" aria-label={s.l} className="w-9 h-9 rounded-full bg-white border border-black/[0.06] flex items-center justify-center text-foreground/60 hover:text-[#6C4BFF] hover:border-[#6C4BFF]/30 hover:-translate-y-0.5 transition-all">
                <s.i className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div className="text-sm font-semibold text-brand-ink">{c.h}</div>
            <ul className="mt-4 space-y-2.5">
              {c.l.map((i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-foreground/60 hover:text-[#6C4BFF] transition-colors relative group inline-flex">
                    {i}
                    <span className="absolute left-0 -bottom-0.5 h-px w-full scale-x-0 group-hover:scale-x-100 origin-left bg-[#6C4BFF]/60 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="relative mt-16 pt-6 border-t border-black/5 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-foreground/50">
        <span>© 2026 ChatOne. All rights reserved.</span>
        <span>The AI chatbot for websites.</span>
      </div>
    </footer>
  );
}
