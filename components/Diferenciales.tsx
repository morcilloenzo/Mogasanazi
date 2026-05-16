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
    desc:  'Stock permanente y logística eficiente. Entregas diarias en todo el Alto Valle, Valle Medio y Neuquén.',
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
      <div className="max-w-[1400px] mx-auto px-[4vw] py-16 md:py-24">
        {/* Header */}
        <div ref={ref} className={`reveal mb-10 md:mb-16 ${visible ? 'visible' : ''}`}>
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
          className="grid grid-cols-2 md:grid-cols-4 border-t border-[#D0D6E0]"
        >
          {items.map((item, i) => {
            const mobileRightBorder = i % 2 === 0 ? 'border-r border-[#D0D6E0]' : ''
            const desktopRightBorder = i < 3 ? 'md:border-r md:border-[#D0D6E0]' : 'md:border-r-0'
            const mobileResetForDesktop = i === 1 ? 'border-r-0 md:border-r' : ''
            return (
            <div
              key={item.num}
              className={`dif-item px-5 sm:px-8 py-8 sm:py-12 border-b border-[#D0D6E0] ${mobileRightBorder} ${desktopRightBorder} ${mobileResetForDesktop}`}
            >
              <div
                className="text-[11px] font-bold uppercase tracking-[.2em] mb-5 sm:mb-6"
                style={{ color: 'var(--green)' }}
              >
                {item.num}
              </div>
              <div
                className="dif-icon-el mb-5 sm:mb-6 text-[rgba(11,31,58,0.25)]"
                style={{ fontSize: 36 }}
              >
                {i === 0 && '⬡'}
                {i === 1 && '◎'}
                {i === 2 && '✦'}
                {i === 3 && '◈'}
              </div>
              <div
                className="uppercase mb-3 text-[18px] sm:text-[22px]"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--navy)', letterSpacing: '.03em' }}
              >
                {item.title}
              </div>
              <p className="text-[13px] sm:text-[14px] leading-6 sm:leading-7" style={{ color: '#4A5568' }}>
                {item.desc}
              </p>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
