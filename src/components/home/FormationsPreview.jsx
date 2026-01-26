import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Button, CategoryBadge, FeaturedBadge } from '@components/common'
import { formations } from '@data/formations'
import { FORMATION_LEVELS } from '@utils/constants'
import { formatDate, cn } from '@utils/helpers'

const FormationsPreview = () => {
  const previewFormations = formations.slice(0, 3)

  return (
    <section id="formations" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent-green uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-accent-green" />
            Développez vos compétences
            <span className="w-6 h-px bg-accent-green" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nos Formations
          </h2>
          <p className="text-lg text-text-secondary">
            Des parcours adaptés à tous les niveaux pour maîtriser la finance
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewFormations.map((formation, index) => (
            <FormationCard key={formation.id} formation={formation} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            to="/formations"
            variant="secondary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            Voir toutes les formations
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

const FormationCard = ({ formation, index }) => {
  const level = FORMATION_LEVELS[formation.level]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'bg-primary-card border rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 relative',
        formation.featured
          ? 'border-accent-gold hover:shadow-[0_20px_40px_rgba(255,215,0,0.1)]'
          : 'border-border hover:border-accent-green hover:shadow-[0_20px_40px_rgba(0,217,145,0.1)]'
      )}
    >
      {formation.featured && <FeaturedBadge />}

      {/* Header */}
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

      {/* Body */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3 text-sm">
          <div className="w-9 h-9 bg-primary-light rounded-lg flex items-center justify-center">
            <Calendar className="w-4 h-4 text-text-muted" />
          </div>
          <div>
            <div className="text-text-muted text-xs">Date</div>
            <div className="font-medium">
              {formatDate(formation.date, { day: 'numeric', month: 'short' })} - {formation.time}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <div className="w-9 h-9 bg-primary-light rounded-lg flex items-center justify-center">
            <Clock className="w-4 h-4 text-text-muted" />
          </div>
          <div>
            <div className="text-text-muted text-xs">Durée</div>
            <div className="font-medium">{formation.duration}</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-primary-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  'w-2 h-2 rounded-full',
                  i < level.dots ? 'bg-accent-green' : 'bg-border'
                )}
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

export default FormationsPreview