'use client'

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
            {/*
              Reemplazá el SVG por fotos reales:

              import Image from 'next/image'

              <div className="relative w-full aspect-[3/4]">
                <Image src="/images/planta-principal.jpg" alt="Planta MOGASA" fill className="object-cover" />
              </div>
              <div className="absolute bottom-[-24px] right-[-24px] w-[55%] aspect-square border-4" style={{ borderColor: 'var(--navy)' }}>
                <Image src="/images/operarios.jpg" alt="Operarios MOGASA" fill className="object-cover" />
              </div>
            */}
            <div className="w-full relative overflow-hidden" style={{ aspectRatio: '3/4', background: 'var(--navy-mid)' }}>
              <PlantaSVG />
            </div>
            {/* Badge de años */}
            <div
              className="absolute bottom-[-20px] right-[-20px] hidden md:flex flex-col items-center justify-center p-6"
              style={{ background: 'var(--green)', width: '55%', aspectRatio: '1' }}
            >
              <div className="text-white leading-none" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 56 }}>+20</div>
              <div className="text-[12px] font-semibold uppercase tracking-[.15em] text-center mt-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
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
              Quiénes somos
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
              MOGASA es una empresa industrial con más de dos décadas operando en el Alto Valle, Río Negro y Neuquén.
              Fabricamos y proveemos insumos de embalaje para productores frutícolas, empaques y empresas industriales
              de la Patagonia Argentina.
              <br /><br />
              No somos un intermediario. Tenemos planta, depósito, stock y logística propia. Cuando empieza la
              temporada, nuestros clientes ya tienen asegurado el abastecimiento.
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

function PlantaSVG() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 533" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="533" fill="#0d2035" />
      <rect x="40" y="180" width="320" height="280" fill="#122845" stroke="#1d3d5c" strokeWidth="1" />
      <polygon points="0,180 200,80 400,180" fill="#0f2438" stroke="#1d3d5c" strokeWidth="1" />
      <rect x="60" y="130" width="60" height="30" fill="#1a4d6e" rx="2" />
      <rect x="170" y="110" width="60" height="30" fill="#1a4d6e" rx="2" />
      <rect x="280" y="130" width="60" height="30" fill="#1a4d6e" rx="2" />
      <rect x="0" y="420" width="400" height="113" fill="#0a1b2a" />
      <rect x="50" y="360" width="80" height="10" fill="#8B6914" rx="1" />
      <rect x="50" y="350" width="80" height="10" fill="#22A652" rx="1" />
      <rect x="50" y="340" width="80" height="10" fill="#22A652" rx="1" />
      <rect x="50" y="330" width="80" height="10" fill="#1a7d3e" rx="1" />
      <circle cx="260" cy="370" r="55" fill="none" stroke="#22A652" strokeWidth="3" />
      <circle cx="260" cy="370" r="44" fill="none" stroke="#1a7d3e" strokeWidth="2" />
      <circle cx="260" cy="370" r="33" fill="none" stroke="#22A652" strokeWidth="2" />
      <circle cx="260" cy="370" r="22" fill="none" stroke="#1a7d3e" strokeWidth="2" />
      <circle cx="260" cy="370" r="11" fill="none" stroke="#22A652" strokeWidth="2" />
      <circle cx="260" cy="370" r="4" fill="#22A652" />
      <circle cx="80" cy="210"  r="3" fill="#22A652" opacity=".8" />
      <circle cx="340" cy="210" r="3" fill="#22A652" opacity=".8" />
      <circle cx="200" cy="200" r="3" fill="#22A652" opacity=".8" />
    </svg>
  )
}
