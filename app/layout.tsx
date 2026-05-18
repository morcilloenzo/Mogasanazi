import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MOGASA — Soluciones de Embalaje Industrial para la Fruticultura Patagónica',
  description:
    'MOGASA: fabricación de cartón corrugado, papel sulfito y embalaje industrial para la fruticultura del Alto Valle y la Patagonia Argentina. Producción, logística y abastecimiento confiable.',
  keywords:
    'embalaje industrial, cartón corrugado, papel sulfito, fruticultura, Alto Valle, Río Negro, Neuquén, Patagonia, packaging',
  openGraph: {
    title: 'MOGASA — Embalaje Industrial Patagónico',
    description: 'Producción, logística y abastecimiento confiable para operaciones industriales que no pueden detenerse.',
    locale: 'es_AR',
    type: 'website',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MOGASA",
  "description": "Fabricación de papel corrugado, papel seda e insumos para embalaje de fruta.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "España 650",
    "addressLocality": "General Roca",
    "addressRegion": "Río Negro",
    "addressCountry": "AR"
  },
  "telephone": "+542984400010",
  "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-13:00"],
  "url": "https://glowing-gingersnap-7c20fe.netlify.app"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
