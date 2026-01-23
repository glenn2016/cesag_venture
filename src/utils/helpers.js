import { clsx } from 'clsx'

export const cn = (...inputs) => clsx(inputs)

export const formatCurrency = (value, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(value)
}

export const formatXOF = (value) => {
  return new Intl.NumberFormat('fr-FR').format(value) + ' XOF'
}

export const formatPercent = (value) => {
  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(2)}%`
}

export const formatDate = (date, options = {}) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...options,
  })
}

export const generateMemberId = () => {
  return `CV-${Math.floor(1000 + Math.random() * 9000)}`
}