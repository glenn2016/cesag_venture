import { cn } from '@utils/helpers'

const Badge = ({ children, variant = 'default', icon, className }) => {
  const variants = {
    default: 'bg-primary-card text-text-secondary border-border',
    green: 'bg-accent-green-dim text-accent-green border-transparent',
    gold: 'bg-accent-gold-dim text-accent-gold border-transparent',
    blue: 'bg-accent-blue-dim text-accent-blue border-transparent',
    purple: 'bg-accent-purple-dim text-accent-purple border-transparent',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 font-medium text-sm rounded-full border',
        variants[variant],
        className
      )}
    >
      {icon && <span>{icon}</span>}
      {children}
    </span>
  )
}

export const DotBadge = ({ children, className }) => (
  <span
    className={cn(
      'inline-flex items-center gap-2 px-4 py-2 rounded-full',
      'bg-primary-card/70 backdrop-blur-sm border border-border-glass',
      'text-sm text-text-secondary',
      className
    )}
  >
    <span className="w-2 h-2 rounded-full bg-accent-green animate-[pulse-dot_2s_ease-in-out_infinite]" />
    {children}
  </span>
)

export const CategoryBadge = ({ category }) => {
  const styles = {
    finance: { bg: 'bg-accent-green-dim', text: 'text-accent-green', icon: '💰' },
    bourse: { bg: 'bg-accent-blue-dim', text: 'text-accent-blue', icon: '📈' },
    crypto: { bg: 'bg-accent-purple-dim', text: 'text-accent-purple', icon: '🔗' },
    trading: { bg: 'bg-accent-gold-dim', text: 'text-accent-gold', icon: '📊' },
  }

  const style = styles[category] || styles.finance

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg',
        'text-xs font-semibold uppercase tracking-wide',
        style.bg,
        style.text
      )}
    >
      <span>{style.icon}</span>
      {category}
    </span>
  )
}

export const FeaturedBadge = ({ className }) => (
  <span
    className={cn(
      'absolute top-4 right-4 px-3 py-1.5 rounded-full',
      'bg-gradient-to-r from-accent-gold to-[#ffb700] text-primary',
      'text-xs font-bold uppercase tracking-wide',
      className
    )}
  >
    ⭐ Populaire
  </span>
)

export default Badge