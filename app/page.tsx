import Navbar          from '@/components/Navbar'
import Hero            from '@/components/Hero'
import TrustBar        from '@/components/TrustBar'
import Diferenciales   from '@/components/Diferenciales'
import Productos       from '@/components/Productos'
import SobreNosotros   from '@/components/SobreNosotros'
import Capacidad       from '@/components/Capacidad'
import Logistica       from '@/components/Logistica'
import { Clientes, Testimonio } from '@/components/Clientes'
import Contacto        from '@/components/Contacto'
import Footer          from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Diferenciales />
        <Productos />
        <SobreNosotros />
        <Capacidad />
        <Logistica />
        <Clientes />
        <Testimonio />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
