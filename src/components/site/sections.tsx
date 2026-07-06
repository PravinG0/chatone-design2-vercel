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
type Step = {
  code: string;
  title: string;
  desc: string;
  visual: "upload" | "train" | "brand" | "embed" | "live";
};

const HIW_STEPS: Step[] = [
  { code: "01a", title: "Drop in what you know", desc: "Upload PDFs, DOCX, or paste a URL. ChatOne ingests, chunks, and indexes your knowledge in seconds.", visual: "upload" },
  { code: "01b", title: "Shape its personality", desc: "Set the tone, guardrails, and system prompt. Your assistant sounds unmistakably like your brand.", visual: "train" },
  { code: "01c", title: "Dress it in your brand", desc: "Logo, colors, radius, position — every pixel tunable so the widget feels native to your site.", visual: "brand" },
  { code: "01d", title: "One line. Anywhere.", desc: "Paste a single script tag into WordPress, Shopify, React, or plain HTML — you're wired up in a minute.", visual: "embed" },
  { code: "01e", title: "Answer 24/7. Improve daily.", desc: "Live conversations, gap detection, and continuous learning — your assistant gets sharper with every chat.", visual: "live" },
];

export function HowItWorks() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] });

  // Split progress into equal segments per step
  const segments = HIW_STEPS.length;
  const [active, setActive] = useState(0);
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      // Bias so the first & last steps have a moment to breathe
      const t = Math.min(0.9999, Math.max(0, (v - 0.03) / 0.94));
      const idx = Math.min(segments - 1, Math.floor(t * segments));
      setActive(idx);
    });
  }, [scrollYProgress, segments]);

  const barProgress = useTransform(scrollYProgress, [0.03, 0.97], ["0%", "100%"]);

  return (
    <section id="how-it-works" ref={wrapRef} className="relative" style={{ height: `${100 + segments * 60}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden bg-white">
        {/* Header: Problem / Solution */}
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-10 pt-16 md:pt-20 grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <div className="text-xs font-mono tracking-widest text-brand-ink/50">00 &nbsp; PROBLEM</div>
            <p className="mt-3 text-brand-ink/70 text-[15px] md:text-base leading-relaxed max-w-sm">
              Teams either duct-tape generic chatbots or spend weeks wiring up custom AI — both approaches leak brand, break on updates, and frustrate visitors.
            </p>
          </div>
          <div>
            <div className="text-xs font-mono tracking-widest text-brand-ink/50">01 &nbsp; SOLUTION</div>
            <h2 className="mt-3 font-display text-2xl md:text-4xl leading-[1.1] tracking-tight text-brand-ink">
              An AI assistant that learns <span className="text-gradient-brand italic">your</span> product,
              speaks <span className="text-gradient-brand italic">your</span> voice, and ships in minutes.
            </h2>
          </div>
        </div>

        {/* Brand panel */}
        <div className="relative z-10 flex-1 mx-4 md:mx-8 mt-8 md:mt-10 mb-10 md:mb-12">
          <div
            className="relative w-full h-full rounded-[36px] overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #01013A 0%, #1B0D6B 40%, #4B1FB8 75%, #9132FB 100%)",
            }}
          >
            {/* Ambient glow */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 left-1/3 w-[520px] h-[520px] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, #0C87FD 0%, transparent 60%)" }} />
              <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, #9132FB 0%, transparent 60%)" }} />
              <div className="absolute inset-0 noise mix-blend-overlay" />
            </div>

            {/* Corner frame lines (crosshair-style, like reference) */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute left-[38%] top-6 bottom-6 w-px bg-white/12" />
              <div className="absolute right-[6%] top-6 bottom-6 w-px bg-white/8" />
              <div className="absolute left-6 right-6 top-[14%] h-px bg-white/8" />
            </div>

            {/* Content grid: visual + text */}
            <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 p-6 md:p-10">
              {/* Left: stacked visuals, crossfade based on active */}
              <div className="md:col-span-7 relative flex items-center justify-center">
                <div className="relative w-full max-w-[520px] h-[42vh] md:h-auto md:aspect-[5/6]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={HIW_STEPS[active].visual}
                      initial={{ opacity: 0, y: 24, scale: 0.96, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -24, scale: 0.98, filter: "blur(6px)" }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <StepVisual kind={HIW_STEPS[active].visual} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Right: text panel */}
              <div className="md:col-span-5 relative flex items-center">
                <div className="w-full max-w-md">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={HIW_STEPS[active].code}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="text-xs font-mono tracking-widest text-white/60">{HIW_STEPS[active].code}</div>
                      <h3 className="mt-3 font-display text-3xl md:text-[40px] leading-[1.05] tracking-tight text-white">
                        {HIW_STEPS[active].title}
                      </h3>
                      <p className="mt-4 text-[15px] md:text-base leading-relaxed text-white/75 max-w-sm">
                        {HIW_STEPS[active].desc}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {HIW_STEPS.map((s, i) => (
                          <button
                            key={s.code}
                            onClick={() => {
                              const el = wrapRef.current;
                              if (!el) return;
                              const target = el.offsetTop + ((i + 0.5) / segments) * (el.offsetHeight - window.innerHeight);
                              window.scrollTo({ top: target, behavior: "smooth" });
                            }}
                            className={`text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full border transition-colors ${
                              i === active
                                ? "bg-white text-brand-ink border-white"
                                : "text-white/60 border-white/20 hover:text-white hover:border-white/40"
                            }`}
                          >
                            {s.code.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>


            {/* Right edge: dot progress */}
            <div className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {HIW_STEPS.map((_, i) => (
                <div key={i} className="relative w-2 h-2">
                  <div className="absolute inset-0 rounded-full bg-white/25" />
                  <motion.div
                    animate={{ scale: i === active ? 1 : 0, opacity: i === active ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -inset-1 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.7)]"
                  />
                </div>
              ))}
            </div>

            {/* Bottom progress bar */}
            <div className="absolute left-6 right-6 bottom-5 h-[2px] rounded-full bg-white/10 overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-[#0C87FD] via-white to-[#9132FB]" style={{ width: barProgress }} />
            </div>

            {/* Step counter bottom-left */}
            <div className="absolute left-6 bottom-8 text-white/60 font-mono text-[11px] tracking-widest">
              {String(active + 1).padStart(2, "0")} / {String(segments).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepVisual({ kind }: { kind: Step["visual"] }) {
  if (kind === "upload") {
    const files = [
      { name: "product-guide.pdf", size: "2.4 MB", tag: "PDF", pct: 100 },
      { name: "help-center.com", size: "312 pages", tag: "URL", pct: 76 },
      { name: "release-notes.docx", size: "180 KB", tag: "DOC", pct: 42 },
    ];
    return (
      <div className="w-full h-full rounded-3xl bg-white/[0.06] backdrop-blur-md border border-white/15 p-6 flex flex-col gap-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="text-white/90 text-sm font-semibold">Knowledge sources</div>
          <div className="text-[10px] font-mono text-white/50">INGESTING…</div>
        </div>
        <div className="space-y-3">
          {files.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
              className="rounded-2xl bg-white/[0.06] border border-white/10 px-4 py-3 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0C87FD] to-[#9132FB] flex items-center justify-center text-white text-[10px] font-bold">{f.tag}</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-white/95 font-medium truncate">{f.name}</div>
                <div className="text-[11px] text-white/50">{f.size}</div>
              </div>
              <div className="text-[11px] font-mono text-white/70 w-10 text-right">{f.pct}%</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-auto rounded-2xl border border-dashed border-white/25 p-4 text-center text-white/60 text-xs">
          Drop files or paste a URL
        </div>
      </div>
    );
  }

  if (kind === "train") {
    const tones = ["Friendly", "Expert", "Concise", "Playful"];
    return (
      <div className="w-full h-full rounded-3xl bg-white/[0.06] backdrop-blur-md border border-white/15 p-6 flex flex-col gap-4 shadow-2xl">
        <div className="text-white/90 text-sm font-semibold">Personality</div>
        <div className="flex flex-wrap gap-2">
          {tones.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className={`text-[11px] font-semibold px-3 py-1.5 rounded-full ${i === 0 ? "bg-white text-[#4B1FB8]" : "bg-white/10 text-white/80 border border-white/15"}`}
            >
              {t}
            </motion.span>
          ))}
        </div>
        <div className="mt-2 rounded-2xl bg-black/25 border border-white/10 p-4 font-mono text-[12px] leading-relaxed text-white/80">
          <span className="text-white/40">// system</span>{"\n"}
          You are ChatOne, a warm, precise assistant.{"\n"}
          Always cite the source. Never invent facts.
        </div>
        <div className="mt-auto space-y-2">
          <div className="max-w-[70%] rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm bg-white/10 text-white/90">Do you ship to Canada?</div>
          <div className="max-w-[80%] ml-auto rounded-2xl rounded-br-sm px-4 py-2.5 text-sm bg-gradient-to-br from-[#0C87FD] to-[#9132FB] text-white">
            Yes! Free shipping over $75, 3–5 business days.
          </div>
        </div>
      </div>
    );
  }

  if (kind === "brand") {
    return (
      <div className="w-full h-full rounded-3xl bg-white/[0.06] backdrop-blur-md border border-white/15 p-6 grid grid-cols-2 gap-4 shadow-2xl">
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-[10px] font-mono tracking-wider text-white/50">PALETTE</div>
            <div className="mt-2 flex gap-2">
              {["#9132FB", "#0C87FD", "#01013A", "#F3EEE3"].map((c) => (
                <motion.div key={c} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="w-9 h-9 rounded-full ring-2 ring-white/80 shadow-lg" style={{ background: c }} />
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono tracking-wider text-white/50">RADIUS</div>
            <div className="mt-2 flex gap-2">
              {[6, 14, 22].map((r) => (
                <div key={r} className="w-9 h-9 border-2 border-white/50" style={{ borderRadius: r }} />
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono tracking-wider text-white/50">POSITION</div>
            <div className="mt-2 grid grid-cols-2 gap-1.5 w-20">
              <div className="h-4 rounded border border-white/30" />
              <div className="h-4 rounded border border-white/30" />
              <div className="h-4 rounded border border-white/30" />
              <div className="h-4 rounded bg-white" />
            </div>
          </div>
        </div>
        <div className="relative rounded-2xl bg-gradient-to-br from-[#9132FB] to-[#0C87FD] p-3 flex flex-col justify-end">
          <div className="rounded-xl bg-white/95 p-3 text-brand-ink text-xs shadow-2xl">
            <div className="font-semibold">ChatOne</div>
            <div className="opacity-60 text-[10px] mt-0.5">How can I help today?</div>
          </div>
          <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }}
            className="mt-3 self-end w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center"
          >
            <MessageSquare className="w-5 h-5 text-[#9132FB]" />
          </motion.div>
        </div>
      </div>
    );
  }

  if (kind === "embed") {
    return (
      <div className="w-full h-full rounded-3xl bg-[#0A0A2A]/80 backdrop-blur-md border border-white/15 overflow-hidden font-mono text-[13px] shadow-2xl flex flex-col">
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-3 text-[11px] text-white/50 font-sans">index.html</span>
        </div>
        <pre className="p-5 leading-relaxed text-white/85 flex-1">
<span className="text-white/40">{"<!-- Paste before </body> -->"}</span>{"\n"}
<span className="text-[#A8CBFF]">{"<script"}</span>{" "}
<span className="text-[#C9B8FF]">{"src"}</span>=<span className="text-[#FFD98A]">{'"chatone.io/w.js"'}</span>{"\n        "}
<span className="text-[#C9B8FF]">{"data-id"}</span>=<span className="text-[#FFD98A]">{'"co_9K2H"'}</span>{"\n        "}
<span className="text-[#C9B8FF]">{"defer"}</span>
<span className="text-[#A8CBFF]">{"></script>"}</span>
        </pre>
        <div className="px-5 pb-5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] font-sans text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Deployed
          </div>
          <div className="text-[11px] font-sans text-white/50">42 ms</div>
        </div>
      </div>
    );
  }

  // live
  const bars = [30, 55, 42, 70, 58, 82, 68, 90];
  return (
    <div className="w-full h-full rounded-3xl bg-white/[0.06] backdrop-blur-md border border-white/15 p-6 flex flex-col gap-4 shadow-2xl">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-[10px] font-mono tracking-wider text-white/50">CONVERSATIONS · 7D</div>
          <div className="mt-1 text-3xl font-bold text-white">12,847</div>
        </div>
        <div className="text-[11px] font-semibold px-2 py-1 rounded-full bg-emerald-400/20 text-emerald-300">+24.3%</div>
      </div>
      <div className="h-28 flex items-end gap-2">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: 0.05 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 rounded-t-md bg-gradient-to-t from-[#0C87FD] to-[#9132FB]"
          />
        ))}
      </div>
      <div className="mt-auto space-y-2">
        {[
          { q: "Where's my order?", n: 342 },
          { q: "Do you offer refunds?", n: 218 },
          { q: "Book a demo", n: 164 },
        ].map((r) => (
          <div key={r.q} className="flex items-center justify-between rounded-xl bg-white/[0.05] border border-white/10 px-3 py-2">
            <span className="text-sm text-white/85 truncate">{r.q}</span>
            <span className="text-[11px] font-mono text-white/50">×{r.n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Use Cases ---------------- */
type UseCase = {
  icon: typeof Headphones;
  t: string;
  d: string;
  link: string;
  stat: string;
  accent: { from: string; to: string; ink: string; chip: string };
  tags: string[];
};

const USE_CASES: UseCase[] = [
  {
    icon: Headphones,
    t: "AI Customer Support",
    d: "Cut ticket volume by up to 60%. Your AI handles common questions instantly, so your team focuses on conversations that matter.",
    link: "customer support",
    stat: "60% fewer tickets",
    accent: { from: "#6C4BFF", to: "#3B82F6", ink: "#1B0D6B", chip: "#EDE7FF" },
    tags: ["Live chat", "Ticket triage", "Handoff"],
  },
  {
    icon: ShoppingBag,
    t: "E-commerce & Shopify",
    d: "Turn browsers into buyers. Answer product questions, recommend items, and handle checkout queries — reducing cart abandonment.",
    link: "e-commerce",
    stat: "3× conversions",
    accent: { from: "#F59E0B", to: "#EF4444", ink: "#4A1A0B", chip: "#FFECD9" },
    tags: ["Product Q&A", "Recommendations", "Checkout"],
  },
  {
    icon: Rocket,
    t: "SaaS Platform Support",
    d: "Let your AI handle onboarding, feature explanations, and troubleshooting using your product docs and knowledge base.",
    link: "SaaS use case",
    stat: "2× activation",
    accent: { from: "#10B981", to: "#0EA5E9", ink: "#053B32", chip: "#D8F7EA" },
    tags: ["Onboarding", "Feature help", "Troubleshoot"],
  },
  {
    icon: FileText,
    t: "Documentation Sites",
    d: "Add a conversational layer to your docs so visitors ask questions in plain language instead of hunting through pages.",
    link: "docs use case",
    stat: "Instant answers",
    accent: { from: "#8B5CF6", to: "#EC4899", ink: "#3A0B4A", chip: "#F6E4FF" },
    tags: ["Semantic search", "Citations", "Ask anything"],
  },
];

export function UseCases() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  const total = USE_CASES.length;

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const t = Math.min(0.9999, Math.max(0, (v - 0.04) / 0.92));
      setActive(Math.min(total - 1, Math.floor(t * total)));
    });
  }, [scrollYProgress, total]);

  const barProgress = useTransform(scrollYProgress, [0.04, 0.96], ["0%", "100%"]);

  return (
    <section id="use-cases" ref={wrapRef} className="relative" style={{ height: `${100 + total * 90}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        {/* Ambient background that shifts per active case */}
        <AnimatePresence mode="sync">
          <motion.div
            key={`bg-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 pointer-events-none"
          >
            <div
              className="absolute -top-40 -left-40 w-[680px] h-[680px] rounded-full blur-3xl opacity-40"
              style={{ background: `radial-gradient(circle, ${USE_CASES[active].accent.from} 0%, transparent 60%)` }}
            />
            <div
              className="absolute -bottom-40 -right-40 w-[680px] h-[680px] rounded-full blur-3xl opacity-35"
              style={{ background: `radial-gradient(circle, ${USE_CASES[active].accent.to} 0%, transparent 60%)` }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

        {/* Header row */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-14 md:pt-16 flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow">Use cases</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-brand-ink max-w-2xl">
              Built for every type of <span className="text-gradient-brand italic">business</span>
            </h2>
          </div>
          <div className="hidden md:block font-mono text-xs tracking-[0.2em] text-brand-ink/50">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>

        {/* Main immersive panel */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 mt-8 md:mt-10 h-[calc(100vh-260px)] md:h-[calc(100vh-240px)]">
          <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
            {/* Left: text story */}
            <div className="md:col-span-6 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${active}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide"
                    style={{ background: USE_CASES[active].accent.chip, color: USE_CASES[active].accent.ink }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: `linear-gradient(135deg, ${USE_CASES[active].accent.from}, ${USE_CASES[active].accent.to})` }}
                    />
                    {USE_CASES[active].stat}
                  </div>
                  <h3 className="mt-5 font-display text-[44px] md:text-[76px] leading-[0.98] tracking-tight text-brand-ink">
                    {USE_CASES[active].t.split(" ").map((w, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.05 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-block mr-[0.25em]"
                      >
                        {w}
                      </motion.span>
                    ))}
                  </h3>
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="mt-6 text-[16px] md:text-lg text-brand-ink/70 leading-relaxed max-w-xl"
                  >
                    {USE_CASES[active].d}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="mt-6 flex flex-wrap gap-2"
                  >
                    {USE_CASES[active].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/80 backdrop-blur border border-black/[0.06] text-brand-ink/75"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                  <motion.a
                    href="#"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold group"
                    style={{ color: USE_CASES[active].accent.ink }}
                  >
                    Explore {USE_CASES[active].link}
                    <span
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white transition-transform group-hover:translate-x-1"
                      style={{ background: `linear-gradient(135deg, ${USE_CASES[active].accent.from}, ${USE_CASES[active].accent.to})` }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.a>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: visual card */}
            <div className="md:col-span-6 relative h-[46vh] md:h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`visual-${active}`}
                  initial={{ opacity: 0, scale: 0.9, rotate: -3, y: 40 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotate: 3, y: -30 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full max-w-[560px] aspect-[4/5]"
                >
                  <UseCaseVisual uc={USE_CASES[active]} />
                </motion.div>
              </AnimatePresence>

              {/* Parallax floating chips */}
              <motion.div
                aria-hidden
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-4 md:right-0 hidden sm:block"
              >
                <div className="rounded-2xl bg-white/90 backdrop-blur-xl border border-black/[0.06] shadow-lg px-4 py-2.5 text-xs font-semibold text-brand-ink">
                  {USE_CASES[active].stat}
                </div>
              </motion.div>
              <motion.div
                aria-hidden
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-2 md:left-6 hidden sm:block"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-xl"
                  style={{ background: `linear-gradient(135deg, ${USE_CASES[active].accent.from}, ${USE_CASES[active].accent.to})` }}
                >
                  {(() => {
                    const Icon = USE_CASES[active].icon;
                    return <Icon className="w-5 h-5" />;
                  })()}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom: index rail + progress */}
        <div className="absolute left-0 right-0 bottom-0 z-10 border-t border-black/[0.06] bg-white/70 backdrop-blur-xl">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex items-center gap-6 overflow-x-auto">
            {USE_CASES.map((u, i) => (
              <button
                key={u.t}
                onClick={() => {
                  const el = wrapRef.current;
                  if (!el) return;
                  const target = el.offsetTop + ((i + 0.5) / total) * (el.offsetHeight - window.innerHeight);
                  window.scrollTo({ top: target, behavior: "smooth" });
                }}
                className="group flex items-center gap-3 whitespace-nowrap"
              >
                <span
                  className={`font-mono text-[11px] tracking-widest transition-colors ${
                    i === active ? "text-brand-ink" : "text-brand-ink/35"
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`text-sm font-medium transition-colors ${
                    i === active ? "text-brand-ink" : "text-brand-ink/45 group-hover:text-brand-ink/70"
                  }`}
                >
                  {u.t}
                </span>
              </button>
            ))}
          </div>
          <div className="h-[2px] bg-black/[0.05]">
            <motion.div className="h-full bg-brand-gradient" style={{ width: barProgress }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCaseVisual({ uc }: { uc: UseCase }) {
  const Icon = uc.icon;
  return (
    <div
      className="relative w-full h-full rounded-[36px] overflow-hidden shadow-[0_40px_90px_-40px_rgba(15,10,60,0.35)]"
      style={{
        background: `linear-gradient(135deg, ${uc.accent.from} 0%, ${uc.accent.to} 100%)`,
      }}
    >
      <div className="absolute inset-0 noise mix-blend-overlay" />
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 20% 15%, rgba(255,255,255,0.5), transparent 45%), radial-gradient(circle at 85% 85%, rgba(255,255,255,0.35), transparent 45%)",
        }} />
      </div>

      {/* Large ghost icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="absolute -right-10 -bottom-10 text-white"
      >
        <Icon className="w-[340px] h-[340px]" strokeWidth={1} />
      </motion.div>

      {/* Foreground preview card */}
      <div className="absolute inset-6 md:inset-8 rounded-3xl bg-white/12 backdrop-blur-xl border border-white/25 p-5 md:p-6 flex flex-col text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/25 flex items-center justify-center">
              <Icon className="w-4.5 h-4.5" />
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-widest text-white/70">USE CASE</div>
              <div className="text-sm font-semibold leading-tight">{uc.t}</div>
            </div>
          </div>
          <div className="text-[10px] font-mono text-white/70">LIVE</div>
        </div>

        <div className="mt-5 space-y-2.5">
          {[
            { who: "user", text: "How do I get started?" },
            { who: "bot", text: "Happy to help — here's the fastest path…" },
            { who: "user", text: "Can it use my docs?" },
            { who: "bot", text: "Yes — just connect a source and we sync instantly." },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: m.who === "user" ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug ${
                m.who === "user"
                  ? "ml-auto bg-white text-brand-ink"
                  : "bg-white/20 text-white border border-white/25"
              }`}
            >
              {m.text}
            </motion.div>
          ))}
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/15">
          <div className="text-[11px] text-white/70">Powered by ChatOne</div>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
            {uc.stat}
          </div>
        </div>
      </div>
    </div>
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
