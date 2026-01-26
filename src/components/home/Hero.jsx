import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { Button, DotBadge } from '@components/common'
import { stats } from '@data/avantages'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,217,145,0.2) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(255,215,0,0.13) 0%, transparent 50%),
            linear-gradient(180deg, #0a0a0f 0%, #12121a 100%)
          `,
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(#2a2a3a 1px, transparent 1px),
            linear-gradient(90deg, #2a2a3a 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 70%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <DotBadge className="mb-8">
              Club Finance, Bourse & Investissement du CESAG
            </DotBadge>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6"
          >
            <span className="bg-gradient-to-r from-accent-green to-[#00b377] bg-clip-text text-transparent">
              Comprendre
            </span>
            {' • '}
            Investir
            {' • '}
            <span className="bg-gradient-to-r from-accent-gold to-[#ffb700] bg-clip-text text-transparent">
              Performer
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
          >
            Rejoignez la communauté d'étudiants passionnés par la finance,
            la bourse africaine et les cryptomonnaies. Formez-vous et construisez
            votre avenir financier.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button to="/adhesion" variant="primary" size="lg" icon={<Zap className="w-5 h-5" />}>
              Rejoindre le Club
            </Button>
            <Button to="/formations" variant="secondary" size="lg">
              Découvrir les formations
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const StatItem = ({ stat, delay }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 50
    const increment = stat.value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        setCount(stat.value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [stat.value])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 + delay }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-extrabold font-mono text-accent-green">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-text-muted mt-1">{stat.label}</div>
    </motion.div>
  )
}

export default Hero