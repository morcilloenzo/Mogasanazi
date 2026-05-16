const items = [
  {
    label: 'Calidad Garantizada',
    icon: (
      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    ),
  },
  {
    label: 'Abastecimiento de Temporada',
    icon: (
      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    label: 'Cobertura Patagónica',
    icon: (
      <>
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  },
  {
    label: 'Entrega en 48 horas',
    icon: (
      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    label: 'Atención Directa',
    icon: (
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
  },
]

export default function TrustBar() {
  return (
    <div
      className="px-[4vw] py-5 sm:py-7"
      style={{ background: 'var(--navy-deep)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-x-4 gap-y-3 sm:gap-5 sm:flex-wrap">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-[13px] font-medium uppercase tracking-[.06em] sm:tracking-[.08em] text-[rgba(255,255,255,0.5)] leading-tight">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ color: 'var(--green)' }}>
              {item.icon}
            </svg>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
