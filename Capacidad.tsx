'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'
import { capacidadStats } from '@/data/stats'

export default function Capacidad() {
  const header = useReveal()
  const stats  = useReveal()
  const imgs   = useReveal()

  return (
    <section id="capacidad" className="tex-overlay py-24" style={{ background: '#F7F8FA' }}>
      <div className="max-w-[1400px] mx-auto px-[4vw]">

        {/* Header */}
        <div
          ref={header.ref}
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(40px)', transition: 'all .7s ease' }}
        >
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-8 h-0.5" style={{ background: 'var(--green)' }} />
            <span className="text-[12px] font-semibold uppercase tracking-[.2em]" style={{ color: 'var(--green)' }}>Infraestructura</span>
          </div>
          <h2
            className="uppercase leading-[.95] mb-4"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px,5vw,64px)', color: 'var(--navy)' }}
          >
            Capacidad<br />Operativa
          </h2>
          <p className="text-[17px] leading-7 font-light max-w-lg" style={{ color: '#4A5568' }}>
            Estructura industrial diseñada para responder cuando más se necesita: en plena temporada, sin fallar.
          </p>
        </div>

        {/* Grid stats + imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-16 items-center">

          {/* Stats */}
          <div
            ref={stats.ref}
            className="grid grid-cols-2 gap-[1px]"
            style={{
              opacity: stats.visible ? 1 : 0,
              transform: stats.visible ? 'none' : 'translateY(40px)',
              transition: 'all .7s ease',
              background: '#D0D6E0',
              border: '1px solid #D0D6E0',
            }}
          >
            {capacidadStats.map((s) => (
              <div key={s.label} className="p-8" style={{ background: '#fff' }}>
                <div
                  className="leading-none mb-1.5"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px,4vw,64px)', color: 'var(--navy)' }}
                >
                  <span style={{ color: 'var(--green)' }}>{s.value.replace(/[+h]/g, '')}</span>
                  {s.value.includes('+') ? '+' : s.value.includes('h') ? 'h' : ''}
                </div>
                <div className="text-[12px] font-semibold uppercase tracking-[.15em] mb-2" style={{ color: '#8A95A8' }}>
                  {s.label}
                </div>
                {s.desc && <p className="text-[13px] leading-relaxed" style={{ color: '#4A5568' }}>{s.desc}</p>}
              </div>
            ))}
          </div>

          {/* Imágenes */}
          <div
            ref={imgs.ref}
            className="grid grid-cols-2 gap-[2px]"
            style={{ opacity: imgs.visible ? 1 : 0, transform: imgs.visible ? 'none' : 'translateY(40px)', transition: 'all .7s ease .15s' }}
          >
             <div className="relative" style={{ aspectRatio: '16/9' }}>
                <Image src="/images/1.png" alt="Camión MOGASA" fill className="object-cover" />
              </div>
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <Image src="/images/3.png" alt="Depósito MOGASA" fill className="object-cover" />
              </div>
              <div className="relative" style={{ gridRow: 'span 2', aspectRatio: '3/4' }}>
                <Image src="/images/2.png" alt="Autoelevador MOGASA" fill className="object-cover" />
              </div>
            {/*
              Reemplazá estos divs con fotos reales:

              import Image from 'next/image'

              <div className="relative" style={{ gridRow: 'span 2', aspectRatio: '3/4' }}>
                <Image src="/images/autoelevador.jpg" alt="Autoelevador MOGASA" fill className="object-cover" />
              </div>
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <Image src="/images/deposito.jpg" alt="Depósito MOGASA" fill className="object-cover" />
              </div>
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <Image src="/images/camion.jpg" alt="Camión MOGASA" fill className="object-cover" />
              </div>
            */}
          </div>
        </div>
      </div>
    </section>
  )
}

function CapImg({ type, tall }: { type: string; tall?: boolean }) {
  const style: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    background: '#0d2035',
    gridRow: tall ? 'span 2' : undefined,
    aspectRatio: tall ? '3/4' : '16/9',
  }
  return (
    <div style={style}>
      <svg className="absolute inset-0 w-full h-full" viewBox={tall ? '0 0 200 267' : '0 0 200 113'} preserveAspectRatio="xMidYMid slice">
        <rect width="200" height={tall ? '267' : '113'} fill="#0d2035" />
        {type === 'forklift' && (
          <>
            <rect x="20" y="80" width="100" height="60" fill="#122845" rx="2" stroke="#1d3d5c" strokeWidth="1" />
            <rect x="115" y="60" width="12" height="85" fill="#122845" stroke="#1d3d5c" strokeWidth="1" />
            <line x1="127" y1="65" x2="165" y2="65" stroke="#1d4060" strokeWidth="3" />
            <line x1="127" y1="80" x2="165" y2="80" stroke="#1d4060" strokeWidth="3" />
            <rect x="130" y="35" width="40" height="30" fill="#22A652" rx="1" opacity=".7" />
            <circle cx="45" cy="145" r="16" fill="#0a1b2a" stroke="#1d3d5c" strokeWidth="2" />
            <circle cx="45" cy="145" r="8" fill="#122845" />
            <circle cx="100" cy="145" r="16" fill="#0a1b2a" stroke="#1d3d5c" strokeWidth="2" />
            <circle cx="100" cy="145" r="8" fill="#122845" />
            <rect x="0" y="161" width="200" height="106" fill="#0a1a28" />
            <line x1="0" y1="161" x2="200" y2="161" stroke="#22A652" strokeWidth=".5" opacity=".4" />
          </>
        )}
        {type === 'warehouse' && (
          <>
            <rect x="10" y="10" width="8" height="100" fill="#122845" />
            <rect x="90" y="10" width="8" height="100" fill="#122845" />
            <rect x="10" y="30" width="88" height="4" fill="#1d3d5c" />
            <rect x="10" y="60" width="88" height="4" fill="#1d3d5c" />
            <rect x="10" y="90" width="88" height="4" fill="#1d3d5c" />
            {[15, 34, 64].map((y, ri) => [14, 34, 54, 74].map((x, ci) => (
              <rect key={`${ri}-${ci}`} x={x} y={y} width="18" height={ri === 1 ? 14 : 15} fill="#22A652" rx="1" opacity={0.4 + (ci % 3) * 0.1} />
            )))}
            <rect x="105" y="10" width="8" height="100" fill="#122845" />
            <rect x="180" y="10" width="8" height="100" fill="#122845" />
          </>
        )}
        {type === 'truck' && (
          <>
            <rect x="80" y="30" width="110" height="70" fill="#122845" rx="2" stroke="#1d3d5c" strokeWidth="1" />
            <rect x="10" y="50" width="75" height="50" fill="#0d2035" rx="2" stroke="#1d3d5c" strokeWidth="1" />
            <rect x="12" y="55" width="35" height="25" fill="#1a4d6e" rx="1" opacity=".6" />
            <circle cx="25"  cy="105" r="10" fill="#0a1522" stroke="#1d3d5c" strokeWidth="2" />
            <circle cx="155" cy="105" r="10" fill="#0a1522" stroke="#1d3d5c" strokeWidth="2" />
            <circle cx="178" cy="105" r="10" fill="#0a1522" stroke="#1d3d5c" strokeWidth="2" />
            {[85, 109, 133, 157].map((x, i) => (
              <rect key={i} x={x} y="35" width="22" height="18" fill="#22A652" rx="1" opacity={0.4 + i * 0.05} />
            ))}
            <line x1="0" y1="100" x2="200" y2="100" stroke="#22A652" strokeWidth=".5" opacity=".3" />
          </>
        )}
      </svg>
    </div>
  )
}
