import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative py-12 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #080810 0%, #060609 100%)',
        borderTop: '1px solid rgba(155,93,229,0.08)',
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {/* Sigil */}
        <div className="relative flex items-center justify-center mb-2">
          <motion.div
            className="absolute rounded-full border"
            style={{ width: 48, height: 48, borderColor: 'rgba(155,93,229,0.2)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
          <span
            className="font-cinzel font-bold relative z-10"
            style={{ color: 'rgba(155,93,229,0.5)', fontSize: '0.8rem' }}
          >
            E·A
          </span>
        </div>

        <p
          className="font-cinzel text-center"
          style={{ color: 'rgba(100,116,139,0.4)', fontSize: '0.65rem', letterSpacing: '0.3em' }}
        >
          EMILLY "EMY" ATSUYA — ARQUIVO DE PERSONAGEM
        </p>

        <div className="flex items-center gap-3">
          <div
            className="h-px w-8"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,212,0.3))' }}
          />
          <span style={{ color: 'rgba(0,245,212,0.25)', fontSize: '0.5rem' }}>✦</span>
          <div
            className="h-px w-8"
            style={{ background: 'linear-gradient(90deg, rgba(0,245,212,0.3), transparent)' }}
          />
        </div>

        <p
          className="font-inter text-center"
          style={{ color: 'rgba(100,116,139,0.3)', fontSize: '0.6rem' }}
        >
          Perfil de RPG de Mesa · Sistema de Jujutsu
        </p>
      </div>
    </motion.footer>
  )
}
