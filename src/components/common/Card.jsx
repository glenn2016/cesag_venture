import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@utils/helpers'

const Card = forwardRef(({
  children,
  className,
  hover = true,
  glass = false,
  padding = 'md',
  ...props
}, ref) => {
  const paddingSizes = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const baseStyles = cn(
    'rounded-2xl border transition-all duration-300',
    glass
      ? 'bg-primary-card/70 backdrop-blur-xl border-border-glass'
      : 'bg-primary-card border-border',
    hover && 'hover:-translate-y-2 hover:border-accent-green hover:shadow-[0_20px_40px_rgba(0,217,145,0.1)]',
    paddingSizes[padding],
    className
  )

  return (
    <motion.div
      ref={ref}
      className={baseStyles}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
})

Card.displayName = 'Card'

export default Card