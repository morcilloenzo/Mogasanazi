'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

export default function Capacidad() {
  const left  = useReveal()
  const right = useReveal()

  return (
    <section id="capacidad" className="tex-overlay py-16 md:py-24" style={{ background: '#F7F8FA' }}>
      <div className="max-w-[1400px] mx-auto px-[4vw]">

        <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-green">
          Nuestra Planta
        </p>

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">

          {/* Contenido */}
          <div
            ref={left.ref}
            className="lg:col-span-5"
            style={{
              opacity:    left.visible ? 1 : 0,
              transform:  left.visible ? 'none' : 'translateY(40px)',
              transition: 'all .7s ease',
            }}
          >
            <h2
              className="text-3xl font-extrabold uppercase leading-[1.1] tracking-tight text-navy md:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Capacidad Industrial<br />
              <span className="text-navy/70">Para Grandes Demandas</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-600 md:text-lg">
              Contamos con tecnología, infraestructura y equipo humano para garantizar
              producción constante y entregas en cada temporada crítica.
            </p>

            <div className="mt-8">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 border border-navy px-6 py-3
                  text-sm font-semibold text-navy no-underline transition-all duration-300
                  hover:bg-navy hover:text-white"
              >
                Conocé nuestra planta
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#D0D6E0] pt-8">
              <div>
                <p
                  className="text-2xl font-extrabold text-navy md:text-3xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  4
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                  Líneas de producción
                </p>
              </div>
              <div>
                <p
                  className="text-2xl font-extrabold text-navy md:text-3xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  900.000 kg
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                  Capacidad productiva
                </p>
              </div>
            </div>
          </div>

          {/* Imágenes */}
          <div
            ref={right.ref}
            className="lg:col-span-7"
            style={{
              opacity:    right.visible ? 1 : 0,
              transform:  right.visible ? 'none' : 'translateY(40px)',
              transition: 'all .7s ease .15s',
            }}
          >
            <div className="grid grid-cols-2 gap-3">
              <div
                className="relative col-span-2 overflow-hidden rounded-2xl shadow-md"
                style={{ aspectRatio: '16/9', background: '#E5E9F0' }}
              >
                <Image
                  src="/images/1.png"
                  alt="Camión MOGASA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div
                className="relative overflow-hidden rounded-2xl shadow-md"
                style={{ aspectRatio: '4/3', background: '#E5E9F0' }}
              >
                <Image
                  src="/images/3.png"
                  alt="Depósito MOGASA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
              <div
                className="relative overflow-hidden rounded-2xl shadow-md"
                style={{ aspectRatio: '4/3', background: '#E5E9F0' }}
              >
                <Image
                  src="/images/2.png"
                  alt="Autoelevador MOGASA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
