import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react'
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from '@utils/constants'

const Footer = () => {
  const socialIcons = {
    Facebook,
    Instagram,
    Linkedin,
    MessageCircle,
  }

  return (
    <footer className="bg-primary border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-green to-[#00b377] rounded-xl flex items-center justify-center">
                <span className="font-extrabold text-primary text-lg">CV</span>
              </div>
              <span className="text-xl font-bold text-text-primary">
                CESAG <span className="text-accent-green">Venture</span>
              </span>
            </Link>
            <p className="text-text-secondary text-[15px] leading-relaxed mb-6">
              Le club officiel du CESAG dédié à la finance, la bourse et l'investissement.
              Former, informer, accompagner.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-card border border-border rounded-xl flex items-center justify-center text-text-secondary hover:text-accent-green hover:border-accent-green transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-accent-green transition-colors text-[15px]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-6">
              Formations
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/formations" className="text-text-secondary hover:text-accent-green transition-colors text-[15px]">
                  Finance & Budget
                </Link>
              </li>
              <li>
                <Link to="/formations" className="text-text-secondary hover:text-accent-green transition-colors text-[15px]">
                  Bourse & BRVM
                </Link>
              </li>
              <li>
                <Link to="/formations" className="text-text-secondary hover:text-accent-green transition-colors text-[15px]">
                  Crypto & Trading
                </Link>
              </li>
              <li>
                <Link to="/formations" className="text-text-secondary hover:text-accent-green transition-colors text-[15px]">
                  Voir tout
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-text-secondary hover:text-accent-green transition-colors text-[15px]"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="text-text-secondary hover:text-accent-green transition-colors text-[15px]"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <span className="text-text-secondary text-[15px]">
                  {CONTACT_INFO.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} CESAG Venture. Tous droits réservés.
          </p>
          <p className="text-text-muted text-sm">
            Fait avec <span className="text-accent-green">💚</span> par les étudiants du CESAG
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer