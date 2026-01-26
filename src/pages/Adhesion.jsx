import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { pdf } from '@react-pdf/renderer'
import Input, { Select, Textarea, Checkbox } from '@components/common/Input'
import { Button, DotBadge, SuccessModal } from '@components/common'
import { membershipBenefits } from '@data/avantages'
import { FILIERES } from '@utils/constants'
import { generateMemberId } from '@utils/helpers'
import MemberCardPDF from '@components/adhesion/MemberCardPDF'

const adhesionSchema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  prenom: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  telephone: z.string().min(8, 'Numéro de téléphone invalide'),
  section: z.string().min(1, 'Veuillez sélectionner une filière'),
  motivation: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, 'Vous devez accepter les conditions'),
})

const Adhesion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [memberId] = useState(generateMemberId())

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(adhesionSchema),
    defaultValues: {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      section: '',
      motivation: '',
      terms: false,
    },
  })

  const watchedValues = watch()

  const onSubmit = async (data) => {
    setIsGenerating(true)

    try {
      const blob = await pdf(
        <MemberCardPDF
          nom={data.nom}
          prenom={data.prenom}
          section={data.section}
          memberId={memberId}
        />
      ).toBlob()

      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `carte-membre-${data.prenom}-${data.nom}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      setIsModalOpen(true)
    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error)
    } finally {
      setIsGenerating(false)
    }
  }

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
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <DotBadge className="mb-6">Carte membre officielle</DotBadge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5"
            >
              Rejoignez{' '}
              <span className="bg-gradient-to-r from-accent-green to-[#00b377] bg-clip-text text-transparent">
                CESAG Venture
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-secondary"
            >
              Obtenez votre carte membre et accédez à toutes nos formations, événements et ressources
              exclusives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-primary-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-card border border-border rounded-2xl p-6 text-center hover:border-accent-green transition-all"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-text-secondary text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Card Preview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <h2 className="text-2xl font-bold mb-4">Votre carte membre</h2>
              <p className="text-text-secondary mb-8">
                Remplissez le formulaire pour générer votre carte membre officielle CESAG Venture.
              </p>

              {/* Card Preview */}
              <div
                className="bg-gradient-to-br from-primary-card to-primary rounded-3xl p-7 border border-border relative overflow-hidden shadow-2xl"
                style={{
                  transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                  transition: 'transform 0.5s',
                }}
              >
                {/* Pattern */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, #00d991 0, #00d991 1px, transparent 1px, transparent 10px)',
                  }}
                />

                {/* Header */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-green to-[#00b377] rounded-xl flex items-center justify-center font-extrabold text-primary text-lg">
                    CV
                  </div>
                  <div>
                    <div className="font-bold text-lg">CESAG Venture</div>
                    <div className="text-text-muted text-xs">Carte Membre 2026</div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="relative z-10 mb-6">
                  <div className="text-2xl font-bold text-accent-gold mb-4">
                    {watchedValues.prenom || 'Prénom'} {watchedValues.nom || 'Nom'}
                  </div>
                  <div className="flex gap-8">
                    <div>
                      <div className="text-[10px] text-text-muted uppercase tracking-wider">
                        Filière
                      </div>
                      <div className="font-semibold text-sm">
                        {watchedValues.section || '-'}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-text-muted uppercase tracking-wider">
                        N° Membre
                      </div>
                      <div className="font-semibold text-sm font-mono">{memberId}</div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center relative z-10">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary text-xs font-bold">
                    QR
                  </div>
                  <div className="text-accent-green text-sm font-semibold">Valide 2026</div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary-card border border-border rounded-3xl p-8 relative"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-gold to-[#ffb700] rounded-t-3xl" />

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Formulaire d'adhésion</h3>
                <p className="text-text-muted text-sm">Tous les champs sont obligatoires</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Input
                  label="Nom"
                  placeholder="Entrez votre nom"
                  error={errors.nom?.message}
                  {...register('nom')}
                />

                <Input
                  label="Prénom"
                  placeholder="Entrez votre prénom"
                  error={errors.prenom?.message}
                  {...register('prenom')}
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="votre.email@cesag.sn"
                  error={errors.email?.message}
                  {...register('email')}
                />

                <Input
                  label="Téléphone"
                  type="tel"
                  placeholder="+221 XX XXX XX XX"
                  error={errors.telephone?.message}
                  {...register('telephone')}
                />

                <Select
                  label="Section / Filière"
                  options={FILIERES}
                  placeholder="Sélectionnez votre filière"
                  error={errors.section?.message}
                  {...register('section')}
                />

                <Textarea
                  label="Pourquoi souhaitez-vous rejoindre ? (optionnel)"
                  placeholder="Parlez-nous de votre intérêt pour la finance..."
                  {...register('motivation')}
                />

                <Checkbox
                  label="J'accepte les conditions d'adhésion et la politique de confidentialité"
                  error={errors.terms?.message}
                  {...register('terms')}
                />

                <Button
                  type="submit"
                  variant="gold"
                  size="full"
                  loading={isSubmitting || isGenerating}
                >
                  {isGenerating ? 'Génération en cours...' : '⭐ Générer ma carte membre'}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Bienvenue dans le club !"
        message="Votre carte membre a été générée et téléchargée. Vous recevrez également un email de confirmation."
        icon="🎉"
      />
    </>
  )
}

export default Adhesion