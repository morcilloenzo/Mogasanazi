'use client'

import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import { useReveal } from '@/hooks/useReveal'

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

const localidadesCoords: Array<[number, number]> = [
  [-38.95219070907907, -68.05806404089832],
  [-38.95057600757575, -67.9280848472515],
  [-38.93905619203323, -67.99629939386126],
  [-38.83089360188724, -68.06640564409645],
  [-38.72496561741019, -68.15938141256794],
  [-38.677805593958006, -68.2158366817625],
  [-38.62978363185078, -68.30630641907986],
  [-38.97590624126311, -67.83063360714549],
  [-39.05356848916145, -67.39649610516348],
  [-39.064328384619905, -67.3055872000645],
  [-39.073240993529474, -67.23093829406452],
  [-39.07615427351669, -67.16144970091669],
  [-39.10337051429652, -67.0949673797015],
  [-39.11539567267944, -66.94546965398632],
  [-39.088273251235044, -66.51954566131249],
  [-39.185656807517134, -65.96073749666748],
  [-39.16377071843056, -66.14144819982737],
  [-39.28892065222101, -65.66095515979713],
  [-39.31056840358443, -65.75570001660847],
  [-39.42135190384863, -65.70355522447235],
  [-38.98900341349049, -64.09278977728722],
]

export default function Logistica() {
  const header = useReveal()
  const body   = useReveal()
  const [zonaActiva, setZonaActiva] = useState<string | null>(null)

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
            Cerca de quienes<br />nos necesitan
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
            {/* Botones de zona */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {zonas.map((z) => (
                <button
                  key={z.id}
                  onClick={() => setZonaActiva(zonaActiva === z.id ? null : z.id)}
                  className="flex items-center gap-2.5 px-4 py-3 text-left transition-all duration-200"
                  style={{
                    background:  zonaActiva === z.id ? 'rgba(34,166,82,0.15)' : 'rgba(255,255,255,0.04)',
                    border:      `1px solid ${zonaActiva === z.id ? '#22A652' : 'rgba(255,255,255,0.1)'}`,
                    borderRadius: 2,
                    cursor: 'pointer',
                  }}
                >
                  <span
                    className="flex-shrink-0 rounded-full"
                    style={{
                      width:      10,
                      height:     10,
                      background: zonaActiva === z.id ? '#22A652' : 'rgba(255,255,255,0.25)',
                      transition: 'background .2s',
                      boxShadow:  zonaActiva === z.id ? '0 0 0 3px rgba(34,166,82,0.25)' : 'none',
                    }}
                  />
                  <span
                    className="text-[13px] font-semibold uppercase tracking-[.06em]"
                    style={{ color: zonaActiva === z.id ? '#fff' : 'rgba(255,255,255,0.6)' }}
                  >
                    {z.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Descripción zona activa */}
            {zonaActiva && (
              <div
                className="mb-6 px-4 py-3 text-[13px] leading-relaxed"
                style={{
                  background:  'rgba(34,166,82,0.08)',
                  borderLeft:  '3px solid var(--green)',
                  color:       'rgba(255,255,255,0.7)',
                }}
              >
                {zonasDescripciones[zonaActiva]}
              </div>
            )}

            {/* Mapa real interactivo */}
            <div
              className="mb-6"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border:     '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <MapaReal zonaActiva={zonaActiva} />
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
            className="flex flex-col justify-between gap-6 p-6 sm:p-8"
            style={{ background: 'var(--green)' }}
          >
            <div>
              <div className="mb-5">
                <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="2" fill="rgba(255,255,255,0.15)" />
                  <path d="M12 20h16M20 12l8 8-8 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3
                className="uppercase leading-[1.05] mb-4 text-white"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize:   'clamp(24px,2.5vw,32px)',
                }}
              >
                Respuesta rápida en temporada
              </h3>
              <p className="text-[14px] leading-7 mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Logística eficiente para cumplir con los tiempos de la producción. Stock permanente, entrega garantizada.
              </p>

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
    </section>
  )
}

/* Mapa real interactivo */
function MapaReal({
  zonaActiva,
}: {
  zonaActiva: string | null
}) {
  const mapRef = useRef<HTMLDivElement | null>(null)
  const leafletMap = useRef<L.Map | null>(null)

  const mogasaPosition: [number, number] = [-39.03758003410648, -67.57937189958662]

  const mapConfig: Record<string, { title: string; description: string; center: [number, number]; zoom: number }> = {
    'alto-valle': {
      title: 'Alto Valle del Río Negro',
      description: 'Cobertura central en el Alto Valle, con logística regional y rutas directas.',
      center: [-39.0858, -67.7936],
      zoom: 11,
    },
    'neuquen': {
      title: 'Provincia de Neuquén',
      description: 'Presencia directa en Neuquén con entregas regulares y conexión con la región.',
      center: [-38.9513, -68.0591],
      zoom: 10,
    },
    'valle-medio': {
      title: 'Valle Medio',
      description: 'Atención programada en Valle Medio para productores y empaques en temporada.',
      center: [-38.7725, -68.0924],
      zoom: 11,
    },
    'patagonia-norte': {
      title: 'Norte Patagónico',
      description: 'Distribución hacia el norte patagónico para clientes industriales y agroindustriales.',
      center: [-39.3747, -68.3282],
      zoom: 8,
    },
  }

  const active = zonaActiva && mapConfig[zonaActiva] ? mapConfig[zonaActiva] : {
    title: 'Cobertura regional',
    description: 'Mapa real de nuestra zona de operación en Alto Valle, Valle Medio, Neuquén y Patagonia Norte.',
    center: mogasaPosition,
    zoom: 10,
  }

  useEffect(() => {
    if (!mapRef.current) return

    if (!leafletMap.current) {
      const bounds = L.latLngBounds([...localidadesCoords, mogasaPosition])

      const map = L.map(mapRef.current, {
        center: active.center,
        zoom: active.zoom,
        minZoom: 8,
        maxZoom: 11,
        maxBounds: bounds.pad(0.1),
        maxBoundsViscosity: 0.7,
        scrollWheelZoom: true,
        attributionControl: false,
      })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map)

      const mogasaIcon = L.divIcon({
        className: 'mogasa-marker-icon',
        html: '<div class="mogasa-marker"><span>M</span></div>',
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      })

      L.marker(mogasaPosition, { icon: mogasaIcon }).addTo(map)

      localidadesCoords.forEach((coords) => {
        L.circleMarker(coords, {
          radius: 6,
          color: '#3b82f6',
          fillColor: '#3b82f6',
          fillOpacity: 0.9,
          weight: 1,
        }).addTo(map)
      })

      map.on('zoomend', () => {
        map.setView(mogasaPosition, map.getZoom(), { animate: true })
      })

      map.whenReady(() => {
        map.invalidateSize()
        const bounds = L.latLngBounds([mogasaPosition, ...localidadesCoords])
        map.fitBounds(bounds, { animate: false, padding: [20, 20] })
      })

      leafletMap.current = map
    } else {
      leafletMap.current.setView(active.center, active.zoom, { animate: true })
    }

    return () => {
      // cleanup handled by Leaflet map lifecycle
    }
  }, [active.center, active.zoom])

  return (
    <div className="relative w-full" style={{ minHeight: 280 }}>
      <div ref={mapRef} className="h-[320px] sm:h-[360px]" />
      <div className="mt-4 px-4 pb-4">
        <div className="text-[12px] uppercase tracking-[.2em] font-semibold" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {active.title}
        </div>
        <div className="mt-2 text-[14px] leading-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
          {active.description}
        </div>
      </div>
    </div>
  )
}
