import { motion } from 'framer-motion'
import { Swords } from 'lucide-react'

// ─── Floating ambient orb ────────────────────────────────────────────────────
interface OrbProps {
  className: string
  size: string
  delay?: number
  duration?: number
}

const AmbientOrb = ({ className, size, delay = 0, duration = 12 }: OrbProps) => (
  <motion.div
    className={`orb ${className}`}
    style={{ width: size, height: size }}
    animate={{
      x: [0, 30, -20, -40, 0],
      y: [0, -40, -60, -20, 0],
      scale: [1, 1.1, 0.9, 1.05, 1],
      opacity: [0.3, 0.5, 0.2, 0.45, 0.3],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
)

// ─── Rotating sigil ring ─────────────────────────────────────────────────────
interface SigilRingProps {
  size: number
  color: string
  opacity: number
  clockwise?: boolean
  duration?: number
}

const SigilRing = ({
  size,
  color,
  opacity,
  clockwise = true,
  duration = 20,
}: SigilRingProps) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      border: `1px dashed ${color}`,
      opacity,
      top: '50%',
      left: '50%',
      marginTop: -size / 2,
      marginLeft: -size / 2,
      borderStyle: 'dashed',
      // simulate dashes via border
    }}
    animate={{ rotate: clockwise ? 360 : -360 }}
    transition={{ duration, repeat: Infinity, ease: 'linear' }}
  />
)

// ─── Portrait placeholder ────────────────────────────────────────────────────
const Portrait = () => (
  <div className="flex flex-col items-center gap-6">
    {/* Outer spinning rings */}
    <div className="relative flex items-center justify-center">
      <SigilRing size={260} color="rgba(155,93,229,0.35)" opacity={1} duration={25} />
      <SigilRing size={220} color="rgba(0,245,212,0.2)" opacity={1} clockwise={false} duration={18} />
      <SigilRing size={290} color="rgba(193,18,31,0.15)" opacity={1} duration={35} clockwise={false} />

      {/* Conic gradient portrait frame */}
      <motion.div
        className="portrait-frame relative z-10"
        style={{ width: 180, height: 180 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <div
          className="portrait-inner"
          style={{ width: '100%', height: '100%', padding: 3 }}
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%)' }}
          >
            {/* Sigil background */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 50% 50%, rgba(155,93,229,0.5) 0%, transparent 60%),
                  repeating-conic-gradient(rgba(155,93,229,0.15) 0deg, transparent 10deg, transparent 30deg, rgba(0,245,212,0.1) 40deg)
                `,
              }}
            />
            {/* Icon placeholder */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <Swords size={44} className="opacity-40" style={{ color: '#9b5de5' }} />
              <span
                className="font-cinzel text-xs tracking-[0.3em] uppercase"
                style={{ color: 'rgba(155,93,229,0.5)', fontSize: '0.55rem' }}
              >
                E · A
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
)

// ─── Main HeroSection ────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #080810 0%, #0a0815 50%, #080b10 100%)' }}
    >
      {/* ── Ambient orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AmbientOrb className="orb-purple" size="400px" delay={0} duration={14} />
        <AmbientOrb className="orb-crimson" size="300px" delay={-4} duration={18} />
        <AmbientOrb className="orb-teal"   size="250px" delay={-8} duration={11} />

        {/* Positioned orbs */}
        <motion.div
          className="orb orb-purple absolute"
          style={{ width: 350, height: 350, top: '10%', right: '5%' }}
          animate={{ x: [0, -30, 20, 0], y: [0, 30, -20, 0], opacity: [0.25, 0.4, 0.15, 0.25] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="orb orb-teal absolute"
          style={{ width: 200, height: 200, bottom: '15%', left: '8%' }}
          animate={{ x: [0, 40, -10, 0], y: [0, -30, 20, 0], opacity: [0.2, 0.35, 0.1, 0.2] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="orb orb-crimson absolute"
          style={{ width: 280, height: 280, bottom: '20%', right: '15%' }}
          animate={{ x: [0, -20, 30, 0], y: [0, -40, 10, 0], opacity: [0.15, 0.3, 0.1, 0.15] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
      </div>

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(155,93,229,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(155,93,229,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-6 py-20 max-w-4xl w-full text-center">

        {/* Chapter tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <div className="h-px w-10" style={{ background: 'rgba(0,245,212,0.5)' }} />
          <span
            className="font-cinzel text-xs tracking-[0.4em] uppercase"
            style={{ color: 'rgba(0,245,212,0.7)' }}
          >
            Arquivo de Personagem
          </span>
          <div className="h-px w-10" style={{ background: 'rgba(0,245,212,0.5)' }} />
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: 'spring', bounce: 0.3 }}
        >
          <Portrait />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="flex flex-col items-center gap-2"
        >
          <h1
            className="font-cinzel font-black text-glow-purple leading-none"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
              color: '#e2e8f0',
              letterSpacing: '0.04em',
              textShadow: '0 0 30px rgba(155,93,229,0.4), 0 0 60px rgba(155,93,229,0.15)',
            }}
          >
            Emilly
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(155,93,229,0.6))' }} />
            <span
              className="font-cinzel font-semibold text-xl tracking-[0.25em]"
              style={{ color: '#9b5de5' }}
            >
              "Emy"
            </span>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(155,93,229,0.6), transparent)' }} />
          </div>
          <h1
            className="font-cinzel font-black leading-none"
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              color: '#e2e8f0',
              letterSpacing: '0.08em',
              textShadow: '0 0 30px rgba(155,93,229,0.3)',
            }}
          >
            Atsuya
          </h1>
        </motion.div>

        {/* Clan badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex items-center gap-2 px-5 py-2 rounded-full"
          style={{
            background: 'rgba(193,18,31,0.12)',
            border: '1px solid rgba(193,18,31,0.3)',
          }}
        >
          <div className="w-2 h-2 rounded-full" style={{ background: '#c1121f', boxShadow: '0 0 8px rgba(193,18,31,0.8)' }} />
          <span className="font-cinzel text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(193,18,31,0.9)' }}>
            Feiticeira Maldita
          </span>
          <div className="w-2 h-2 rounded-full" style={{ background: '#c1121f', boxShadow: '0 0 8px rgba(193,18,31,0.8)' }} />
        </motion.div>

        {/* Quote — glassmorphism card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="glass-quote rounded-2xl px-8 py-6 max-w-xl w-full relative overflow-hidden"
        >
          {/* Corner accents */}
          <div
            className="absolute top-0 left-0 w-8 h-8 pointer-events-none"
            style={{
              borderTop: '2px solid rgba(0,245,212,0.5)',
              borderLeft: '2px solid rgba(0,245,212,0.5)',
              borderRadius: '12px 0 0 0',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none"
            style={{
              borderBottom: '2px solid rgba(0,245,212,0.5)',
              borderRight: '2px solid rgba(0,245,212,0.5)',
              borderRadius: '0 0 12px 0',
            }}
          />

          <p
            className="font-crimson italic text-center leading-relaxed"
            style={{
              color: '#e2e8f0',
              fontSize: '1.35rem',
              letterSpacing: '0.02em',
              textShadow: '0 0 20px rgba(0,245,212,0.15)',
            }}
          >
            <span style={{ color: 'rgba(0,245,212,0.6)', fontSize: '2rem', lineHeight: 0, verticalAlign: '-0.3em', marginRight: '4px' }}>"</span>
            Compreensão é só uma questão de perspectiva.
            <span style={{ color: 'rgba(0,245,212,0.6)', fontSize: '2rem', lineHeight: 0, verticalAlign: '-0.3em', marginLeft: '4px' }}>"</span>
          </p>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col items-center gap-2 mt-4"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1"
          >
            <div className="h-px w-6" style={{ background: 'rgba(155,93,229,0.4)' }} />
            <div className="h-px w-4 mt-1" style={{ background: 'rgba(155,93,229,0.25)' }} />
            <div className="h-px w-2 mt-1" style={{ background: 'rgba(155,93,229,0.12)' }} />
          </motion.div>
          <span
            className="font-cinzel text-xs tracking-[0.3em] uppercase"
            style={{ color: 'rgba(155,93,229,0.35)', fontSize: '0.6rem' }}
          >
            Rolar
          </span>
        </motion.div>
      </div>
    </section>
  )
}
