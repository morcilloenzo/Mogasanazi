'use client'

import { useReveal } from '@/hooks/useReveal'

const items = [
  {
    num:   '01',
    title: 'Producción Industrial',
    desc:  'Planta propia con capacidad para abastecer grandes volúmenes durante la temporada. No dependemos de terceros para cumplir.',
  },
  {
    num:   '02',
    title: 'Respuesta en 48 horas',
    desc:  'Stock permanente y logística propia. Entrega en 48 horas en todo el Alto Valle, Río Negro y Neuquén.',
  },
  {
    num:   '03',
    title: 'Calidad Certificada',
    desc:  'Materiales certificados para exportación. Nuestro packaging cumple las exigencias de mercados internacionales.',
  },
  {
    num:   '04',
    title: 'Atención Directa',
    desc:  'Comerciales propios en la región. Conocemos cada operación y respondemos sin intermediarios.',
  },
]

export default function Diferenciales() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="diferenciales"
      className="tex-overlay"
      style={{ background: '#F7F8FA', borderTop: '1px solid #EAEDF2' }}
    >
      <div className="max-w-[1400px] mx-auto px-[4vw] py-24">
        {/* Header */}
        <div ref={ref} className={`reveal mb-16 ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-8 h-0.5" style={{ background: 'var(--green)' }} />
            <span className="text-[12px] font-semibold uppercase tracking-[.2em]" style={{ color: 'var(--green)' }}>
              Por qué elegirnos
            </span>
          </div>
          <h2
            className="uppercase leading-[.95]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px,5vw,64px)', color: 'var(--navy)' }}
          >
            La diferencia<br />que sostiene<br />tu operación
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ borderTop: '1px solid #D0D6E0' }}
        >
          {items.map((item, i) => (
            <div
              key={item.num}
              className="dif-item px-8 py-12"
              style={{
                borderRight: i < 3 ? '1px solid #D0D6E0' : 'none',
                borderBottom: '1px solid #D0D6E0',
              }}
            >
              <div
                className="text-[11px] font-bold uppercase tracking-[.2em] mb-6"
                style={{ color: 'var(--green)' }}
              >
                {item.num}
              </div>
              <div
                className="dif-icon-el mb-6 text-[rgba(11,31,58,0.25)]"
                style={{ fontSize: 40 }}
              >
                {i === 0 && '⬡'}
                {i === 1 && '◎'}
                {i === 2 && '✦'}
                {i === 3 && '◈'}
              </div>
              <div
                className="uppercase mb-3"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--navy)', letterSpacing: '.03em' }}
              >
                {item.title}
              </div>
              <p className="text-[14px] leading-7" style={{ color: '#4A5568' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
