import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '@components/common'

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,217,145,0.2) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(255,215,0,0.13) 0%, transparent 50%),
            linear-gradient(180deg, #0a0a0f 0%, #12121a 100%)
          `,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto text-center"
        >
          {/* 404 */}
          <div className="text-[150px] md:text-[200px] font-extrabold leading-none bg-gradient-to-r from-accent-green to-[#00b377] bg-clip-text text-transparent opacity-20">
            404
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl font-bold -mt-10 mb-4">Page non trouvée</h1>
          <p className="text-text-secondary text-lg mb-10">
            Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/" variant="primary" icon={<Home className="w-5 h-5" />}>
              Retour à l'accueil
            </Button>
            <Button
              onClick={() => window.history.back()}
              variant="secondary"
              icon={<ArrowLeft className="w-5 h-5" />}
            >
              Page précédente
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NotFound