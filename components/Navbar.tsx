'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '#productos',  label: 'Productos' },
  { href: '#nosotros',   label: 'Nosotros' },
  { href: '#capacidad',  label: 'Capacidad' },
  { href: '#logistica',  label: 'Logística' },
  { href: '#contacto',   label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }
  const openMobile = () => {
    setMobileOpen(true)
    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-[999] flex flex-col items-center justify-center gap-8
          transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'var(--navy-deep)' }}
      >
        <button
          onClick={closeMobile}
          className="absolute top-6 right-6 flex flex-col gap-1.5 p-2"
          aria-label="Cerrar menú"
        >
          <span className="block w-6 h-0.5 bg-white rotate-45 translate-y-2" />
          <span className="block w-6 h-0.5 bg-white -rotate-45" />
        </button>
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={closeMobile}
            className="font-display text-4xl font-black uppercase tracking-wider text-white hover:text-green transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between
          px-[4vw] h-[72px] transition-all duration-300
          ${scrolled ? 'bg-[rgba(6,15,30,0.92)] backdrop-blur-md' : 'bg-transparent'}`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center no-underline">
          <img src="/images/logo.png" alt="Mogasa" style={{ height: 155 }} />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[rgba(255,255,255,0.75)] hover:text-white text-[13px] font-medium
                  tracking-[.08em] uppercase no-underline transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center px-[22px] py-[10px]
            text-white text-[14px] font-bold uppercase tracking-[.1em] no-underline
            transition-colors hover:opacity-90"
          style={{ background: 'var(--green)', fontFamily: 'var(--font-display)' }}
        >
          Solicitar Cotización
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
          onClick={openMobile}
          aria-label="Abrir menú"
        >
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </nav>
    </>
  )
}
