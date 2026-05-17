import Image from 'next/image'
import { heroStats } from '@/data/stats'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">

      {/* FONDO — foto real */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Planta industrial MOGASA"
          fill
          priority
          className="object-cover"
          style={{ filter: 'brightness(0.45) saturate(0.8)' }}
        />
      </div>

      {/* Overlay degradado */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to top, rgba(6,15,30,0.97) 0%, rgba(6,15,30,0.4) 55%, rgba(6,15,30,0.1) 100%)',
        }}
      />

      {/* CONTENIDO */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[5vw] sm:px-[4vw] pt-28 pb-14 sm:pb-20">

        <div className="flex items-center gap-2.5 mb-5 sm:mb-6 fade-up">
          <span className="block w-8 sm:w-10 h-0.5" style={{ background: 'var(--green)' }} />
          <span className="text-[11px] sm:text-[13px] font-semibold uppercase tracking-[.2em]" style={{ color: 'var(--green)' }}>
            Acompañando cada temporada
          </span>
        </div>

        <h1
          className="text-white uppercase leading-[.95] tracking-tight mb-5 sm:mb-7 max-w-[900px] fade-up fade-up-delay-1"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px, 7vw, 96px)' }}
        >
          Soluciones de Embalaje<br />
          <span style={{ color: 'var(--green)' }}>para quienes impulsan</span><br />
          la fruta Argentina
        </h1>

        <p
          className="mb-8 sm:mb-12 max-w-[560px] font-light leading-relaxed fade-up fade-up-delay-2"
          style={{ fontSize: 'clamp(15px, 2vw, 20px)', color: 'rgba(255,255,255,0.7)' }}
        >
          Producción flexible, impresión personalizada y capacidad industrial para responder a las exigencias de cada cliente.
        </p>

        <div className="flex items-stretch sm:items-center gap-3 sm:gap-4 flex-col sm:flex-row sm:flex-wrap fade-up fade-up-delay-3">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-9 py-3.5 sm:py-4 text-white no-underline transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: 'var(--green)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-[14px] sm:text-[16px]">Solicitar Cotización</span>
          </a>
          <a
            href="#productos"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-9 py-3.5 sm:py-4 text-white no-underline border border-[rgba(255,255,255,0.35)] transition-all duration-200 hover:border-white hover:bg-[rgba(255,255,255,0.08)]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}
          >
            <span className="text-[14px] sm:text-[16px]">Ver Productos</span>
          </a>
        </div>

        <div
          className="grid grid-cols-2 sm:flex sm:items-center gap-6 sm:gap-10 sm:flex-wrap mt-12 sm:mt-16 pt-8 sm:pt-10 fade-up fade-up-delay-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
        >
          {heroStats.map((s) => (
            <div key={s.label}>
              <div
                className="text-white leading-none"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(24px, 4vw, 48px)' }}
              >
                {s.value}
              </div>
              <div className="mt-1 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[.12em]" style={{ color: 'var(--green)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
