const productLinks = [
  'Papel Sulfito / Seda',
  'Corrugado Kraft',
  'Rollos Corrugados',
  'Film Stretch',
  'Esquineros',
  'Soluciones a Medida',
]
const empresaLinks = [
  { label: 'Quiénes Somos',        href: '#nosotros' },
  { label: 'Capacidad Industrial', href: '#capacidad' },
  { label: 'Logística y Cobertura',href: '#logistica' },
  { label: 'Clientes',             href: '#clientes' },
  { label: 'Contacto',             href: '#contacto' },
]
const contactLinks = [
  { label: 'ventas@mogasa.com.ar',    href: 'mailto:ventas@mogasa.com.ar' },
  { label: '+54 (0299) 000-0000',     href: 'tel:+5429900000000' },
  { label: 'Solicitar Cotización',    href: '#contacto' },
  { label: 'WhatsApp Comercial',      href: 'https://wa.me/549299000000' },
]

const colTitle: React.CSSProperties = {
  fontSize: 11, fontWeight: 600, letterSpacing: '.2em',
  textTransform: 'uppercase', color: '#22A652', marginBottom: 20,
}
const linkStyle: React.CSSProperties = {
  fontSize: 13, color: 'rgba(255,255,255,0.45)',
  textDecoration: 'none', display: 'block', marginBottom: 10, transition: 'color .2s',
}

export default function Footer() {
  return (
    <footer style={{ background: '#060f1e', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1400px] mx-auto px-[4vw] pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div
              className="mb-3"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 26, letterSpacing: '.15em', color: '#fff', textTransform: 'uppercase' }}
            >
              MOGASA
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: 280 }}>
              Soluciones industriales de embalaje para la fruticultura y la agroindustria patagónica.
              Alto Valle, Río Negro, Neuquén y Patagonia Argentina.
            </p>
          </div>

          {/* Productos */}
          <div>
            <div style={colTitle}>Productos</div>
            {productLinks.map(p => (
              <a key={p} href="#productos" style={linkStyle}>{p}</a>
            ))}
          </div>

          {/* Empresa */}
          <div>
            <div style={colTitle}>Empresa</div>
            {empresaLinks.map(l => (
              <a key={l.href} href={l.href} style={linkStyle}>{l.label}</a>
            ))}
          </div>

          {/* Contacto */}
          <div>
            <div style={colTitle}>Contacto</div>
            {contactLinks.map(l => (
              <a key={l.href} href={l.href} style={linkStyle} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex items-center justify-between flex-wrap gap-3 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} MOGASA. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-2" style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
            <div style={{ width: 6, height: 6, background: '#22A652', borderRadius: '50%' }} />
            Alto Valle · Río Negro · Neuquén · Patagonia Argentina
          </div>
        </div>
      </div>
    </footer>
  )
}
