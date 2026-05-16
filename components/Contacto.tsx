'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

const productos = [
  'Papel Sulfito / Seda',
  'Papel Corrugado Kraft',
  'Rollos Corrugados',
  'Film Stretch',
  'Esquineros de Cartón',
  'Soluciones a Medida',
]

export default function Contacto() {
  const header = useReveal()
  const form   = useReveal()

  const [fields, setFields] = useState({
    empresa: '', nombre: '', email: '', telefono: '', producto: '', consulta: '',
  })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors(prev => ({ ...prev, [e.target.name]: false }))
  }

  const handleSubmit = () => {
    const required = ['empresa', 'nombre', 'email', 'telefono', 'consulta']
    const newErrors: Record<string, boolean> = {}
    required.forEach(k => { if (!fields[k as keyof typeof fields].trim()) newErrors[k] = true })
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }
    setSent(true)
  }

  const inputStyle = (name: string): React.CSSProperties => ({
    width: '100%',
    padding: '14px 16px',
    border: `1px solid ${errors[name] ? '#e24b4a' : '#D0D6E0'}`,
    background: '#fff',
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    color: 'var(--navy)',
    outline: 'none',
    transition: 'border-color .2s',
  })

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '.15em',
    textTransform: 'uppercase',
    color: '#8A95A8',
    marginBottom: 8,
  }

  return (
    <section id="contacto" className="py-16 md:py-24" style={{ background: '#F7F8FA' }}>
      <div className="max-w-[1400px] mx-auto px-[4vw]">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start">

          {/* Columna izquierda: header + info */}
          <div
            ref={form.ref}
            className="flex flex-col gap-8"
            style={{ opacity: form.visible ? 1 : 0, transform: form.visible ? 'none' : 'translateY(40px)', transition: 'all .7s ease' }}
          >
            {/* Header */}
            <div ref={header.ref}>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="block w-8 h-0.5" style={{ background: 'var(--green)' }} />
                <span className="text-[12px] font-semibold uppercase tracking-[.2em]" style={{ color: 'var(--green)' }}>Hablemos</span>
              </div>
              <h2 className="uppercase leading-[.95] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(36px,5vw,64px)', color: 'var(--navy)' }}>
                Solicitar<br />Cotización
              </h2>
              <p className="text-[15px] sm:text-[17px] leading-7 font-light max-w-lg" style={{ color: '#4A5568' }}>
                Completá el formulario y nos comunicaremos con vos en menos de 24 horas.
              </p>
            </div>

            {[
              {
                icon: (
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2a8 8 0 0 0-8 8c0 5.4 6.7 11.2 7.4 11.7a1 1 0 0 0 1.2 0C13.3 21.2 20 15.4 20 10a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                ),
                label: 'Ubicación', value: 'Alto Valle de Río Negro\nPatagonia Argentina',
              },
              {
                icon: (
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                ),
                label: 'Teléfono', value: '+54 (0299) 000-0000',
              },
              {
                icon: (
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.4 5.07A2 2 0 0 1 5 4.5h14a2 2 0 0 1 1.6.57L12 11.27 3.4 5.07ZM3 7.06v10.94a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.06l-8.42 6.06a1 1 0 0 1-1.16 0L3 7.06Z" />
                ),
                label: 'Email', value: 'ventas@mogasa.com.ar',
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ background: 'var(--navy)' }}>
                  <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--green)' }}>
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: '#8A95A8', marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--navy)', whiteSpace: 'pre-line' }}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* WhatsApp */}
            <a
              href="https://wa.me/549299000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 no-underline text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--green)', padding: '16px 28px', fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}
            >
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>

            {/* Horario */}
            <div style={{ padding: 24, background: 'var(--navy)', borderLeft: '3px solid var(--green)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, textTransform: 'uppercase', color: '#fff', marginBottom: 8 }}>
                Atención Comercial
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)' }}>
                Lunes a viernes de 8:00 a 18:00 hs.<br />
                Sábados de 8:00 a 13:00 hs.<br />
                Localidad: General Roca, Rio Negro
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="p-6 sm:p-8 md:p-12" style={{ background: '#fff', borderTop: '4px solid var(--navy)' }}>
            <div className="text-[20px] sm:text-[24px] mb-7 sm:mb-8" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: 'var(--navy)' }}>
              Formulario de Contacto
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:mb-5">
              <div>
                <label style={labelStyle}>Empresa</label>
                <input name="empresa" value={fields.empresa} onChange={handleChange} style={inputStyle('empresa')} placeholder="Nombre de su empresa" />
              </div>
              <div>
                <label style={labelStyle}>Nombre</label>
                <input name="nombre" value={fields.nombre} onChange={handleChange} style={inputStyle('nombre')} placeholder="Su nombre completo" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:mb-5">
              <div>
                <label style={labelStyle}>Email</label>
                <input type="email" name="email" value={fields.email} onChange={handleChange} style={inputStyle('email')} placeholder="email@empresa.com" />
              </div>
              <div>
                <label style={labelStyle}>Teléfono</label>
                <input name="telefono" value={fields.telefono} onChange={handleChange} style={inputStyle('telefono')} placeholder="+54 299 000-0000" />
              </div>
            </div>

            <div className="mb-5">
              <label style={labelStyle}>Producto de interés</label>
              <select name="producto" value={fields.producto} onChange={handleChange} style={inputStyle('producto')}>
                <option value="">Seleccionar producto...</option>
                {productos.map(p => <option key={p}>{p}</option>)}
              </select>
            </div>

            <div className="mb-6">
              <label style={labelStyle}>Consulta</label>
              <textarea
                name="consulta" value={fields.consulta} onChange={handleChange}
                style={{ ...inputStyle('consulta'), height: 120, resize: 'vertical' }}
                placeholder="Describa su necesidad, volúmenes aproximados y zona de entrega..."
              />
            </div>

            {!sent ? (
              <button
                onClick={handleSubmit}
                className="w-full text-white transition-colors hover:opacity-90"
                style={{ background: 'var(--navy)', padding: '16px 36px', fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', border: 'none', cursor: 'pointer' }}
              >
                Enviar Solicitud
              </button>
            ) : (
              <div style={{ padding: 16, background: '#e8f8ef', borderLeft: '3px solid var(--green)' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--green-dark)' }}>✓ Mensaje enviado correctamente</div>
                <div style={{ fontSize: 13, color: '#4A5568', marginTop: 4 }}>Un comercial se pondrá en contacto en menos de 24 horas.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
