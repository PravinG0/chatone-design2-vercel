import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import iconSvg from "@/assets/Logo/SVG/ChatOne_only_Icon.svg";

/* ── TypingIndicator ─────────────────────────────────────────────────── */
export function TypingIndicator({ delay = 0 }: { delay?: number }) {
  const shouldReduce = useReducedMotion();
  return (
    <div className="inline-flex items-center gap-1 px-1 py-0.5">
      {[0, 1, 2].map((i) => (
        <motion.span key={i} className="w-1.5 h-1.5 rounded-full bg-[#6C4BFF]/60"
          animate={shouldReduce ? {} : { y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }} />
      ))}
    </div>
  );
}

/* ── HeroConnectionSVG — full-width arcs connecting left↔right cards ── */
export function HeroConnectionSVG() {
  const shouldReduce = useReducedMotion();
  const arcs = [
    { d: "M 155 95  C 320 30,  680 30,  850 105", delay: 1.4, dur: 2.8, color: "#6C4BFF" },
    { d: "M 155 225 C 300 320, 700 340, 850 380", delay: 1.8, dur: 3.2, color: "#3B82F6" },
    { d: "M 155 380 C 280 460, 720 450, 850 235", delay: 2.2, dur: 2.6, color: "#6C4BFF" },
  ] as const;
  return (
    <svg className="pointer-events-none absolute inset-0 w-full h-full hidden md:block"
      viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true" style={{ zIndex: 5 }}>
      <defs>
        <linearGradient id="hcg1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6C4BFF" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#818CF8" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="hcg2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#818CF8" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#6C4BFF" stopOpacity="0.45" />
        </linearGradient>
        <filter id="hcglow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {arcs.map((arc, i) => (
        <g key={i}>
          <motion.path d={arc.d} fill="none"
            stroke={i === 1 ? "url(#hcg2)" : "url(#hcg1)"}
            strokeWidth="1.2" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: arc.delay, duration: 1.6, ease: "easeOut" }} />
          {!shouldReduce && (
            <>
              <motion.circle r="3.5" fill="white" filter="url(#hcglow)"
                initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ delay: arc.delay + 1.8, duration: arc.dur, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}>
                <animateMotion dur={`${arc.dur}s`} repeatCount="indefinite" begin={`${arc.delay + 1.8}s`} path={arc.d} />
              </motion.circle>
              <motion.circle r="2" fill={arc.color} filter="url(#hcglow)"
                initial={{ opacity: 0 }} animate={{ opacity: [0, 0.8, 0.8, 0] }}
                transition={{ delay: arc.delay + 2.6, duration: arc.dur * 0.8, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}>
                <animateMotion dur={`${arc.dur * 0.8}s`} repeatCount="indefinite" begin={`${arc.delay + 2.6}s`} path={arc.d} />
              </motion.circle>
            </>
          )}
        </g>
      ))}
    </svg>
  );
}

/* ── FloatingChatCard ─────────────────────────────────────────────────── */
interface FloatingChatCardProps {
  message: string;
  side: "left" | "right";
  top: number;
  edgeOffset: number;
  delay?: number;
  rotation?: number;
  showAvatar?: boolean;
  showTyping?: boolean;
  parallaxDepth?: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}

export function FloatingChatCard({
  message, side, top, edgeOffset, delay = 0, rotation = 0,
  showAvatar = false, showTyping = false, parallaxDepth = 1,
  mouseX, mouseY,
}: FloatingChatCardProps) {
  const shouldReduce = useReducedMotion();
  const signX = side === "left" ? 1 : -1;
  const parallaxX = useSpring(useTransform(mouseX, [0, 1], [-8 * parallaxDepth * signX, 8 * parallaxDepth * signX]), { stiffness: 50, damping: 20 });
  const parallaxY = useSpring(useTransform(mouseY, [0, 1], [-6 * parallaxDepth, 6 * parallaxDepth]), { stiffness: 50, damping: 20 });
  const rotateZ = useSpring(useTransform(mouseX, [0, 1], [rotation - 1.2, rotation + 1.2]), { stiffness: 50, damping: 22 });
  const floatDuration = 5 + parallaxDepth * 1.5;
  const floatAmt = 7 + parallaxDepth * 2;
  const posStyle: React.CSSProperties = side === "left" ? { top, left: edgeOffset } : { top, right: edgeOffset };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.0 + delay, duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
      style={{ position: "absolute", ...posStyle, x: shouldReduce ? 0 : parallaxX, y: shouldReduce ? 0 : parallaxY, rotate: shouldReduce ? rotation : rotateZ, zIndex: 10, maxWidth: 210 }}
      whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 22 } }}
    >
      <motion.div animate={shouldReduce ? {} : { y: [0, -floatAmt, 0] }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay: delay * 0.4 }}>
        <div className={`flex items-end gap-2 ${side === "right" ? "flex-row-reverse" : ""}`}>
          {showAvatar && (
            <div className="shrink-0 w-6 h-6 rounded-lg bg-brand-gradient flex items-center justify-center shadow-sm">
              <img src={iconSvg} alt="" className="w-3.5 h-3.5" />
            </div>
          )}
          <div className="relative text-[13px] font-medium text-brand-ink leading-snug shadow-[0_4px_20px_-4px_rgba(108,75,255,0.2),0_2px_8px_-2px_rgba(15,23,42,0.07)] border border-white/80 backdrop-blur-2xl"
            style={{ background: "rgba(255,255,255,0.82)", borderRadius: side === "left" ? "14px 14px 14px 3px" : "14px 14px 3px 14px", padding: showTyping ? "8px 12px" : "8px 14px" }}>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ borderRadius: "inherit", background: "linear-gradient(90deg, transparent, rgba(108,75,255,0.25), rgba(59,130,246,0.15), transparent)" }} />
            {showTyping ? <TypingIndicator delay={delay + 0.5} /> : message}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── AIOrb ────────────────────────────────────────────────────────────── */
export function AIOrb({ mouseX, mouseY, delay = 0 }: { mouseX: ReturnType<typeof useMotionValue<number>>; mouseY: ReturnType<typeof useMotionValue<number>>; delay?: number }) {
  const shouldReduce = useReducedMotion();
  const px = useSpring(useTransform(mouseX, [0, 1], [10, -10]), { stiffness: 35, damping: 14 });
  const py = useSpring(useTransform(mouseY, [0, 1], [-8, 8]), { stiffness: 35, damping: 14 });
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.3 + delay, duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
      style={{ x: shouldReduce ? 0 : px, y: shouldReduce ? 0 : py }}
      className="relative w-16 h-16">
      <motion.div animate={shouldReduce ? {} : { scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-3 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(108,75,255,0.45) 0%, rgba(59,130,246,0.15) 55%, transparent 75%)", filter: "blur(10px)" }} />
      <motion.div animate={shouldReduce ? {} : { scale: [1, 1.07, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-2 rounded-full"
        style={{ background: "radial-gradient(circle at 38% 38%, #c4b0ff, #6C4BFF 52%, #3B82F6)", boxShadow: "0 0 18px 4px rgba(108,75,255,0.5), inset 0 1px 0 rgba(255,255,255,0.45)" }} />
      <motion.div animate={shouldReduce ? {} : { rotate: 360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full" style={{ border: "1.5px solid rgba(108,75,255,0.45)" }}>
        <div className="absolute w-2 h-2 rounded-full -top-1 left-1/2 -translate-x-1/2" style={{ background: "linear-gradient(135deg,#6C4BFF,#3B82F6)", boxShadow: "0 0 5px rgba(108,75,255,0.9)" }} />
      </motion.div>
      <motion.div animate={shouldReduce ? {} : { rotate: -360 }} transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
        className="absolute inset-1 rounded-full" style={{ border: "1px solid rgba(59,130,246,0.35)", transform: "rotateX(58deg)" }}>
        <div className="absolute w-1.5 h-1.5 rounded-full -top-0.5 left-1/2 -translate-x-1/2" style={{ background: "#3B82F6", boxShadow: "0 0 4px rgba(59,130,246,0.9)" }} />
      </motion.div>
    </motion.div>
  );
}

/* ── CursorGlow ───────────────────────────────────────────────────────── */
export function CursorGlow({ mouseX, mouseY }: { mouseX: ReturnType<typeof useMotionValue<number>>; mouseY: ReturnType<typeof useMotionValue<number>> }) {
  const shouldReduce = useReducedMotion();
  const bg = useTransform([mouseX, mouseY], ([x, y]: number[]) =>
    `radial-gradient(360px 280px at ${x * 100}% ${y * 100}%, rgba(108,75,255,0.09), transparent 65%)`);
  if (shouldReduce) return null;
  return <motion.div className="pointer-events-none absolute inset-0" style={{ background: bg }} aria-hidden="true" />;
}

/* ── HeroSideElements ─────────────────────────────────────────────────── */
const LEFT_CARDS = [
  { message: "👋 Hey! How can I help?",  top: 40,  edgeOffset: 12, delay: 0,    rotation: -2,   showAvatar: true,  parallaxDepth: 0.7 },
  { message: "Tell me about pricing 💬", top: 160, edgeOffset: 24, delay: 0.12, rotation:  1.5, showAvatar: false, parallaxDepth: 1.1 },
  { message: "",                          top: 300, edgeOffset: 8,  delay: 0.25, rotation: -1,   showAvatar: true,  showTyping: true, parallaxDepth: 0.6 },
] as const;

const RIGHT_CARDS = [
  { message: "I found the perfect plan ✨", top: 50,  edgeOffset: 10, delay: 0.08, rotation:  2,   showAvatar: true,  parallaxDepth: 0.9 },
  { message: "Book a demo →",              top: 185, edgeOffset: 22, delay: 0.2,  rotation: -2,   showAvatar: false, parallaxDepth: 1.2 },
  { message: "98% answered instantly",     top: 330, edgeOffset: 6,  delay: 0.35, rotation:  1.5, showAvatar: true,  parallaxDepth: 0.65 },
] as const;

export function HeroSideElements({ side, mouseX, mouseY }: {
  side: "left" | "right";
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
  const cards = side === "left" ? LEFT_CARDS : RIGHT_CARDS;
  return (
    <div className="relative w-full h-full">
      <div className="pointer-events-none absolute inset-0" style={{
        background: side === "left"
          ? "radial-gradient(ellipse 90% 60% at 90% 40%, rgba(108,75,255,0.07), transparent 70%)"
          : "radial-gradient(ellipse 90% 60% at 10% 40%, rgba(59,130,246,0.07), transparent 70%)",
      }} />
      {cards.map((card, i) => (
        <FloatingChatCard key={i} message={card.message} side={side}
          top={card.top} edgeOffset={card.edgeOffset} delay={card.delay}
          rotation={card.rotation} showAvatar={card.showAvatar}
          showTyping={"showTyping" in card ? Boolean(card.showTyping) : false}
          parallaxDepth={card.parallaxDepth} mouseX={mouseX} mouseY={mouseY} />
      ))}
      {side === "right" && (
        <div className="absolute" style={{ bottom: 60, right: 18 }}>
          <AIOrb mouseX={mouseX} mouseY={mouseY} delay={0.15} />
        </div>
      )}
    </div>
  );
}
