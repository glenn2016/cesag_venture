import { cn } from '@utils/helpers'

const Loader = ({ size = 'md', className }) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  }

  return (
    <div
      className={cn(
        'rounded-full border-accent-green border-t-transparent animate-spin',
        sizes[size],
        className
      )}
    />
  )
}

export const PageLoader = () => (
  <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
    <div className="flex flex-col items-center gap-4">
      <Loader size="lg" />
      <p className="text-text-secondary text-sm">Chargement...</p>
    </div>
  </div>
)

export default Loader