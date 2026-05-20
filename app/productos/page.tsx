import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductosPage from '@/components/ProductosPage'

export const metadata = {
  title: 'Productos — MOGASA',
  description: 'Catálogo completo de productos de embalaje MOGASA: papel corrugado, papel seda, rollos, esquineros, film stretch e impresión personalizada.',
}

export default function Productos() {
  return (
    <>
      <Navbar />
      <main>
        <ProductosPage />
      </main>
      <Footer />
    </>
  )
}
