'use client'

import Image from 'next/image'

type Product = { id: string; img: string; tag: string; name: string; desc: string; badge?: string }

const categories: { title: string; products: Product[] }[] = [
  {
    title: 'Papel',
    products: [
      {
        id:    'corrugado',
        img:   '/images/products/corrugado.jpg',
        tag:   'Kraft · Violeta',
        name:  'Papel Corrugado',
        desc:  'Planchas de cartón corrugado de alta resistencia para embalaje. Ancho y diámetro personalizable.',
      },
      {
        id:    'seda',
        img:   '/images/products/seda.jpg',
        tag:   'Blanco · Verde · Violeta · Negro',
        name:  'Papel Seda',
        desc:  'Papel de envoltura premium para fruticultura. Ideal para exportación.',
      },
      {
        id:   'sulfito',
        img:  '/images/products/sulfito.jpg',
        tag:  'Custom · Marca propia',
        name: 'Impresión Personalizada',
        desc: 'Desarrollamos impresiones personalizables para cada cliente. Consultá con nuestro equipo técnico comercial.',
      },
    ],
  },
  {
    title: 'Protección',
    products: [
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
    ],
  },
]

function ProductCard({ p }: { p: Product }) {
  return (
    <div
      className="prod-card relative overflow-hidden cursor-pointer group min-h-[240px] sm:min-h-[300px] lg:min-h-[360px]"
      style={{ background: 'var(--navy-mid)' }}
    >
      <Image
        src={p.img}
        alt={p.name}
        fill
        loading="lazy"
        className="object-cover prod-img transition-transform duration-700"
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

      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
        <div className="text-[10px] font-semibold uppercase tracking-[.18em] mb-1.5" style={{ color: 'var(--green)' }}>
          {p.tag}
        </div>
        <div
          className="text-white uppercase leading-[1] mb-2 text-[22px] sm:text-[26px]"
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

function CategorySection({ title, products }: { title: string; products: Product[] }) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-4 mb-5">
        <span className="block w-6 h-0.5" style={{ background: 'var(--green)' }} />
        <h2
          className="uppercase"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(18px, 2.5vw, 26px)', color: 'var(--navy)' }}
        >
          {title}
        </h2>
        <span className="flex-1 h-px" style={{ background: '#e5e7eb' }} />
      </div>

      {products.length === 0 ? (
        <div
          className="flex items-center justify-center min-h-[160px] border-2 border-dashed"
          style={{ borderColor: '#e5e7eb', color: '#9CA3AF' }}
        >
          <p className="text-[13px] uppercase tracking-[.1em]">Próximamente</p>
        </div>
      ) : (
        <div className="grid gap-[2px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function ProductosPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-[120px] pb-16 md:pb-20"
        style={{ background: 'var(--navy)' }}
      >
        <div className="max-w-[1400px] mx-auto px-[4vw]">
<div className="flex items-center gap-2.5 mb-4">
            <span className="block w-8 h-0.5" style={{ background: 'var(--green)' }} />
            <span className="text-[12px] font-semibold uppercase tracking-[.2em]" style={{ color: 'var(--green)' }}>
              Catálogo Industrial
            </span>
          </div>
          <h1
            className="text-white uppercase leading-[.95] tracking-tight mb-5"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px, 6vw, 80px)' }}
          >
            Nuestros Productos
          </h1>
          <p className="text-[17px] leading-7 font-light max-w-[600px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Fabricación propia y soluciones a medida para cada etapa del proceso de embalaje frutícola.
          </p>
        </div>
      </section>

      {/* Categorías */}
      <section className="tex-overlay py-14 md:py-20" style={{ background: '#F7F8FA' }}>
        <div className="max-w-[1400px] mx-auto px-[4vw]">
          {categories.map((cat) => (
            <CategorySection key={cat.title} title={cat.title} products={cat.products} />
          ))}

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-6 pt-10"
            style={{ borderTop: '1px solid #e5e7eb' }}
          >
            <div>
              <div
                className="uppercase mb-1"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(20px, 3vw, 30px)', color: 'var(--navy)' }}
              >
                ¿Necesitás un producto a medida?
              </div>
              <p style={{ color: '#4A5568', fontSize: 15 }}>Nuestro equipo técnico comercial te asesora sin compromiso.</p>
            </div>
            <a
              href="/#contacto"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 text-[12px] font-bold uppercase tracking-[.14em] no-underline transition-all duration-200 hover:brightness-110"
              style={{ background: 'var(--green)', color: '#fff' }}
            >
              Solicitar Cotización →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
