import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { aboutFeatures } from '@data/avantages'

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Le club officiel du{' '}
              <span className="text-accent-green">CESAG</span>{' '}
              dédié à la finance
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              CESAG Venture est le club officiel du CESAG dédié à la finance,
              la bourse et l'investissement. Notre mission est de former, informer
              et accompagner nos membres dans le monde de la finance et des marchés
              africains et internationaux.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {aboutFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 bg-accent-green-dim rounded-md flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent-green" />
                  </div>
                  <span className="text-text-primary">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-primary-card/70 backdrop-blur-xl border border-border-glass rounded-3xl p-8 z-10">
              <h3 className="text-text-secondary text-lg mb-6">
                Performance du portefeuille virtuel
              </h3>

              {/* Chart Placeholder */}
              <div className="h-48 bg-gradient-to-b from-accent-green-dim to-transparent rounded-xl relative overflow-hidden">
                <div
                  className="absolute bottom-[20%] left-0 right-0 h-1 bg-accent-green"
                  style={{
                    clipPath: 'polygon(0 100%, 5% 80%, 15% 90%, 25% 60%, 35% 70%, 45% 40%, 55% 50%, 65% 20%, 75% 35%, 85% 10%, 95% 25%, 100% 5%, 100% 100%)',
                  }}
                />

                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between py-4 px-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="border-b border-border/30" />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-primary-card border border-border rounded-2xl p-5 shadow-xl z-20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold font-mono text-accent-green">+24%</div>
                <div className="text-xs text-text-muted">ROI moyen</div>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-primary-card border border-border rounded-2xl p-5 shadow-xl z-20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold font-mono text-accent-gold">BRVM</div>
                <div className="text-xs text-text-muted">Marché principal</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About