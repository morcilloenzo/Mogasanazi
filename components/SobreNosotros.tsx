'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

const pilares = [
  {
    title: 'Capacidad operativa real',
    desc:  'Producción propia con flexibilidad para grandes volúmenes y picos de temporada.',
  },
  {
    title: 'Logística regional eficiente',
    desc:  'Conocemos los tiempos, las rutas y las exigencias del sector frutícola patagónico.',
  },
  {
    title: 'Abastecimiento en temporada',
    desc:  'Planificación anticipada con cada cliente para garantizar continuidad sin cortes.',
  },
  {
    title: 'Respuesta directa',
    desc:  'Comerciales propios en la región, sin intermediarios, con decisión inmediata.',
  },
]

export default function SobreNosotros() {
  const left  = useReveal()
  const right = useReveal()

  return (
    <section id="nosotros" className="overflow-hidden" style={{ background: 'var(--navy)' }}>
      <div className="max-w-[1400px] mx-auto px-[4vw] py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">

          {/* IMAGEN */}
          <div
            ref={left.ref}
            className="relative"
            style={{ opacity: left.visible ? 1 : 0, transform: left.visible ? 'none' : 'translateY(40px)', transition: 'all .7s ease' }}
          >
            <div className="w-full relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <Image src="/images/4.png" alt="MOGASA" fill className="object-cover" />
            </div>
            {/* Badge de años */}
            <div
              className="absolute bottom-[-14px] right-[-14px] md:bottom-[-20px] md:right-[-20px] flex flex-col items-center justify-center p-3 md:p-6"
              style={{ background: 'var(--green)', width: '40%', aspectRatio: '1', maxWidth: 160 }}
            >
              <div className="text-white leading-none text-[36px] md:text-[56px]" style={{ fontFamily: 'var(--font-display)', fontWeight: 900 }}>+30</div>
              <div className="text-[9px] md:text-[12px] font-semibold uppercase tracking-[.15em] text-center mt-1 md:mt-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Años en la Patagonia
              </div>
            </div>
          </div>

          {/* TEXTO */}
          <div
            ref={right.ref}
            style={{ opacity: right.visible ? 1 : 0, transform: right.visible ? 'none' : 'translateY(40px)', transition: 'all .7s ease .15s' }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 text-white mb-8 text-[11px] font-semibold uppercase tracking-[.15em]"
              style={{ background: 'var(--green)' }}
            >
              Sobre nosotros
            </div>

            <div
              className="uppercase mb-8 leading-[1.05]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(22px,3vw,36px)', color: '#fff' }}
            >
              Acompañamos operaciones que{' '}
              <em className="not-italic" style={{ color: 'var(--green)' }}>
                no pueden detenerse
              </em>{' '}
              en temporada.
            </div>

            <p className="text-[15px] leading-[1.8] mb-10 font-light" style={{ color: 'rgba(255,255,255,0.6)' }}>
              MOGASA es una empresa industrial que acompaña a productores del sector fruticula brindando
              soluciones de packaging confiables para cada etapa de la temporada.
              Sabemos que en cada cosecha la continuidad y la respuesta rapida hacen la diferencia. Por  eso 
              Combinamos capacidad industrial, personalización y flexibilidad para adaptarnos a las necesidades 
              de cada operación.
            </p>

            <div className="flex flex-col gap-4">
              {pilares.map((p) => (
                <div key={p.title} className="flex items-start gap-4">
                  <div
                    className="mt-[7px] flex-shrink-0 rounded-full"
                    style={{ width: 6, height: 6, background: 'var(--green)' }}
                  />
                  <p className="text-[14px] leading-relaxed font-light" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    <strong className="font-semibold" style={{ color: '#fff' }}>{p.title}:</strong>{' '}
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

