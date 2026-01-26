import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin } from 'lucide-react'
import { Button, CategoryBadge, FeaturedBadge } from '@components/common'
import { formations, parcoursDebutant } from '@data/formations'
import { FORMATION_CATEGORIES, FORMATION_LEVELS } from '@utils/constants'
import { formatDate, cn } from '@utils/helpers'

const Formations = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredFormations =
    activeFilter === 'all'
      ? formations
      : formations.filter((f) => f.category === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,217,145,0.2) 0%, transparent 50%), #0a0a0f`,
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5"
            >
              Nos <span className="bg-gradient-to-r from-accent-green to-[#00b377] bg-clip-text text-transparent">Formations</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-secondary"
            >
              Un parcours clair et structuré pour bien commencer en finance et investissement.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-primary-light border-y border-border sticky top-[72px] z-40">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            {FORMATION_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all',
                  activeFilter === cat.id
                    ? 'bg-gradient-to-r from-accent-green to-[#00b377] text-primary'
                    : 'bg-primary-card border border-border text-text-secondary hover:border-accent-green hover:text-text-primary'
                )}
              >
                {cat.icon && <span className="mr-2">{cat.icon}</span>}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours Débutant */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-12 bg-accent-green-dim rounded-xl flex items-center justify-center text-2xl">
              🎯
            </div>
            <div>
              <h2 className="text-2xl font-bold">Parcours débutant recommandé</h2>
              <p className="text-text-secondary text-sm">Suivez ces 6 étapes pour bien démarrer</p>
            </div>
          </motion.div>

          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
            {parcoursDebutant.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-44 bg-primary-card border border-border rounded-2xl p-5 relative group hover:border-accent-green hover:-translate-y-1 transition-all"
              >
                {index < parcoursDebutant.length - 1 && (
                  <span className="absolute right-[-14px] top-1/2 -translate-y-1/2 text-accent-green text-xl z-10">
                    →
                  </span>
                )}
                <div className="w-8 h-8 bg-gradient-to-r from-accent-green to-[#00b377] rounded-lg flex items-center justify-center font-bold text-sm text-primary mb-4">
                  {step.step}
                </div>
                <h4 className="text-sm font-semibold">{step.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent-green uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-accent-green" />
              📚 Catalogue complet
              <span className="w-6 h-px bg-accent-green" />
            </span>
            <h2 className="text-3xl font-bold">Toutes nos formations</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFormations.map((formation, index) => (
              <FormationCard key={formation.id} formation={formation} index={index} />
            ))}
          </div>

          {filteredFormations.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">
                Aucune formation dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,217,145,0.2) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à vous former ?</h2>
            <p className="text-text-secondary text-lg mb-8">
              Rejoignez CESAG Venture et accédez à toutes nos formations exclusives.
            </p>
            <Button to="/adhesion" variant="gold" size="lg">
              Obtenir ma carte membre
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

const FormationCard = ({ formation, index }) => {
  const level = FORMATION_LEVELS[formation.level]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        'bg-primary-card border rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 relative',
        formation.featured
          ? 'border-accent-gold hover:shadow-[0_20px_40px_rgba(255,215,0,0.1)]'
          : 'border-border hover:border-accent-green hover:shadow-[0_20px_40px_rgba(0,217,145,0.1)]'
      )}
    >
      {formation.featured && <FeaturedBadge />}

      <div
        className={cn(
          'p-6 border-b border-border',
          formation.featured
            ? 'bg-gradient-to-br from-accent-gold-dim to-transparent'
            : 'bg-gradient-to-b from-primary-hover to-primary-card'
        )}
      >
        <CategoryBadge category={formation.category} />
        <h3 className="text-xl font-bold mt-4 mb-2">{formation.title}</h3>
        <p className="text-text-secondary text-sm">{formation.description}</p>
      </div>

      <div className="p-6 space-y-3">
        <InfoRow
          icon={<Calendar className="w-4 h-4" />}
          label="Date"
          value={`${formatDate(formation.date, { day: 'numeric', month: 'short' })} - ${formation.time}`}
        />
        <InfoRow icon={<Clock className="w-4 h-4" />} label="Durée" value={formation.duration} />
        <InfoRow icon={<MapPin className="w-4 h-4" />} label="Lieu" value={formation.location} />
      </div>

      <div className="px-6 py-4 bg-primary-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={cn('w-2 h-2 rounded-full', i < level.dots ? 'bg-accent-green' : 'bg-border')}
              />
            ))}
          </div>
          <span className="text-xs text-text-muted">{level.label}</span>
        </div>
        <Button to="/adhesion" variant="primary" size="sm">
          S'inscrire
        </Button>
      </div>
    </motion.div>
  )
}

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 text-sm">
    <div className="w-9 h-9 bg-primary-light rounded-lg flex items-center justify-center text-text-muted">
      {icon}
    </div>
    <div>
      <div className="text-text-muted text-xs">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  </div>
)

export default Formations