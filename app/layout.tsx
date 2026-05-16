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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
