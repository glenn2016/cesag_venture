import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import CryptoTicker from '@components/home/CryptoTicker'

const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Crypto Ticker - Fixed at top */}
      {location.pathname === '/' && (
        <div className="fixed top-0 left-0 right-0 z-[60]">
          <CryptoTicker />
        </div>
      )}

      {/* Navigation - Below ticker */}
      <div className={location.pathname === '/' ? 'pt-[44px]' : ''}>
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout