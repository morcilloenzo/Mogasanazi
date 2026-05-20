'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

const topProducts = [
  {
    id:    'corrugado',
    img:   '/images/products/corrugado.jpg',
    tag:   'Kraft · Violeta',
    name:  'Papel Corrugado',
    desc:  'Planchas de cartón corrugado de alta resistencia para embalaje. Ancho y diámetro personalizable.',
    badge: 'Premium',
  },
  {
    id:    'seda',
    img:   '/images/products/seda.jpg',
    tag:   'Blanco · Verde · Violeta · Negro',
    name:  'Papel Seda',
    desc:  'Papel de envoltura premium para fruticultura. Ideal para exportación.',
    badge: 'Premium',
  },
]

const bottomProducts = [
  {
    id:   'rollos',
    img:  '/images/products/rollos.png',
    tag:  'Bobinas · A medida',
    name: 'Rollos de Corrugado',
    desc: 'Bobinas de corrugado simple faz para interfoliado y protección. Ancho y diámetro personalizable.',
  },
  {
    id:   'esquineros',
    img:  '/images/products/esquineros.jpg',
    tag:  'Protección · Angular',
    name: 'Esquineros de Cartón',
    desc: 'Cantoneras para protección de aristas en pallets y cajas. Múltiples secciones y resistencia certificada.',
  },
  {
    id:   'film-stretch',
    img:  '/images/products/film-stretch.jpg',
    tag:  'Protección · Packaging',
    name: 'Film Stretch',
    desc: 'Film de estiramiento manual y automático para paletizado. Alta transparencia y resistencia al desgarro.',
  },
  {
    id:   'sulfito',
    img:  '/images/products/sulfito.jpg',
    tag:  'Custom · Marca propia',
    name: 'Impresión Personalizada',
    desc: 'Desarrollamos impresiones personalizables para cada cliente. Consultá con nuestro equipo técnico comercial.',
  },
]

type Product = { id: string; img: string; tag: string; name: string; desc: string; badge?: string }
function ProductCard({ p, tall }: { p: Product; tall: boolean }) {
  return (
    <div
      className={`prod-card relative overflow-hidden cursor-pointer group ${
        tall
          ? 'min-h-[220px] sm:min-h-[280px] lg:min-h-[340px]'
          : 'min-h-[240px] sm:min-h-[300px] lg:min-h-[360px]'
      }`}
      style={{ background: 'var(--navy-mid)' }}
    >
      <Image
        src={p.img}
        alt={p.name}
        fill
        loading="lazy"
        className="object-cover prod-img transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90"
      />

      {p.badge && (
        <div
          className="absolute top-4 left-4 px-2.5 py-1.5 text-white text-[10px] font-bold uppercase tracking-[.15em] z-10"
          style={{ background: 'var(--green)' }}
        >
          {p.badge}
        </div>
      )}

      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to top, rgba(6,15,30,0.82) 0%, rgba(6,15,30,0.35) 50%, rgba(6,15,30,0.05) 100%)' }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-8 z-20"
        style={{ transform: 'translateY(8px)', transition: 'transform .3s ease' }}
      >
        <div className="text-[10px] font-semibold uppercase tracking-[.18em] mb-1.5" style={{ color: 'var(--green)' }}>
          {p.tag}
        </div>
        <div
          className={`text-white uppercase leading-[1] mb-2 ${
            tall ? 'text-[24px] sm:text-[30px] lg:text-[36px]' : 'text-[20px] sm:text-[22px] lg:text-[24px]'
          }`}
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900, letterSpacing: '.02em' }}
        >
          {p.name}
        </div>
        <p className="prod-desc hidden sm:block text-[13px] leading-relaxed font-light" style={{ color: 'rgba(255,255,255,0.6)' }}>
          {p.desc}
        </p>
      </div>
    </div>
  )
}

export default function Productos() {
  const header = useReveal()

  return (
    <section id="productos" className="py-16 md:py-24" style={{ background: '#fff' }}>
      <div className="max-w-[1400px] mx-auto px-[4vw]">
        <div
          ref={header.ref}
          className="flex items-start md:items-end justify-between mb-10 md:mb-16 gap-6 flex-col md:flex-row"
          style={{
            opacity:    header.visible ? 1 : 0,
            transform:  header.visible ? 'none' : 'translateY(40px)',
            transition: 'all .7s ease',
          }}
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-8 h-0.5" style={{ background: 'var(--green)' }} />
              <span className="text-[12px] font-semibold uppercase tracking-[.2em]" style={{ color: 'var(--green)' }}>
                Catálogo Industrial
              </span>
            </div>
            <h2
              className="uppercase leading-[.95]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px,5vw,64px)', color: 'var(--navy)' }}
            >
              Nuestros Productos
            </h2>
            <p className="text-[17px] leading-7 font-light mt-4" style={{ color: '#4A5568' }}>
              Fabricación propia y soluciones a medida<br />para cada etapa del proceso de embalaje frutícola.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 text-[12px] font-bold uppercase tracking-[.14em] no-underline transition-all duration-200 hover:brightness-110"
              style={{ background: 'var(--green)', color: '#fff' }}
            >
              Solicitar Cotización →
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-[4vw]">
        <div className="flex flex-col gap-[2px]">
          {/* Fila superior — 2 items altos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2px]">
            {topProducts.map((p) => (
              <ProductCard key={p.id} p={p} tall />
            ))}
          </div>

          {/* Fila inferior — 3 items visibles (rollos oculto) */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-[2px]">
            {bottomProducts.filter(p => p.id !== 'rollos').map((p) => (
              <ProductCard key={p.id} p={p} tall={false} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="/productos"
            className="inline-flex items-center gap-2 px-8 py-4 text-[12px] font-bold uppercase tracking-[.14em] no-underline border-2 transition-all duration-200 hover:brightness-110"
            style={{ background: 'var(--navy)', color: '#fff' }}
          >
            Ver todos los productos →
          </a>
        </div>
      </div>
    </section>
  )
}
