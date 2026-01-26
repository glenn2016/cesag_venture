import { motion } from 'framer-motion'
import { Card } from '@components/common'
import { avantages } from '@data/avantages'

const Avantages = () => {
  return (
    <section id="avantages" className="py-24 bg-primary-light">
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
            Pourquoi nous rejoindre
            <span className="w-6 h-px bg-accent-green" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Avantages du Club
          </h2>
          <p className="text-lg text-text-secondary">
            Accédez à des ressources exclusives et développez vos compétences en finance
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {avantages.map((avantage, index) => (
            <motion.div
              key={avantage.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden group" hover>
                {/* Top border animation */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green to-[#00b377] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Icon */}
                <div className="w-14 h-14 bg-accent-green-dim rounded-2xl flex items-center justify-center text-2xl mb-5">
                  {avantage.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{avantage.title}</h3>
                <p className="text-text-secondary text-[15px] leading-relaxed">
                  {avantage.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Avantages