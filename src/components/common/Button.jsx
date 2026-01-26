import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from '@utils/helpers'

const variants = {
  primary: 'bg-gradient-to-r from-accent-green to-[#00b377] text-primary hover:shadow-[0_8px_30px_rgba(0,217,145,0.3)]',
  secondary: 'bg-primary-card text-text-primary border border-border hover:bg-primary-hover hover:border-accent-green',
  gold: 'bg-gradient-to-r from-accent-gold to-[#ffb700] text-primary hover:shadow-[0_8px_30px_rgba(255,215,0,0.3)]',
  ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-primary-card',
  outline: 'bg-transparent text-accent-green border border-accent-green hover:bg-accent-green-dim',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  full: 'w-full px-6 py-3.5 text-base',
}

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className,
  onClick,
  type = 'button',
  ...props
}, ref) => {
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold',
    'transition-all duration-300 cursor-pointer',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className
  )

  const content = (
    <>
      {loading ? (
        <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="w-5 h-5">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="w-5 h-5">{icon}</span>}
        </>
      )}
    </>
  )

  const motionProps = {
    whileHover: disabled ? {} : { y: -2 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.2 },
  }

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  if (to) {
    return (
      <Link ref={ref} to={to} className={baseStyles} {...props}>
        <motion.span className="flex items-center gap-2" {...motionProps}>
          {content}
        </motion.span>
      </Link>
    )
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={baseStyles}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  )
})

Button.displayName = 'Button'

export default Button