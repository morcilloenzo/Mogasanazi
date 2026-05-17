'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

const logos = [
  { src: '/images/clients/pai.jpg',            alt: 'PAI' },
  { src: '/images/clients/mono-azul.png',      alt: 'Moño Azul' },
  { src: '/images/clients/tres-ases.png',      alt: 'Tres Ases' },
  { src: '/images/clients/boschi.png',         alt: 'Boschi' },
  { src: '/images/clients/cervi.gif',          alt: 'Cervi' },
  { src: '/images/clients/battaglio.png',      alt: 'Battaglio' },
  { src: '/images/clients/vicente.jpg',        alt: 'Vicente' },
  { src: '/images/clients/frutas-joselia.jpg', alt: 'Frutas Joselia' },
]

export function Clientes() {
  return (
    <section id="clientes" className="overflow-hidden bg-white py-16 lg:py-20">

      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-[4vw] mb-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="block w-8 h-0.5" style={{ background: 'var(--green)' }} />
          <span className="text-[12px] font-semibold uppercase tracking-[.2em]" style={{ color: 'var(--green)' }}>
            Trabajan con nosotros
          </span>
        </div>
        <h2
          className="uppercase leading-[.95] mb-4"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px,5vw,64px)', color: 'var(--navy)' }}
        >
          Empresas que confían<br /> en MOGASA
        </h2>
        <p className="text-[17px] leading-7 font-light max-w-lg" style={{ color: '#4A5568' }}>
          Acompañamos a productores y empaques frutícolas del Alto Valle, Valle Medio y la región patagónica.
        </p>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        {/* Fade izquierda */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />
        {/* Fade derecha */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

        <div className="marquee-track flex w-max py-3">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              title={logo.alt}
              className="flex h-20 w-[200px] flex-shrink-0 items-center justify-center rounded-xl border border-[#EAEDF2] bg-white px-8 mr-4 transition-all duration-300 hover:border-green hover:shadow-md"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={48}
                className="max-h-12 max-w-[140px] object-contain"
                unoptimized={logo.src.endsWith('.gif')}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export function Testimonio() {
  const t = useReveal()
  return (
    <section
      className="py-20 px-[4vw] overflow-hidden relative"
      style={{ background: 'var(--navy-deep)' }}
    >
      <div
        className="absolute top-[-60px] right-[-60px] rounded-full pointer-events-none"
        style={{ width: 300, height: 300, border: '1px solid rgba(34,166,82,0.12)' }}
      />
      <div
        ref={t.ref}
        className="max-w-[900px] mx-auto text-center"
        style={{
          opacity:    t.visible ? 1 : 0,
          transform:  t.visible ? 'none' : 'translateY(40px)',
          transition: 'all .7s ease',
        }}
      >
        <div
          className="leading-[.6] mb-0"
          style={{ fontFamily: 'var(--font-display)', fontSize: 120, color: 'var(--green)', opacity: .3 }}
        >
          "
        </div>
        <div
          className="text-white uppercase leading-[1.1] mb-8"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(22px,4vw,40px)' }}
        >
          Cuando empieza la temporada, el abastecimiento no puede fallar. Nosotros nos aseguramos de que no falle.
        </div>
        <div className="text-[13px] uppercase tracking-[.15em]" style={{ color: 'var(--green)' }}>
          MOGASA — General Roca, Río Negro - Argentina
        </div>
      </div>
    </section>
  )
}
