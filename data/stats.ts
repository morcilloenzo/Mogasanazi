export interface Stat {
  value: string
  label: string
  desc?: string
}

export const heroStats: Stat[] = [
  { value: '+30',   label: 'Años de operación' },
  { value: 'Diaria', label: 'Frecuencia de entrega' },
  { value: '28',     label: 'Localidades cubiertas' },
  { value: '950.000',label: 'Kilos producidos anuales' },
]

export const capacidadStats: Stat[] = [
  { value: '+30',      label: 'Años de operación' },
  { value: 'Diaria',    label: 'Frecuencia de entrega' },
  { value: '28',        label: 'Localidades cubiertas' },
  { value: '6300m²',   label: 'Tamaño de planta' },
]
