import { motion } from 'framer-motion'
import {
  Calendar,
  Shield,
  Ruler,
  Weight,
  Sparkles,
  Crosshair,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────
interface Attribute {
  id: string
  icon: LucideIcon
  label: string
  value: string
  accentColor: string
  glowColor: string
}

const attributes: Attribute[] = [
  {
    id: 'idade',
    icon: Calendar,
    label: 'Idade',
    value: '19',
    accentColor: '#9b5de5',
    glowColor: 'rgba(155,93,229,0.3)',
  },
  {
    id: 'cla',
    icon: Shield,
    label: 'Clã',
    value: 'Nenhum',
    accentColor: '#c1121f',
    glowColor: 'rgba(193,18,31,0.3)',
  },
  {
    id: 'altura',
    icon: Ruler,
    label: 'Altura',
    value: '1,62m',
    accentColor: '#9b5de5',
    glowColor: 'rgba(155,93,229,0.3)',
  },
  {
    id: 'peso',
    icon: Weight,
    label: 'Peso',
    value: '52kg',
    accentColor: '#00f5d4',
    glowColor: 'rgba(0,245,212,0.3)',
  },
  {
    id: 'origem',
    icon: Sparkles,
    label: 'Origem',
    value: 'Inato',
    accentColor: '#00f5d4',
    glowColor: 'rgba(0,245,212,0.3)',
  },
  {
    id: 'especializacao',
    icon: Crosshair,
    label: 'Especialização',
    value: 'Controlador',
    accentColor: '#c1121f',
    glowColor: 'rgba(193,18,31,0.3)',
  },
]

// ─── Attribute Card ───────────────────────────────────────────────────────────
interface AttrCardProps {
  attr: Attribute
  index: number
}

const AttributeCard = ({ attr, index }: AttrCardProps) => {
  const Icon = attr.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -4,
        scale: 1.02,
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      className="attr-card group"
      id={`attr-${attr.id}`}
    >
      {/* Shimmer on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, transparent 30%, ${attr.accentColor}10 50%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex items-center gap-4">
        {/* Icon container */}
        <div
          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{
            background: `${attr.accentColor}12`,
            border: `1px solid ${attr.accentColor}25`,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Icon size={20} style={{ color: attr.accentColor }} strokeWidth={1.5} />
          </motion.div>
        </div>

        {/* Text */}
        <div className="flex flex-col min-w-0">
          <span
            className="font-cinzel text-xs tracking-widest uppercase mb-0.5"
            style={{ color: 'rgba(100,116,139,0.9)', fontSize: '0.65rem', letterSpacing: '0.2em' }}
          >
            {attr.label}
          </span>
          <span
            className="font-inter font-semibold truncate"
            style={{ color: '#e2e8f0', fontSize: '1rem', letterSpacing: '0.02em' }}
          >
            {attr.value}
          </span>
        </div>

        {/* Accent dot */}
        <motion.div
          className="ml-auto w-2 h-2 rounded-full flex-shrink-0"
          style={{
            background: attr.accentColor,
            boxShadow: `0 0 8px ${attr.glowColor}`,
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
        />
      </div>
    </motion.div>
  )
}

// ─── Section Header ───────────────────────────────────────────────────────────
const SectionHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="flex flex-col items-center gap-3 mb-10"
  >
    <div className="flex items-center gap-4 w-full">
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(155,93,229,0.5))' }} />
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#9b5de5', boxShadow: '0 0 8px rgba(155,93,229,0.8)' }} />
        <h2
          className="font-cinzel font-bold tracking-[0.25em] uppercase"
          style={{ color: '#e2e8f0', fontSize: '0.85rem', letterSpacing: '0.3em' }}
        >
          Atributos
        </h2>
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#9b5de5', boxShadow: '0 0 8px rgba(155,93,229,0.8)' }} />
      </div>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(155,93,229,0.5), transparent)' }} />
    </div>
    <p
      className="font-cinzel text-center"
      style={{ color: 'rgba(100,116,139,0.8)', fontSize: '0.7rem', letterSpacing: '0.15em' }}
    >
      Informações de Personagem
    </p>
  </motion.div>
)

// ─── Main AttributesGrid ──────────────────────────────────────────────────────
export default function AttributesGrid() {
  return (
    <section
      id="attributes"
      className="relative py-20 px-6"
      style={{ background: 'linear-gradient(180deg, #080810 0%, #0c0c18 50%, #080810 100%)' }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(155,93,229,0.05) 0%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeader />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {attributes.map((attr, index) => (
            <AttributeCard key={attr.id} attr={attr} index={index} />
          ))}
        </div>

        {/* Decorative bottom element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <div className="h-px flex-1 max-w-24" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,212,0.3))' }} />
          <div
            className="w-2 h-2 rotate-45"
            style={{ background: '#9b5de5', boxShadow: '0 0 10px rgba(155,93,229,0.6)' }}
          />
          <div className="h-px flex-1 max-w-24" style={{ background: 'linear-gradient(90deg, rgba(0,245,212,0.3), transparent)' }} />
        </motion.div>
      </div>
    </section>
  )
}
