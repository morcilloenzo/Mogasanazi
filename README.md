# MOGASA — Web Corporativa

Web corporativa industrial de nivel premium para MOGASA, empresa de embalaje para la fruticultura patagónica.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Fuentes:** Barlow Condensed + Barlow (Google Fonts)

## Instalación

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura

```
mogasa/
├── app/
│   ├── globals.css       ← Estilos base, variables CSS, animaciones
│   ├── layout.tsx        ← Root layout + metadata SEO
│   └── page.tsx          ← Página principal (ensambla componentes)
├── components/
│   ├── Navbar.tsx         ← Navegación fija con scroll effect + mobile
│   ├── Hero.tsx           ← Hero cinematográfico con estadísticas
│   ├── TrustBar.tsx       ← Barra de confianza con 5 indicadores
│   ├── Diferenciales.tsx  ← 4 pilares diferenciadores
│   ├── Productos.tsx      ← Grid de productos con hover elegante
│   ├── SobreNosotros.tsx  ← Editorial 2 columnas
│   ├── Capacidad.tsx      ← Estadísticas + imágenes industriales
│   ├── Logistica.tsx      ← Mapa patagónico + zonas de cobertura
│   ├── Clientes.tsx       ← Tipos de clientes + testimonio
│   ├── Contacto.tsx       ← Formulario premium + datos de contacto
│   └── Footer.tsx         ← Footer oscuro corporativo
├── data/
│   ├── products.ts        ← Datos de productos (editá acá para agregar/cambiar)
│   └── stats.ts           ← Estadísticas de la empresa
├── hooks/
│   └── useReveal.ts       ← Hook de animación scroll reveal
└── public/
    └── images/            ← Poné tus fotos acá
```

## Cómo agregar fotos reales

Cada componente tiene comentarios indicando exactamente dónde reemplazar los SVGs con fotos reales usando `next/image`.

### Ejemplo en Hero.tsx:
```tsx
import Image from 'next/image'

// Reemplazar el div de fondo por:
<Image
  src="/images/hero-bg.jpg"
  alt="Planta industrial MOGASA"
  fill
  priority
  className="object-cover brightness-[0.45]"
/>
```

### Fotos recomendadas:
| Archivo                        | Uso                        |
|-------------------------------|----------------------------|
| `public/images/hero-bg.jpg`   | Fondo del hero             |
| `public/images/planta.jpg`    | Sección Sobre Nosotros     |
| `public/images/autoelevador.jpg` | Sección Capacidad       |
| `public/images/deposito.jpg`  | Sección Capacidad          |
| `public/images/camion.jpg`    | Sección Capacidad          |
| `public/images/productos/rollos.jpg` | Card de producto   |

## Cómo cambiar textos y datos

- **Productos:** editá `data/products.ts`
- **Estadísticas:** editá `data/stats.ts`
- **Zonas logísticas:** editá el array `zonas` en `components/Logistica.tsx`
- **Datos de contacto:** editá `components/Contacto.tsx` y `components/Footer.tsx`
- **WhatsApp:** buscá `wa.me/549299000000` y reemplazá con el número real

## Deploy en Vercel

```bash
# Instalá Vercel CLI (una sola vez)
npm i -g vercel

# Deploy
vercel
```

O conectá el repositorio de GitHub directamente en [vercel.com](https://vercel.com) — lo detecta automáticamente.

## Paleta de colores

| Variable          | Valor     | Uso                    |
|-------------------|-----------|------------------------|
| `--navy`          | `#0B1F3A` | Fondo principal oscuro |
| `--navy-deep`     | `#060f1e` | Fondo más oscuro       |
| `--navy-mid`      | `#122845` | Superficies navy       |
| `--green`         | `#22A652` | Acento principal       |
| `--green-dark`    | `#1a7d3e` | Verde oscuro hover     |
| `--green-light`   | `#2fc465` | Verde claro            |
