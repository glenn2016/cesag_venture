import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { news } from '@data/news'

const NewsSection = () => {
  return (
    <section id="actualites" className="py-24 bg-primary-light">
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
            Restez informé
            <span className="w-6 h-px bg-accent-green" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Actualités du Marché
          </h2>
          <p className="text-lg text-text-secondary">
            Les dernières analyses et tendances des marchés financiers
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-card border border-border rounded-2xl overflow-hidden group hover:-translate-y-2 hover:border-accent-green transition-all duration-300"
            >
              {/* Image */}
              <div className="h-44 bg-gradient-to-br from-accent-green-dim to-accent-gold-dim flex items-center justify-center relative overflow-hidden">
                <span className="text-5xl">{item.icon}</span>

                <div className="absolute inset-0 bg-gradient-to-t from-primary-card to-transparent" />

                <span className="absolute top-4 left-4 px-3 py-1.5 bg-primary-card/80 backdrop-blur-sm rounded-lg text-xs font-semibold text-accent-green">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-accent-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-3">
                  {item.excerpt}
                </p>

                <Link
                  to={`/actualites/${item.slug}`}
                  className="inline-flex items-center gap-2 text-accent-green font-semibold text-sm group/link"
                >
                  Lire plus
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsSection