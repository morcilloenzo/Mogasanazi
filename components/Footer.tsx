const productLinks = [
  'Papel Sulfito / Seda',
  'Corrugado Kraft',
  'Rollos de Corrugado',
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
  { label: '+54 298 440-0010',     href: 'tel:+542984400010' },
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
          <div style={{ textAlign: 'left' }}>
            <img src="/images/logo.png" alt="Mogasa" style={{ height: 185, marginBottom: 12, display: 'inline-block' }} />
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
            General Roca - Rio Negro, Argentina.
          </div>
        </div>
      </div>
    </footer>
  )
}
