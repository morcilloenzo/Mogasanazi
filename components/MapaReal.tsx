'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'

const mogasaPosition: [number, number] = [-39.03758003410648, -67.57937189958662]

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

export default function MapaReal({
  zonaActiva,
  revealed,
}: {
  zonaActiva: string | null
  revealed:   boolean
}) {
  const mapRef     = useRef<HTMLDivElement | null>(null)
  const leafletMap = useRef<L.Map | null>(null)

  const active = zonaActiva && mapConfig[zonaActiva]
    ? mapConfig[zonaActiva]
    : {
        title: 'Cobertura regional',
        description: 'Mapa real de nuestra zona de operación en Alto Valle, Valle Medio, Neuquén y Patagonia Norte.',
        center: mogasaPosition,
        zoom: 10,
      }

  useEffect(() => {
    if (!mapRef.current) return

    if (!leafletMap.current) {
      const map = L.map(mapRef.current, {
        center: active.center,
        zoom: active.zoom,
        minZoom: 8,
        maxZoom: 13,
        scrollWheelZoom: false,
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

      const allPoints = L.latLngBounds([mogasaPosition, ...localidadesCoords])
      map.fitBounds(allPoints, { animate: false, padding: [20, 20] })

      leafletMap.current = map
    } else {
      leafletMap.current.setView(active.center, active.zoom, { animate: true })
    }

    return () => {}
  }, [active.center, active.zoom])

  // Recalcula tamaño tras la animación de reveal (~800ms) para que las tiles aparezcan bien
  useEffect(() => {
    if (!revealed) return
    const t = setTimeout(() => {
      leafletMap.current?.invalidateSize()
    }, 850)
    return () => clearTimeout(t)
  }, [revealed])

  return (
    <div className="relative w-full">
      <div ref={mapRef} style={{ height: 320 }} />
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
