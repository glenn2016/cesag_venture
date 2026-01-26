import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Button } from '@components/common'

const CTASection = () => {
  return (
    <section className="py-24 bg-primary-light relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,217,145,0.2) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            Prêt à investir dans votre avenir ?
          </h2>
          <p className="text-lg text-text-secondary mb-10">
            Rejoignez CESAG Venture aujourd'hui et commencez votre parcours
            vers l'indépendance financière.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/adhesion"
              variant="gold"
              size="lg"
              icon={<Star className="w-5 h-5" />}
            >
              Obtenir ma carte membre
            </Button>
            <Button
              href="mailto:cesagventure@cesag.sn"
              variant="secondary"
              size="lg"
            >
              Nous contacter
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection