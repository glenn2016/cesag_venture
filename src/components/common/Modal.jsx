import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@utils/helpers'

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
  showCloseButton = true,
}) => {
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={cn(
              'relative w-full bg-primary-card border border-border rounded-3xl p-8 shadow-2xl',
              sizes[size]
            )}
          >
            {showCloseButton && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-primary-hover transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            {title && (
              <h2 className="text-2xl font-bold text-text-primary mb-4">{title}</h2>
            )}

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export const SuccessModal = ({ isOpen, onClose, title, message, icon = '🎉' }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="sm">
    <div className="text-center">
      <div className="text-6xl mb-6">{icon}</div>
      <h2 className="text-2xl font-bold text-text-primary mb-3">{title}</h2>
      <p className="text-text-secondary mb-8">{message}</p>
      <button
        onClick={onClose}
        className="w-full py-3 px-6 bg-gradient-to-r from-accent-green to-[#00b377] text-primary font-semibold rounded-xl hover:shadow-lg transition-all"
      >
        Fermer
      </button>
    </div>
  </Modal>
)

export default Modal