export interface Product {
  id:       string
  tag:      string
  name:     string
  desc:     string
  badge?:   string
  variant?: 'default' | 'green'
  tall?:    boolean
}

export const products: Product[] = [
  {
    id:    'rollos-corrugados',
    tag:   'A medida',
    name:  'Rollos de Corrugado',
    desc:  'Bobinas de corrugado simple faz para interfoliado y protección. Ancho y diámetro personalizable según requerimiento operativo.',
    tall:  true,
  },
  {
    id:    'papel-corrugado',
    tag:   'Kraft · Violeta',
    name:  'Papel Corrugado',
    desc:  'Planchas de cartón corrugado de alta resistencia para embalaje. Ancho y diámetro personalizable.',
  },
  {
    id:    'papel-sulfito',
    tag:   'Papel · Embalaje',
    name:  'Papel Seda',
    desc:  'Papel de envoltura premium para fruticultura. Ideal para exportación.',
    badge: 'Premium',
  },
  {
    id:   'esquineros',
    tag:  'Protección · Packaging',
    name: 'Esquineros de Cartón',
    desc: 'Cantoneras para protección de aristas en pallets y cajas. Múltiples secciones y resistencia certificada.',
  },
  {
    id:      'soluciones',
    tag:     'Custom · Desarrollo',
    name:    'Impresión personalizada',
    desc:    'Desarrollamos impresiones personalizables para cada cliente. Consultá con nuestro equipo técnico comercial.',
    variant: 'green',
  },
]
