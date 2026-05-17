'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

const MapaReal = dynamic(() => import('./MapaReal'), { ssr: false })

const zonas = [
  { id: 'alto-valle',      label: 'Alto Valle' },
  { id: 'neuquen',         label: 'Neuquén' },
  { id: 'valle-medio',     label: 'Valle Medio' },
  { id: 'patagonia-norte', label: 'Patagonia Norte' },
]


const localidades = [
  'San Patricio del Chañar', 'Villa Manzano',
  'Barda del Medio', 'Cinco Saltos', 'Cipolletti',
  'Neuquén', 'Fernández Oro', 'Allen', 'Cervantes',
  'Mainqué', 'Ing. Huergo', 'Godoy', 'Villa Regina',
  'Chichinales',
]

const zonasDescripciones: Record<string, string> = {
  'alto-valle':      'Principal zona de operación. Abastecemos los empaques y productores más grandes del Alto Valle de Río Negro y Neuquén.',
  'neuquen':         'Cobertura directa en toda la provincia con presencia comercial propia y entregas regulares.',
  'valle-medio':     'Atención a productores del Valle Medio con entregas programadas en temporada.',
  'patagonia-norte': 'Distribución hacia el norte patagónico para clientes industriales y agroindustriales.',
}

export default function Logistica() {
  const header = useReveal()
  const body   = useReveal()

  return (
    <section id="logistica" className="py-16 md:py-24" style={{ background: 'var(--navy)' }}>
      <div className="max-w-[1400px] mx-auto px-[4vw]">

        {/* Header */}
        <div
          ref={header.ref}
          style={{
            opacity:    header.visible ? 1 : 0,
            transform:  header.visible ? 'none' : 'translateY(40px)',
            transition: 'all .7s ease',
            marginBottom: 48,
          }}
        >
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-8 h-0.5" style={{ background: 'var(--green)' }} />
            <span className="text-[12px] font-semibold uppercase tracking-[.2em]" style={{ color: 'var(--green)' }}>
              Cobertura Logística
            </span>
          </div>
          <h2
            className="uppercase leading-[.95] mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize:   'clamp(32px,5vw,64px)',
              color:      '#fff',
            }}
          >
            Cerca de quienes nos necesitan
          </h2>
          <p className="text-[17px] leading-7 font-light max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Estamos cerca de las principales zonas productivas para responder rápido cuando cada temporada lo exige.
          </p>
        </div>

        {/* Body */}
        <div
          ref={body.ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-[3px]"
          style={{
            opacity:    body.visible ? 1 : 0,
            transform:  body.visible ? 'none' : 'translateY(40px)',
            transition: 'all .7s ease .1s',
          }}
        >

          {/* Col 1+2: mapa + zonas + localidades */}
          <div
            className="lg:col-span-2 p-5 sm:p-8"
            style={{ background: 'var(--navy-mid)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {/* Zonas — estáticas */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {zonas.map((z) => (
                <div
                  key={z.id}
                  className="flex items-center gap-2.5 px-4 py-3"
                  style={{
                    background:   'rgba(255,255,255,0.04)',
                    border:       '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 2,
                  }}
                >
                  <span
                    className="dot-pulse flex-shrink-0 rounded-full"
                    style={{ width: 8, height: 8, background: '#86efac' }}
                  />
                  <span className="text-[13px] font-semibold uppercase tracking-[.06em]" style={{ color: '#86efac' }}>
                    {z.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Descripción zona activa */}
            {/* Mapa real interactivo */}
            <div
              className="mb-6"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border:     '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <MapaReal zonaActiva={null} revealed={body.visible} />
            </div>

            {/* Localidades */}
            <div>
              <div
                className="text-[11px] font-bold uppercase tracking-[.2em] mb-3"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Localidades que servimos
              </div>
              <div className="flex flex-wrap gap-2">
                {localidades.map((loc) => (
                  <span
                    key={loc}
                    className="px-3 py-1 text-[12px] font-medium"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border:     '1px solid rgba(255,255,255,0.1)',
                      color:      'rgba(255,255,255,0.6)',
                    }}
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: CTA verde */}
          <div
            className="flex flex-col justify-between gap-8"
            style={{ background: 'var(--green)' }}
          >
            {/* Foto con fade */}
            <div className="relative w-full flex-shrink-0" style={{ height: 520, marginBottom: -220 }}>
              <Image
                src="/images/logistica-planta.png"
                alt="Planta MOGASA"
                fill
                className="object-cover"
                style={{ objectPosition: '50% 40%' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 0%, transparent 70%, var(--green) 100%)' }}
              />
            </div>

            <div className="relative flex flex-col gap-8 px-6 sm:px-8 pb-6 sm:pb-8">
            <div className="flex flex-col gap-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(0,0,0,0.25)' }}>
                <span className="dot-pulse w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#86efac' }} />
                <span className="text-[11px] font-bold uppercase tracking-[.2em]" style={{ color: '#86efac' }}>
                  Operación Activa
                </span>
              </div>

              {/* Título */}
              <h3
                className="uppercase leading-[1.05] text-white"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize:   'clamp(24px,2.5vw,34px)',
                }}
              >
                Respuesta rápida en temporada
              </h3>

              {/* Items */}
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM3 10h18M8 7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
                    ),
                    title: 'Stock Permanente',
                    desc:  'Disponibilidad para abastecer tu operación.',
                  },
                  {
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M1 3h13l3 5v5H1V3zM16 13h4l2 3v2h-2m-4 0H7m10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM5 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                    ),
                    title: 'Entrega Ágil',
                    desc:  'Repartos diarios, logística eficiente.',
                  },
                  {
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-1a4 4 0 0 0-5.5-3.7M9 20H4v-1a4 4 0 0 1 5.5-3.7M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm6 13v-1a4 4 0 0 0-3-3.87M3 20v-1a4 4 0 0 1 3-3.87" />
                    ),
                    title: 'Atención Directa',
                    desc:  'Un equipo que entiende y acompaña tu necesidad.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8}>
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[.15em] text-white mb-0.5">
                        {item.title}
                      </div>
                      <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contacto"
              className="flex items-center justify-between px-5 py-4 no-underline transition-all duration-200 hover:opacity-90"
              style={{
                background:    'var(--navy)',
                color:         '#fff',
                fontFamily:    'var(--font-display)',
                fontWeight:    700,
                fontSize:      14,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
              }}
            >
              Solicitar Cotización
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

