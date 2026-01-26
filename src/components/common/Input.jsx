import { forwardRef } from 'react'
import { cn } from '@utils/helpers'

const inputStyles = cn(
  'w-full px-4 py-3.5 bg-primary-light border border-border rounded-xl',
  'text-text-primary placeholder:text-text-muted',
  'transition-all duration-300',
  'focus:outline-none focus:border-accent-green focus:shadow-[0_0_0_3px_rgba(0,217,145,0.2)]'
)

const Input = forwardRef(({ label, error, className, type = 'text', ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text-secondary mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={cn(
          inputStyles,
          error && 'border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.2)]',
          className
        )}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  )
})

Input.displayName = 'Input'

export const Textarea = forwardRef(({ label, error, className, rows = 4, ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text-secondary mb-2">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          inputStyles,
          'resize-y min-h-[100px]',
          error && 'border-red-500 focus:border-red-500',
          className
        )}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  )
})

Textarea.displayName = 'Textarea'

export const Select = forwardRef(({ label, error, options = [], placeholder = 'Sélectionnez...', className, ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text-secondary mb-2">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={cn(
          inputStyles,
          'cursor-pointer appearance-none',
          'bg-[url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23a0a0b0\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")]',
          'bg-no-repeat bg-[right_1rem_center] bg-[length:1.25rem]',
          error && 'border-red-500',
          className
        )}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  )
})

Select.displayName = 'Select'

export const Checkbox = forwardRef(({ label, error, className, ...props }, ref) => {
  return (
    <div className="w-full">
      <label className={cn('flex items-start gap-3 cursor-pointer', className)}>
        <input
          ref={ref}
          type="checkbox"
          className="w-5 h-5 mt-0.5 rounded border-border bg-primary-light accent-accent-green cursor-pointer"
          {...props}
        />
        <span className="text-sm text-text-secondary">{label}</span>
      </label>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  )
})

Checkbox.displayName = 'Checkbox'

export default Input