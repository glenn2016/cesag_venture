import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@components/common'
import { NAV_LINKS } from '@utils/constants'
import { cn } from '@utils/helpers'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
  }, [isMobileMenuOpen])

  return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed left-0 right-0 z-50 transition-all duration-300',
          location.pathname === '/' ? 'top-[44px]' : 'top-0',
          isScrolled || location.pathname !== '/'
            ? 'bg-primary-card/80 backdrop-blur-xl border-b border-border-glass'
            : 'bg-transparent'
        )}
      >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-accent-green to-[#00b377] rounded-xl flex items-center justify-center">
              <span className="font-extrabold text-primary text-lg">CV</span>
            </div>
            <span className="text-xl font-bold text-text-primary">
              CESAG <span className="text-accent-green">Venture</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {NAV_LINKS.slice(0, -1).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'px-5 py-2.5 rounded-lg font-medium text-[15px] transition-all duration-300',
                    isActive
                      ? 'text-accent-green'
                      : 'text-text-secondary hover:text-text-primary hover:bg-primary-card'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button to="/adhesion" variant="primary" size="md" className="ml-2">
              Rejoindre le Club
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-primary"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-light border-t border-border overflow-hidden"
          >
            <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col gap-2">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        'block px-4 py-3 rounded-xl font-medium text-center transition-all',
                        isActive
                          ? 'text-accent-green bg-accent-green-dim'
                          : 'text-text-secondary hover:text-text-primary hover:bg-primary-card'
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
                className="mt-4"
              >
                <Button to="/adhesion" variant="primary" size="full">
                  Rejoindre le Club
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar