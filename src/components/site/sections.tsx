import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import logoSvg from "@/assets/Logo/SVG/ChatOne_Horizontal.svg";
import iconSvg from "@/assets/Logo/SVG/ChatOne_only_Icon.svg";
import {
  ArrowRight, Check, Sparkles, Cloud, Palette, Code2, BarChart3, BookOpen,
  Zap, Bot, MessageSquare, Globe, Layers, ShieldCheck, Plus, Minus,
  Twitter, Github, Linkedin, Youtube, Rocket, Upload, Wand2, Send,
  ShoppingBag, Headphones, FileText, TrendingUp,
} from "lucide-react";
import { HeroSideElements, CursorGlow } from "./HeroEnhancements";

/* ---------------- Nav Logo (inline SVG, cropped viewBox) ---------------- */
function NavLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="35 112 224 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ChatOne"
    >
      <defs>
        <linearGradient id="nl_g0" x1="194.275" y1="138.813" x2="253.222" y2="159.012" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0E86FD"/><stop offset="1" stopColor="#8D34FB"/>
        </linearGradient>
        <linearGradient id="nl_g1" x1="102.658" y1="176.142" x2="43.6573" y2="132.71" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0C87FD"/><stop offset="1" stopColor="#9132FB"/>
        </linearGradient>
      </defs>
      {/* "Chat" text */}
      <path d="M112.778 147.332C112.778 145.095 113.283 143.087 114.292 141.31C115.301 139.511 116.672 138.107 118.405 137.098C120.16 136.089 122.102 135.584 124.23 135.584C126.731 135.584 128.914 136.188 130.778 137.394C132.643 138.601 134.003 140.312 134.859 142.528H131.272C130.636 141.146 129.714 140.082 128.508 139.336C127.323 138.59 125.897 138.217 124.23 138.217C122.628 138.217 121.191 138.59 119.919 139.336C118.647 140.082 117.649 141.146 116.925 142.528C116.201 143.888 115.839 145.489 115.839 147.332C115.839 149.153 116.201 150.754 116.925 152.137C117.649 153.497 118.647 154.55 119.919 155.296C121.191 156.042 122.628 156.414 124.23 156.414C125.897 156.414 127.323 156.052 128.508 155.329C129.714 154.583 130.636 153.519 131.272 152.137H134.859C134.003 154.33 132.643 156.031 130.778 157.237C128.914 158.422 126.731 159.014 124.23 159.014C122.102 159.014 120.16 158.52 118.405 157.533C116.672 156.524 115.301 155.131 114.292 153.354C113.283 151.577 112.778 149.57 112.778 147.332ZM147.189 140.455C148.549 140.455 149.777 140.751 150.874 141.343C151.971 141.914 152.827 142.78 153.441 143.943C154.077 145.105 154.395 146.52 154.395 148.188V158.817H151.434V148.616C151.434 146.817 150.984 145.446 150.084 144.502C149.185 143.537 147.956 143.054 146.399 143.054C144.819 143.054 143.558 143.548 142.614 144.535C141.693 145.522 141.232 146.959 141.232 148.846V158.817H138.238V134.466H141.232V143.35C141.825 142.429 142.636 141.716 143.668 141.212C144.721 140.707 145.894 140.455 147.189 140.455ZM157.089 149.734C157.089 147.892 157.462 146.279 158.208 144.897C158.954 143.493 159.974 142.407 161.269 141.639C162.585 140.871 164.044 140.488 165.645 140.488C167.225 140.488 168.596 140.828 169.758 141.508C170.921 142.188 171.788 143.043 172.358 144.074V140.784H175.386V158.817H172.358V155.46C171.766 156.513 170.877 157.391 169.693 158.093C168.53 158.773 167.17 159.113 165.612 159.113C164.011 159.113 162.563 158.718 161.269 157.928C159.974 157.138 158.954 156.031 158.208 154.605C157.462 153.179 157.089 151.555 157.089 149.734ZM172.358 149.767C172.358 148.407 172.084 147.222 171.535 146.213C170.987 145.204 170.241 144.436 169.298 143.91C168.376 143.361 167.356 143.087 166.237 143.087C165.119 143.087 164.099 143.35 163.177 143.877C162.256 144.403 161.521 145.171 160.972 146.18C160.424 147.19 160.15 148.374 160.15 149.734C160.15 151.116 160.424 152.323 160.972 153.354C161.521 154.363 162.256 155.142 163.177 155.691C164.099 156.217 165.119 156.48 166.237 156.48C167.356 156.48 168.376 156.217 169.298 155.691C170.241 155.142 170.987 154.363 171.535 153.354C172.084 152.323 172.358 151.127 172.358 149.767ZM183.02 143.252V153.881C183.02 154.758 183.207 155.383 183.58 155.756C183.953 156.107 184.6 156.283 185.521 156.283H187.726V158.817H185.028C183.36 158.817 182.11 158.433 181.276 157.665C180.442 156.897 180.026 155.636 180.026 153.881V143.252H177.689V140.784H180.026V136.243H183.02V140.784H187.726V143.252H183.02Z" fill="#01013A"/>
      {/* "One" gradient text */}
      <path d="M204.611 159.047C202.483 159.047 200.541 158.553 198.786 157.566C197.031 156.557 195.638 155.164 194.607 153.387C193.598 151.588 193.093 149.57 193.093 147.332C193.093 145.095 193.598 143.087 194.607 141.31C195.638 139.511 197.031 138.118 198.786 137.131C200.541 136.122 202.483 135.617 204.611 135.617C206.76 135.617 208.713 136.122 210.468 137.131C212.223 138.118 213.605 139.5 214.614 141.277C215.623 143.054 216.128 145.073 216.128 147.332C216.128 149.592 215.623 151.61 214.614 153.387C213.605 155.164 212.223 156.557 210.468 157.566C208.713 158.553 206.76 159.047 204.611 159.047ZM204.611 156.447C206.212 156.447 207.649 156.074 208.921 155.329C210.216 154.583 211.225 153.519 211.949 152.137C212.695 150.754 213.068 149.153 213.068 147.332C213.068 145.489 212.695 143.888 211.949 142.528C211.225 141.146 210.227 140.082 208.954 139.336C207.682 138.59 206.234 138.217 204.611 138.217C202.987 138.217 201.539 138.59 200.267 139.336C198.994 140.082 197.985 141.146 197.239 142.528C196.515 143.888 196.154 145.489 196.154 147.332C196.154 149.153 196.515 150.754 197.239 152.137C197.985 153.519 198.994 154.583 200.267 155.329C201.561 156.074 203.009 156.447 204.611 156.447ZM227.789 140.455C229.983 140.455 231.76 141.124 233.12 142.462C234.48 143.778 235.16 145.687 235.16 148.188V158.817H232.198V148.616C232.198 146.817 231.749 145.446 230.849 144.502C229.95 143.537 228.721 143.054 227.164 143.054C225.584 143.054 224.323 143.548 223.379 144.535C222.458 145.522 221.997 146.959 221.997 148.846V158.817H219.003V140.784H221.997V143.35C222.59 142.429 223.39 141.716 224.399 141.212C225.43 140.707 226.56 140.455 227.789 140.455ZM255.426 149.109C255.426 149.68 255.393 150.283 255.328 150.919H240.914C241.024 152.696 241.627 154.089 242.724 155.098C243.843 156.085 245.192 156.579 246.772 156.579C248.066 156.579 249.141 156.283 249.997 155.691C250.874 155.076 251.489 154.265 251.84 153.255H255.064C254.582 154.988 253.617 156.403 252.169 157.5C250.721 158.575 248.922 159.113 246.772 159.113C245.061 159.113 243.525 158.729 242.165 157.961C240.827 157.193 239.774 156.107 239.006 154.703C238.238 153.277 237.854 151.632 237.854 149.767C237.854 147.903 238.227 146.268 238.973 144.864C239.719 143.46 240.761 142.385 242.099 141.639C243.459 140.871 245.017 140.488 246.772 140.488C248.483 140.488 249.997 140.861 251.313 141.606C252.629 142.352 253.638 143.383 254.34 144.7C255.064 145.994 255.426 147.464 255.426 149.109ZM252.333 148.484C252.333 147.343 252.081 146.367 251.576 145.555C251.072 144.722 250.381 144.096 249.503 143.68C248.648 143.241 247.693 143.021 246.64 143.021C245.127 143.021 243.832 143.504 242.757 144.469C241.704 145.435 241.101 146.773 240.947 148.484H252.333Z" fill="url(#nl_g0)"/>
      {/* Icon mark dark */}
      <path d="M52.7388 179.042L60.3186 183.144C62.3012 184.217 64.6908 184.217 66.6735 183.144L75.744 178.236L84.5266 172.828C86.4462 171.646 87.6409 169.574 87.704 167.319L87.9922 157.003L87.704 146.687C87.6409 144.432 86.4462 142.36 84.5266 141.178L75.744 135.771L66.6735 130.862C64.6908 129.789 62.3012 129.789 60.3186 130.862L51.2479 135.771L42.4656 141.178C40.5457 142.36 39.351 144.432 39.2882 146.687L39 157.003L39.2882 167.319C39.351 169.574 40.5457 171.646 42.4656 172.828L44.6819 174.192L42.8353 180.158C42.6098 180.887 43.2745 181.578 44.0106 181.381L52.7388 179.042Z" fill="#01013A"/>
      {/* Icon mark gradient */}
      <path d="M89.6204 120.944L80.0319 115.76C77.524 114.404 74.5011 114.404 71.9929 115.76L60.5187 121.964L49.4088 128.799C46.9804 130.293 45.4691 132.911 45.3893 135.761L45.0248 148.8L45.3893 161.839C45.4691 164.689 46.9804 167.307 49.4088 168.801L60.5187 175.636L71.9929 181.84C74.5011 183.196 77.524 183.196 80.0319 181.84L91.5063 175.636L102.616 168.801C105.045 167.307 106.556 164.689 106.635 161.839L107 148.8L106.635 135.761C106.556 132.911 105.045 130.293 102.616 128.799L99.8123 127.074L102.148 119.534C102.434 118.613 101.593 117.739 100.662 117.988L89.6204 120.944Z" fill="url(#nl_g1)"/>
      {/* Bubble face */}
      <path d="M56.4964 135.049C60.89 130.275 66.0841 130.76 72.1167 131.324C73.1948 131.425 74.2997 131.528 75.4316 131.604C76.4602 131.535 77.4994 131.443 78.5403 131.352C85.0507 130.777 91.6284 130.197 96.0934 135.049C99.1423 138.656 98.8384 145.46 98.5092 152.832L98.5001 153.037C98.3136 158.258 94.4552 161.596 89.439 162.709C85.0876 163.55 80.6771 163.509 76.296 163.38C71.9131 163.509 67.5026 163.55 63.1512 162.709C62.9536 162.665 62.756 162.617 62.5602 162.565C61.1824 165.948 63.2289 170.497 63.3086 170.674L63.3101 170.677C49.0533 163.066 53.4731 138.632 56.4964 135.049Z" fill="white"/>
      <path d="M78.8099 143.224C78.8099 140.687 80.8663 138.631 83.4029 138.631H83.705C86.2417 138.631 88.2981 140.687 88.2981 143.224V146.915C88.2981 149.452 86.2417 151.508 83.705 151.508H83.4029C80.8663 151.508 78.8099 149.452 78.8099 146.915V143.224Z" fill="#01013A"/>
      <path d="M62.8828 143.224C62.8828 140.687 64.9392 138.631 67.4758 138.631H67.778C70.3146 138.631 72.371 140.687 72.371 143.224V146.915C72.371 149.452 70.3146 151.508 67.7779 151.508H67.4758C64.9392 151.508 62.8828 149.452 62.8828 146.915V143.224Z" fill="#01013A"/>
      <path d="M83.2148 141.342C83.2148 140.032 84.2768 138.97 85.5868 138.97C86.8969 138.97 87.9589 140.032 87.9589 141.342C87.9589 142.652 86.8969 143.714 85.5868 143.714C84.2768 143.714 83.2148 142.652 83.2148 141.342Z" fill="white"/>
      <path d="M67.2891 141.342C67.2891 140.032 68.3511 138.97 69.6611 138.97C70.9711 138.97 72.0331 140.032 72.0331 141.342C72.0331 142.652 70.9711 143.714 69.6611 143.714C68.3511 143.714 67.2891 142.652 67.2891 141.342Z" fill="white"/>
    </svg>
  );
}
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
            {/* Inline SVG with tight viewBox cropped to actual content bounds */}
            <img src={logoSvg} alt="ChatOne" className="w-auto" style={{ height: 32, transform: "scale(4.3)", transformOrigin: "left center", imageRendering: "auto", overflow: "visible" }} />
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

  // Normalised mouse position [0..1] over the whole section
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const spotX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const spotY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width);
    mouseY.set((e.clientY - r.top) / r.height);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden pt-20 pb-32 mesh-bg"
    >
      {/* ── Background layer ─────────────────────────────────────── */}
      {/* Animated blobs */}
      <motion.div style={{ y: yBlob }} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-[#6C4BFF]/20 blur-[120px] animate-blob" />
        <div className="absolute top-40 -right-32 w-[560px] h-[560px] rounded-full bg-[#3B82F6]/25 blur-[130px] animate-blob" style={{ animationDelay: "-6s" }} />
        <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-indigo-200/60 blur-[120px] animate-blob" style={{ animationDelay: "-12s" }} />
        {/* Extra ambient orbs in the side columns */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-16 w-[280px] h-[280px] rounded-full bg-[#6C4BFF]/10 blur-[90px]"
        />
        <motion.div
          animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: -5 }}
          className="absolute top-1/3 -right-16 w-[260px] h-[260px] rounded-full bg-[#3B82F6]/12 blur-[90px]"
        />
      </motion.div>

      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />

      {/* Cursor-following spotlight */}
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

      {/* Enhanced cursor glow (from HeroEnhancements) */}
      <CursorGlow mouseX={mouseX} mouseY={mouseY} />

      {/* ── Three-column layout: [left side] [center] [right side] ── */}
      <div className="relative max-w-[1600px] mx-auto flex items-start min-h-[580px] md:min-h-[640px]">

        {/* Left side panel — interactive floating elements */}
        <div
          className="hidden md:block relative shrink-0 pointer-events-none"
          style={{ width: "clamp(180px, 18vw, 300px)", minHeight: "560px" }}
          aria-hidden="true"
        >
          <HeroSideElements side="left" mouseX={mouseX} mouseY={mouseY} />
        </div>

        {/* Center: main hero content */}
        <motion.div
          style={{ opacity }}
          className="flex-1 min-w-0 px-4 md:px-6 pt-14 pb-8 text-center"
        >
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6C4BFF]" />
              No-code · Free to start
            </span>
          </motion.div>

          <h1 className="font-display mt-6 text-[clamp(2.2rem,6vw,5.75rem)] leading-[0.98] tracking-tight text-brand-ink max-w-5xl mx-auto">
            <StaggerText text="The AI chatbot for websites" />
            <br />
            <motion.span
              className="text-gradient-brand italic"
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              transition={{ delay: 0.55, duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
            >
              that speaks for your brand
            </motion.span>
          </h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-7 max-w-2xl mx-auto text-lg text-foreground/60"
          >
            ChatOne learns from your own content and answers every visitor question instantly, around the clock.
            Upload documents, connect cloud storage, deploy in minutes.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <MagneticButton icon={ArrowRight}>Get started free</MagneticButton>
            <MagneticButton variant="ghost" icon={ArrowRight}>See a live demo</MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="mt-8 flex items-center justify-center gap-3 text-sm text-foreground/60"
          >
            <div className="flex -space-x-2">
              {["J", "M", "A", "R", "+"].map((c, i) => (
                <span
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-white text-[11px] font-semibold text-white flex items-center justify-center bg-brand-gradient"
                  style={{ backgroundPosition: `${i * 30}% 0` }}
                >
                  {c}
                </span>
              ))}
            </div>
            Loved by <strong className="text-foreground">2,000+ teams</strong> across 50+ countries
          </motion.div>
        </motion.div>

        {/* Right side panel — interactive floating elements */}
        <div
          className="hidden md:block relative shrink-0 pointer-events-none"
          style={{ width: "clamp(180px, 18vw, 300px)", minHeight: "560px" }}
          aria-hidden="true"
        >
          <HeroSideElements side="right" mouseX={mouseX} mouseY={mouseY} />
        </div>
      </div>

      {/* ── Hero mockup ── */}
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
                <img src={iconSvg} alt="Aria" className="w-9 h-9 rounded-xl shadow-md" />
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
export function Reveal({ children, delay = 0, y = 24, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
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

/* ─── WhyChatOne — AI Pipeline Visualization ─── */

/** Animated SVG "brain" connecting sources to answers */
function AIPipelineSVG() {
  return (
    <svg
      viewBox="0 0 320 480"
      className="w-full h-full"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6C4BFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
        </linearGradient>
        <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C4B0FF" />
          <stop offset="50%" stopColor="#6C4BFF" />
          <stop offset="100%" stopColor="#3B82F6" />
        </radialGradient>
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6C4BFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
        <filter id="softGlow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="innerGlow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        {/* Path IDs for particle travel */}
        <path id="p1" d="M 30 100 C 100 100, 160 200, 160 240" />
        <path id="p2" d="M 30 200 C 90 200, 150 220, 160 240" />
        <path id="p3" d="M 30 300 C 100 300, 155 260, 160 240" />
        <path id="p4" d="M 30 380 C 110 360, 155 280, 160 240" />
        <path id="q1" d="M 160 240 C 170 240, 230 140, 290 130" />
        <path id="q2" d="M 160 240 C 175 240, 235 210, 290 210" />
        <path id="q3" d="M 160 240 C 178 240, 238 290, 290 300" />
        <path id="q4" d="M 160 240 C 172 240, 232 360, 290 370" />
      </defs>

      {/* ── Left input spokes ── */}
      {[
        { id: "p1", d: "M 30 100 C 100 100, 160 200, 160 240" },
        { id: "p2", d: "M 30 200 C 90 200, 150 220, 160 240" },
        { id: "p3", d: "M 30 300 C 100 300, 155 260, 160 240" },
        { id: "p4", d: "M 30 380 C 110 360, 155 280, 160 240" },
      ].map(({ id, d }, i) => (
        <g key={id}>
          <motion.path
            d={d}
            stroke="url(#flowGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.55 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15, duration: 1.2, ease: "easeOut" }}
          />
          {/* Traveling particle */}
          <motion.circle
            r="3"
            fill="white"
            filter="url(#softGlow)"
            style={{ offsetPath: `path("${d}")` } as React.CSSProperties}
            animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1.2 + i * 0.5,
              repeatDelay: 1.5,
              ease: "easeInOut",
            }}
          />
        </g>
      ))}

      {/* ── Right output spokes ── */}
      {[
        { id: "q1", d: "M 160 240 C 170 240, 230 140, 290 130" },
        { id: "q2", d: "M 160 240 C 175 240, 235 210, 290 210" },
        { id: "q3", d: "M 160 240 C 178 240, 238 290, 290 300" },
        { id: "q4", d: "M 160 240 C 172 240, 232 360, 290 370" },
      ].map(({ id, d }, i) => (
        <g key={id}>
          <motion.path
            d={d}
            stroke="url(#flowGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.55 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.15, duration: 1.1, ease: "easeOut" }}
          />
          <motion.circle
            r="3"
            fill="#3B82F6"
            filter="url(#softGlow)"
            style={{ offsetPath: `path("${d}")` } as React.CSSProperties}
            animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: 1.8 + i * 0.45,
              repeatDelay: 1.8,
              ease: "easeInOut",
            }}
          />
        </g>
      ))}

      {/* ── Central AI core ── */}
      {/* Outer glow halo */}
      <motion.circle
        cx="160" cy="240" r="52"
        fill="url(#glowGrad)"
        animate={{ r: [52, 62, 52], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Mid ring */}
      <motion.circle
        cx="160" cy="240" r="38"
        fill="none"
        stroke="rgba(108,75,255,0.35)"
        strokeWidth="1"
        animate={{ r: [38, 44, 38] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Core */}
      <circle cx="160" cy="240" r="28" fill="url(#coreGrad)" filter="url(#innerGlow)" />
      {/* Orbit ring 1 */}
      <motion.g
        style={{ transformOrigin: "160px 240px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="160" cy="240" r="36" fill="none" stroke="rgba(108,75,255,0.3)" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="196" cy="240" r="3.5" fill="#6C4BFF" filter="url(#softGlow)" />
      </motion.g>
      {/* Orbit ring 2 — opposite */}
      <motion.g
        style={{ transformOrigin: "160px 240px" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="160" cy="240" r="44" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="1" strokeDasharray="3 10" />
        <circle cx="160" cy="196" r="2.5" fill="#3B82F6" filter="url(#softGlow)" />
      </motion.g>

      {/* ── Center label ── */}
      <text x="160" y="236" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.5">ChatOne</text>
      <text x="160" y="250" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">AI Engine</text>

      {/* ── Left node dots ── */}
      {[100, 200, 300, 380].map((y, i) => (
        <motion.circle
          key={i} cx="30" cy={y} r="5"
          fill="url(#coreGrad)"
          filter="url(#softGlow)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.12, type: "spring", stiffness: 200, damping: 14 }}
        />
      ))}

      {/* ── Right node dots ── */}
      {[130, 210, 300, 370].map((y, i) => (
        <motion.circle
          key={i} cx="290" cy={y} r="5"
          fill="#3B82F6"
          filter="url(#softGlow)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 + i * 0.12, type: "spring", stiffness: 200, damping: 14 }}
        />
      ))}
    </svg>
  );
}

/* ---------------- Why ChatOne ---------------- */
export function WhyChatOne() {
  const features = [
    { icon: BookOpen, title: "Train on your content", desc: "PDFs, DOCX, websites — indexed in minutes." },
    { icon: Cloud,    title: "Cloud sync",             desc: "Google Drive & OneDrive stay in perfect sync." },
    { icon: Code2,    title: "One-line deploy",         desc: "Any website, any stack. Paste and go." },
    { icon: Palette,  title: "Your brand, not a bubble",desc: "Colors, logo, tone — fully customizable." },
  ];

  return (
    <section id="why-chatone" className="relative py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-35" />
      <motion.div animate={{ x:[0,40,0],y:[0,-30,0] }} transition={{ duration:20,repeat:Infinity,ease:"easeInOut" }}
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#6C4BFF]/10 blur-[130px]" />
      <motion.div animate={{ x:[0,-35,0],y:[0,25,0] }} transition={{ duration:24,repeat:Infinity,ease:"easeInOut",delay:-8 }}
        className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/10 blur-[130px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow"><span className="w-1.5 h-1.5 rounded-full bg-[#6C4BFF]" />Why ChatOne</span>
            <h2 className="font-display mt-5 text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-brand-ink">
              One platform. <span className="text-gradient-brand italic">Every answer.</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/60">Your content flows in. Instant, accurate answers flow out.</p>
          </div>
        </Reveal>

        {/* 3-column pipeline */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_280px_1fr] gap-6 items-stretch">

          {/* LEFT — Knowledge sources feed */}
          <Reveal delay={0.05}>
            <div className="flex flex-col gap-4 h-full">
              <div className="flex-1 rounded-3xl bg-white border border-black/[0.06] shadow-[0_10px_40px_-20px_rgba(108,75,255,0.15)] p-6 overflow-hidden">
                {/* Header row */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-[#6C4BFF]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-ink">Knowledge sources</div>
                    <div className="text-xs text-foreground/50">Ingesting your content…</div>
                  </div>
                  <span className="ml-auto flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />Live
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "product-guide.pdf", size: "2.4 MB", tag: "PDF", pct: 100, color: "#6C4BFF" },
                    { name: "help-center.com",   size: "312 pages", tag: "URL", pct: 84,  color: "#3B82F6" },
                    { name: "policies.docx",     size: "180 KB",  tag: "DOC", pct: 60,  color: "#6C4BFF" },
                    { name: "faq-database.txt",  size: "44 KB",   tag: "TXT", pct: 35,  color: "#3B82F6" },
                  ].map((f, i) => (
                    <motion.div key={f.name}
                      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                      className="rounded-2xl bg-indigo-50/50 border border-indigo-100/60 px-3.5 py-3"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold" style={{ background: `linear-gradient(135deg, ${f.color}, #3B82F6)` }}>{f.tag}</div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-brand-ink truncate">{f.name}</div>
                          <div className="text-[10px] text-foreground/50">{f.size}</div>
                        </div>
                        <span className="text-[10px] font-mono text-[#6C4BFF]">{f.pct}%</span>
                      </div>
                      <div className="h-1 rounded-full bg-indigo-100 overflow-hidden">
                        <motion.div className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${f.color}, #3B82F6)` }}
                          initial={{ width: 0 }} whileInView={{ width: `${f.pct}%` }} viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.85, duration: 0.5 }}
                  className="mt-4 rounded-2xl border border-dashed border-[#6C4BFF]/25 bg-indigo-50/30 px-4 py-3 text-center">
                  <Upload className="w-4 h-4 text-[#6C4BFF]/50 mx-auto" />
                  <div className="text-xs text-foreground/40 mt-1">Drop files or paste a URL</div>
                </motion.div>
              </div>
              <Reveal delay={0.2}>
                <div className="rounded-2xl bg-white border border-black/[0.06] shadow-sm px-5 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center shrink-0">
                    <Cloud className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-ink">Auto-sync enabled</div>
                    <div className="text-xs text-foreground/50">Google Drive · OneDrive · Notion</div>
                  </div>
                  <span className="ml-auto text-[11px] font-medium text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />Live
                  </span>
                </div>
              </Reveal>
            </div>
          </Reveal>

          {/* CENTER — AI Pipeline SVG */}
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="relative w-full" style={{ height: 400 }}>
                <AIPipelineSVG />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: 1, duration: 0.5, type: "spring" }}
                className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/[0.06] shadow-sm text-sm">
                  <Zap className="w-3.5 h-3.5 text-[#6C4BFF]" />
                  <span className="text-brand-ink font-semibold">0.4s</span>
                  <span className="text-foreground/50">avg response</span>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* RIGHT — Live answers + outcomes */}
          <Reveal delay={0.08}>
            <div className="flex flex-col gap-4 h-full">
              {/* Live chat panel */}
              <div className="flex-1 rounded-3xl bg-white border border-black/[0.06] shadow-[0_10px_40px_-20px_rgba(59,130,246,0.15)] overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[#6C4BFF] to-[#3B82F6]">
                  <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-white">Aria · Support Bot</span>
                  <span className="ml-auto flex items-center gap-1 text-[10px] text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />Online
                  </span>
                </div>
                <div className="p-4 space-y-2.5 bg-gradient-to-b from-white to-indigo-50/20">
                  {[
                    { side: "user", text: "Do you ship internationally?" },
                    { side: "bot",  text: "Yes — 50+ countries, tracked delivery. Want a quote?" },
                    { side: "user", text: "What's your return policy?" },
                    { side: "bot",  text: "Free returns within 30 days, no questions asked." },
                  ].map((m, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.18, duration: 0.4 }}
                      className={`flex ${m.side === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[85%] text-[12.5px] leading-snug rounded-2xl px-3 py-2 ${
                        m.side === "user"
                          ? "bg-brand-gradient text-white rounded-tr-sm shadow-md"
                          : "bg-white border border-black/5 text-brand-ink rounded-tl-sm shadow-sm"
                      }`}>{m.text}</div>
                    </motion.div>
                  ))}
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    transition={{ delay: 1.1 }}
                    className="flex gap-1 px-3 py-2 w-fit rounded-2xl bg-white border border-black/5 shadow-sm">
                    {[0,1,2].map(i => (
                      <motion.span key={i} className="w-1.5 h-1.5 rounded-full bg-foreground/30"
                        animate={{ y:[0,-3,0], opacity:[0.4,1,0.4] }}
                        transition={{ duration:0.9, repeat:Infinity, delay:i*0.15 }} />
                    ))}
                  </motion.div>
                </div>
              </div>
              {/* Stat pills */}
              <div className="grid grid-cols-2 gap-3">
                <Reveal delay={0.25}>
                  <div className="rounded-2xl bg-white border border-black/[0.06] shadow-sm p-4 text-center overflow-hidden relative">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#6C4BFF]/5 to-transparent" />
                    <div className="font-display text-3xl text-gradient-brand leading-none relative z-10"><Counter to={60} suffix="%" /></div>
                    <div className="text-[11px] text-foreground/55 mt-1 relative z-10">fewer tickets</div>
                    <div className="mt-2 h-1 rounded-full bg-indigo-50 overflow-hidden relative z-10">
                      <motion.div className="h-full rounded-full bg-brand-gradient" initial={{ width:0 }}
                        whileInView={{ width:"60%" }} viewport={{ once:true }} transition={{ delay:0.4,duration:0.8,ease:[0.22,1,0.36,1] }} />
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.28}>
                  <div className="rounded-2xl bg-gradient-to-br from-[#6C4BFF] to-[#3B82F6] p-4 text-center overflow-hidden relative shadow-[0_8px_24px_-8px_rgba(108,75,255,0.5)]">
                    <motion.div animate={{ rotate:360 }} transition={{ duration:18,repeat:Infinity,ease:"linear" }}
                      className="absolute -top-4 -right-4 w-14 h-14 rounded-full border-8 border-white/10" />
                    <div className="font-display text-3xl text-white leading-none relative z-10">&lt;5<span className="text-lg">m</span></div>
                    <div className="text-[11px] text-white/70 mt-1 relative z-10">to go live</div>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={0.3}>
                <div className="rounded-2xl bg-white border border-black/[0.06] shadow-sm px-5 py-4 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#6C4BFF] shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-brand-ink">Always online · 24/7</div>
                    <div className="text-xs text-foreground/50">Weekends, holidays, off-hours</div>
                  </div>
                  <div className="ml-auto font-display text-xl text-gradient-brand">24/7</div>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex justify-center">
            <MagneticButton icon={ArrowRight}>Try ChatOne free</MagneticButton>
          </div>
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
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] });

  // Compute translate distance based on rendered widths at runtime
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    let frame = 0;
    const measure = () => {
      if (!trackRef.current || !viewportRef.current) return;
      const total = trackRef.current.scrollWidth;
      const view = viewportRef.current.clientWidth;
      setDistance(Math.max(0, total - view));
    };
    const scheduleMeasure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };
    scheduleMeasure();

    const ro = new ResizeObserver(scheduleMeasure);
    if (trackRef.current) ro.observe(trackRef.current);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener("resize", scheduleMeasure);
    window.addEventListener("load", scheduleMeasure);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
      window.removeEventListener("load", scheduleMeasure);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0.08, 0.92], [0, -distance], { clamp: true });
  const xSpring = useSpring(x, { stiffness: 150, damping: 32, mass: 0.35 });
  const progressWidth = useTransform(scrollYProgress, [0.08, 0.92], ["0%", "100%"], { clamp: true });

  return (
    <section
      id="features"
      ref={wrapRef}
      className="relative"
      style={{ height: `${140 + FEATURE_ITEMS.length * 60}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden bg-gradient-to-b from-white via-[#F6F4FF] to-white">
        {/* soft brand mesh */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(circle, #C9B8FF 0%, transparent 60%)" }} />
          <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, #A8CBFF 0%, transparent 60%)" }} />
        </div>

        {/* Header row */}
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-10 pt-[4.5rem] md:pt-20 lg:pt-[5.5rem]">
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
          <h2 className="mt-5 max-w-4xl font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.02] tracking-tight text-brand-ink">
            Everything you need to ship a{" "}
            <span className="text-gradient-brand italic">smart AI assistant</span>.
          </h2>
        </div>

        {/* Horizontal track */}
        <div ref={viewportRef} className="relative z-10 flex-1 min-h-0 flex items-center mt-8 md:mt-10 pb-8 md:pb-10 overflow-visible">
          <motion.div
            ref={trackRef}
            style={{ x: xSpring }}
            className="flex items-center gap-5 md:gap-6 lg:gap-7 pl-[calc(50vw-210px)] md:pl-[calc(50vw-260px)] pr-[20vw] will-change-transform"
          >
            {FEATURE_ITEMS.map((f, i) => (
              <FeatureCard key={f.title} item={f} index={i} scrollYProgress={scrollYProgress} />
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

function FeatureCard({
  item, index, scrollYProgress,
}: {
  item: FeatureItem;
  index: number;
  scrollYProgress: any;
}) {
  const s = VARIANT_STYLES[item.variant];
  const Icn = item.icon;
  const total = FEATURE_ITEMS.length;
  const isLast = index === total - 1;

  // Stack depth: front card (index 0) has depth 0, back cards have higher depth
  const stackDepth = index; // 0 = front-most rendered card
  const foldedScale   = 1 - stackDepth * 0.04;
  const foldedRotateZ = stackDepth * 2.5;
  const foldedPeek    = stackDepth * 14; // peek to the right from center

  // Unfold animation over first 20% of scroll
  const unfoldProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1], { clamp: true });

  // Card-specific negative margin to collapse all cards on top of each other
  // At 0 (folded): each card pulls next cards over it with negative margin
  // At 1 (spread): normal gap restored
  const cardWidth = 420; // approximate card width
  const normalGap = 28;  // gap-7 ≈ 28px
  const negativeMargin = useTransform(
    unfoldProgress,
    [0, 1],
    [-(cardWidth + normalGap), 0]
  );

  const scale   = useTransform(unfoldProgress, [0, 1], [foldedScale, 1]);
  const rotateZ = useTransform(unfoldProgress, [0, 1], [foldedRotateZ, 0]);
  const xPeek   = useTransform(unfoldProgress, [0, 1], [-foldedPeek, 0]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.65, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      style={{
        scale,
        rotateZ,
        x: xPeek,
        zIndex: total - index,
        // Pull each card (except last) hard left so they stack at center
        marginRight: isLast ? 0 : negativeMargin,
      }}
      className={`relative shrink-0 w-[min(82vw,420px)] sm:w-[min(62vw,460px)] md:w-[min(44vw,520px)] lg:w-[min(33vw,560px)] xl:w-[min(30vw,580px)] h-[clamp(380px,46vh,520px)] md:h-[clamp(400px,48vh,540px)] rounded-[28px] md:rounded-[32px] overflow-hidden ${s.bg} ${s.text} shadow-[0_30px_80px_-40px_rgba(15,10,60,0.35)] ring-1 ${s.ring}`}
    >
      {/* Top: text */}
      <div className="relative p-6 md:p-8">
        <div className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full border ${s.chip}`}>
          <Icn className="w-3.5 h-3.5" /> {item.eyebrow}
        </div>
        <h3 className="mt-5 font-display text-[30px] md:text-[34px] lg:text-[36px] leading-[1.06] tracking-tight whitespace-pre-line">
          {item.title}
        </h3>
        <p className={`mt-3 max-w-md text-sm md:text-[15px] leading-relaxed ${s.sub}`}>{item.desc}</p>
      </div>

      {/* Bottom: visual */}
      <div className="absolute inset-x-0 bottom-0 h-[42%] md:h-[44%] px-5 md:px-7 pb-5 md:pb-7">
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
  visual: "upload" | "train" | "brand" | "embed";
};

const HIW_STEPS: Step[] = [
  { code: "01", title: "Create your bot", desc: "Name your bot, choose its tone — friendly, professional, or technical — and write a system prompt that captures your brand voice.", visual: "train" },
  { code: "02", title: "Upload your knowledge", desc: "Add PDFs, DOCX files, or paste any website URL. ChatOne reads your content and builds a smart knowledge base automatically.", visual: "upload" },
  { code: "03", title: "Customize the look", desc: "Upload your logo, choose brand colors, and write a welcome message. It should feel like a natural part of your site.", visual: "brand" },
  { code: "04", title: "Embed and go live", desc: "Copy one line of code. Paste it into your website. Your AI assistant is live and answering visitors 24/7.", visual: "embed" },
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
      const t = Math.min(0.9999, Math.max(0, (v - 0.06) / 0.88));
      const idx = Math.min(segments - 1, Math.floor(t * segments));
      setActive(idx);
    });
  }, [scrollYProgress, segments]);

  const barProgress = useTransform(scrollYProgress, [0.06, 0.94], ["0%", "100%"], { clamp: true });

  return (
    <section id="how-it-works" ref={wrapRef} className="relative" style={{ height: `${130 + segments * 70}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden bg-white">
        {/* Header */}
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-10 pt-20 md:pt-24 grid md:grid-cols-2 gap-6 md:gap-16">
          <div>
            <span className="eyebrow"><span className="w-1.5 h-1.5 rounded-full bg-[#6C4BFF]" />How it works</span>
            <p className="mt-4 text-brand-ink/70 text-[15px] md:text-base leading-relaxed max-w-sm">
              A four-step flow designed to feel effortless — no engineers required.
            </p>
          </div>
          <div>
            <div className="text-xs font-mono tracking-widest text-brand-ink/50">01 &nbsp; SOLUTION</div>
            <h2 className="mt-3 font-display text-2xl md:text-4xl leading-[1.1] tracking-tight text-brand-ink">
              From zero to live chatbot in under 10 minutes
            </h2>
          </div>
        </div>

        {/* Brand panel */}
        <div className="relative z-10 flex-1 mx-4 md:mx-8 mt-5 md:mt-6 mb-8 md:mb-10 min-h-0">
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
            <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 grid-rows-[minmax(0,55%)_1fr] md:grid-rows-none gap-2 md:gap-8 p-5 md:p-10">
              {/* Left: stacked visuals, crossfade based on active */}
              <div className="md:col-span-7 relative flex items-stretch min-h-0">
                <div className="relative w-full h-full">
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
              <div className="md:col-span-5 relative flex items-center min-h-0 h-full">
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
                      <h3 className="mt-2 md:mt-3 font-display text-2xl sm:text-3xl md:text-[40px] leading-[1.05] tracking-tight text-white">
                        {HIW_STEPS[active].title}
                      </h3>
                      <p className="mt-3 md:mt-4 text-sm sm:text-[15px] md:text-base leading-relaxed text-white/75 max-w-sm">
                        {HIW_STEPS[active].desc}
                      </p>
                      <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
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
  const activeRef = useRef(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const t = Math.min(0.9999, Math.max(0, (v - 0.06) / 0.88));
      const next = Math.min(total - 1, Math.floor(t * total));
      // Only trigger a React re-render when the index actually changes
      if (next !== activeRef.current) {
        activeRef.current = next;
        setActive(next);
      }
    });
  }, [scrollYProgress, total]);

  const barProgress = useTransform(scrollYProgress, [0.06, 0.94], ["0%", "100%"], { clamp: true });

  return (
    <section id="use-cases" ref={wrapRef} className="relative" style={{ height: `${130 + total * 75}vh` }}>
      {/* sticky sits below the nav bar (~102px: 36px banner + 66px nav) */}
      <div className="sticky top-0 h-[calc(100vh)] overflow-hidden bg-white flex flex-col">
        {/* Ambient background that shifts per active case — CSS transition avoids remount jank */}
        <div
          className="absolute inset-0 pointer-events-none"
        >
          <div
            className="absolute -top-40 -left-40 w-[680px] h-[680px] rounded-full blur-3xl opacity-40 transition-[background] duration-700 ease-out"
            style={{ background: `radial-gradient(circle, ${USE_CASES[active].accent.from} 0%, transparent 60%)` }}
          />
          <div
            className="absolute -bottom-40 -right-40 w-[680px] h-[680px] rounded-full blur-3xl opacity-35 transition-[background] duration-700 ease-out"
            style={{ background: `radial-gradient(circle, ${USE_CASES[active].accent.to} 0%, transparent 60%)` }}
          />
        </div>
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

        {/* Header row — pt accounts for sticky nav (banner ~36px + nav ~66px) */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-[6.5rem] md:pt-[7rem] flex items-end justify-between gap-6 shrink-0">
          <div>
            <span className="eyebrow"><span className="w-1.5 h-1.5 rounded-full bg-[#6C4BFF]" />Use cases</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-brand-ink max-w-2xl">
              Built for every type of <span className="text-gradient-brand italic">business</span>
            </h2>
          </div>
          <div className="hidden md:block font-mono text-xs tracking-[0.2em] text-brand-ink/50">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>

        {/* Main immersive panel — flex-1 fills remaining space above the bottom rail (62px) */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 mt-4 md:mt-5 flex-1 min-h-0 pb-[62px]">
          <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-stretch">
            {/* Left: text story */}
            <div className="md:col-span-6 relative overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${active}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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
            <div className="md:col-span-6 relative h-full flex items-start justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`visual-${active}`}
                  initial={{ opacity: 0, scale: 0.93, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full max-w-[480px] h-full"
                  style={{ willChange: "transform, opacity" }}
                >
                  <UseCaseVisual uc={USE_CASES[active]} />
                </motion.div>
              </AnimatePresence>

              {/* Floating stat badge */}
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

              {/* Icon badge bottom-left */}
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
                  {(() => { const Icon = USE_CASES[active].icon; return <Icon className="w-5 h-5" />; })()}
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
                <span className={`font-mono text-[11px] tracking-widest transition-colors ${i === active ? "text-brand-ink" : "text-brand-ink/35"}`}>
                  0{i + 1}
                </span>
                <span className={`text-sm font-medium transition-colors ${i === active ? "text-brand-ink" : "text-brand-ink/45 group-hover:text-brand-ink/70"}`}>
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


/* ---------------- Use Case Visual ---------------- */
function UseCaseVisual({ uc }: { uc: UseCase }) {
  const Icon = uc.icon;
  return (
    <div
      className="relative w-full h-full rounded-[36px] overflow-hidden shadow-[0_40px_90px_-40px_rgba(15,10,60,0.35)]"
      style={{ background: `linear-gradient(135deg, ${uc.accent.from} 0%, ${uc.accent.to} 100%)` }}
    >
      <div className="absolute inset-0 noise mix-blend-overlay" />
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 20% 15%, rgba(255,255,255,0.5), transparent 45%), radial-gradient(circle at 85% 85%, rgba(255,255,255,0.35), transparent 45%)",
        }} />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="absolute -right-10 -bottom-10 text-white"
      >
        <Icon className="w-[340px] h-[340px]" strokeWidth={1} />
      </motion.div>
      <div className="absolute inset-6 md:inset-8 rounded-3xl bg-white/12 backdrop-blur-xl border border-white/25 p-5 md:p-6 flex flex-col text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/25 flex items-center justify-center">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-widest text-white/70">USE CASE</div>
              <div className="text-sm font-semibold leading-tight">{uc.t}</div>
            </div>
          </div>
          <div className="text-[10px] font-mono text-white/70">LIVE</div>
        </div>
        <div className="mt-5 space-y-2.5 flex-1">
          {[
            { who: "user", text: "How do I get started?" },
            { who: "bot",  text: "Happy to help — here's the fastest path…" },
            { who: "user", text: "Can it use my docs?" },
            { who: "bot",  text: "Yes — just connect a source and we sync instantly." },
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
          <img src={logoSvg} alt="ChatOne" className="h-8" />
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
