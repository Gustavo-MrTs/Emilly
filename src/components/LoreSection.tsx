import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

// ─── Lore content ─────────────────────────────────────────────────────────────
// 'dialogue' = Emy speaking directly (first-person, italic, teal)
// 'narration' = third-person narrative (dim, Crimson Text serif)
type BlockType = 'dialogue' | 'narration'

interface LoreBlock {
  type: BlockType
  text: string
}

const loreBlocks: LoreBlock[] = [
  {
    type: 'dialogue',
    text: 'Hm?... como foi minha infância?... foi bem normal... eu acho... certo, eu vou contar bem do comecinho só pra você...',
  },
  {
    type: 'narration',
    text: 'Nascida em uma família renomada de feiticeiros, com seu pai sendo um membro do renomado clã Atsuya e sua mãe, sendo a líder de uma pequena família de feiticeiros tradicionais, Emilly nasceu em uma família amorosa...',
  },
  {
    type: 'dialogue',
    text: 'Ao menos eu acho que era isso que eles gostavam de transparecer... eles vivam discutindo, sempre por minha causa... eu nasci com uma condição única... isso causou danos permanentes na minha mãe durante a gestação, por causa disso ela acabou fincando muito mais fraca do que era antes... acho que ela me culpava...',
  },
  {
    type: 'dialogue',
    text: 'Por outro lado, o meu pai, sempre me defendia nas discussões... embora ele também não fosse a pessoa mais fácil de conviver... nem a mais controlada... ao menos ele me ensinou a tocar baixo, não que eu consiga no meu estado atual...',
  },
  {
    type: 'dialogue',
    text: 'Eu me distrai, desculpa, eles viviam discutindo, até que chegou em um limite. Eu não consigo me lembrar muito bem dos detalhes dessa época, mas eu me lembro quando eles se separaram... eu acabei ficando com minha mãe... acho que ela apenas não queria deixá-lo ganhar... ou ela gostava da cor do meu cabelo, talvez, nunca vou saber... mas eu fiquei com ela no fim... infelizmente.',
  },
  {
    type: 'dialogue',
    text: 'Eu passei a viver com o lado dela da família, acho que após viver com eles um tempo, eu consegui entender o motivo da minha mãe ser assim... eles eram... conservadores... para dizer o mínimo... acho que estavam tentando criar um clã ou algo do tipo... mas não acho que eles conseguiram... espero que não tenham...',
  },
  {
    type: 'dialogue',
    text: 'Mas sinceramente, não era tão ruim, eles apenas eram estranhos... mas mudou quando eu aprendi a usar minha técnica.',
  },
  {
    type: 'narration',
    text: 'Durante seu tempo vivendo com a família de sua mãe, Emilly acabou por treinar sua técnica amaldiçoada desde de muito nova, até que finalmente conseguiu fazer algo novo com ela, onde ela conseguiu criar uma maldição, mas...',
  },
  {
    type: 'dialogue',
    text: 'Sim, foi nesse período... acho que já te falei sobre isso, não?... certo.. acho que isso aconteceu... foi um ano depois do termino dos meus país, eu devia ter cerca de sete ou oito anos... não me lembro exatamente... eu fiz uma maldição e fui mostrar pra minha mãe, mas ela acabou por não gostar tanto.',
  },
]

// ─── Paragraph block ─────────────────────────────────────────────────────────
interface LoreBlockProps {
  block: LoreBlock
  index: number
}

const LoreParagraph = ({ block, index }: LoreBlockProps) => {
  const isDialogue = block.type === 'dialogue'

  return (
    <motion.div
      initial={{ opacity: 0, x: isDialogue ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      className="relative"
    >
      {isDialogue ? (
        /* ── Dialogue (Emy's voice) ── */
        <div className="lore-dialogue pl-6 py-1">
          <p>{block.text}</p>
        </div>
      ) : (
        /* ── Narration (third-person) ── */
        <div className="lore-narration">
          <p>{block.text}</p>
        </div>
      )}
    </motion.div>
  )
}

// ─── Decorative separator ────────────────────────────────────────────────────
const GlyphSeparator = ({ index }: { index: number }) => {
  const glyphs = ['✦', '⬡', '◈', '✧', '⟡']
  const glyph = glyphs[index % glyphs.length]

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glyph-separator"
    >
      <span style={{ color: 'rgba(0,245,212,0.45)', fontSize: '0.7rem' }}>{glyph}</span>
    </motion.div>
  )
}

// ─── Chapter header ───────────────────────────────────────────────────────────
const ChapterHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    className="flex flex-col items-center gap-6 mb-12"
  >
    {/* Top decorative line */}
    <div className="flex items-center gap-4 w-full max-w-md">
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(155,93,229,0.6))' }} />
      <BookOpen size={18} style={{ color: '#9b5de5', opacity: 0.7 }} strokeWidth={1.5} />
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(155,93,229,0.6), transparent)' }} />
    </div>

    {/* Chapter tag */}
    <div
      className="px-4 py-1.5 rounded-full font-cinzel text-xs tracking-[0.25em] uppercase"
      style={{
        background: 'rgba(155,93,229,0.1)',
        border: '1px solid rgba(155,93,229,0.25)',
        color: 'rgba(155,93,229,0.8)',
        letterSpacing: '0.2em',
        fontSize: '0.65rem',
      }}
    >
      Capítulo I
    </div>

    {/* Title */}
    <div className="text-center">
      <h2
        className="font-cinzel font-bold leading-tight"
        style={{
          fontSize: 'clamp(1.8rem, 5vw, 3rem)',
          color: '#e2e8f0',
          letterSpacing: '0.06em',
          textShadow: '0 0 30px rgba(155,93,229,0.25)',
        }}
      >
        "Existência"
      </h2>
      <div className="mt-2 flex items-center justify-center gap-2">
        <div
          className="h-px w-16"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,212,0.5))' }}
        />
        <div
          className="w-1.5 h-1.5 rotate-45"
          style={{ background: '#00f5d4', boxShadow: '0 0 8px rgba(0,245,212,0.7)' }}
        />
        <div
          className="h-px w-16"
          style={{ background: 'linear-gradient(90deg, rgba(0,245,212,0.5), transparent)' }}
        />
      </div>
    </div>

    {/* Legend */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="flex items-center gap-8 flex-wrap justify-center"
    >
      <div className="flex items-center gap-2">
        <div
          className="w-4 h-4 rounded-sm"
          style={{ background: 'rgba(0,245,212,0.15)', border: '1px solid rgba(0,245,212,0.4)' }}
        />
        <span
          className="font-inter text-xs italic"
          style={{ color: 'rgba(0,245,212,0.7)', fontSize: '0.7rem' }}
        >
          Voz de Emy
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div
          className="w-4 h-4 rounded-sm"
          style={{ background: 'rgba(148,163,184,0.1)', border: '1px solid rgba(148,163,184,0.25)' }}
        />
        <span
          className="font-inter text-xs"
          style={{ color: 'rgba(148,163,184,0.7)', fontSize: '0.7rem' }}
        >
          Narração
        </span>
      </div>
    </motion.div>
  </motion.div>
)

// ─── Closing seal ─────────────────────────────────────────────────────────────
const ClosingSeal = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="flex flex-col items-center gap-4 mt-14"
  >
    <div className="flex items-center gap-4 w-full">
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(155,93,229,0.4))' }} />
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute rounded-full border"
          style={{ width: 50, height: 50, borderColor: 'rgba(155,93,229,0.25)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute rounded-full border"
          style={{ width: 38, height: 38, borderColor: 'rgba(0,245,212,0.2)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <span style={{ color: 'rgba(155,93,229,0.6)', fontSize: '0.7rem' }}>✦</span>
      </div>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(155,93,229,0.4), transparent)' }} />
    </div>
    <p
      className="font-cinzel text-center"
      style={{ color: 'rgba(100,116,139,0.5)', fontSize: '0.65rem', letterSpacing: '0.3em' }}
    >
      Continua...
    </p>
  </motion.div>
)

// ─── Main LoreSection ─────────────────────────────────────────────────────────
export default function LoreSection() {
  return (
    <section
      id="lore"
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080810 0%, #0a0a14 30%, #080810 100%)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,245,212,0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-64 h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(155,93,229,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <ChapterHeader />

        {/* Lore content */}
        <div className="flex flex-col gap-5">
          {loreBlocks.map((block, index) => (
            <div key={index}>
              <LoreParagraph block={block} index={index} />
              {/* Add a glyph separator every 2 blocks, but not after the last */}
              {index < loreBlocks.length - 1 && (index + 1) % 2 === 0 && (
                <GlyphSeparator index={index} />
              )}
            </div>
          ))}
        </div>

        <ClosingSeal />
      </div>
    </section>
  )
}
