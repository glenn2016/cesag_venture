import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#0a0a0f',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  pageTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  pageSubtitle: {
    color: '#a0a0b0',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#1a1a25',
    borderRadius: 20,
    padding: 30,
    border: '2px solid #2a2a3a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 50,
    height: 50,
    backgroundColor: '#00d991',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  logoText: {
    color: '#0a0a0f',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerText: {
    flex: 1,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#606070',
    fontSize: 10,
    marginTop: 4,
  },
  memberName: {
    color: '#ffd700',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  infoItem: {
    marginRight: 40,
  },
  infoLabel: {
    color: '#606070',
    fontSize: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  infoValue: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 20,
    borderTop: '1px solid #2a2a3a',
  },
  qrPlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrText: {
    color: '#0a0a0f',
    fontSize: 10,
    fontWeight: 'bold',
  },
  validText: {
    color: '#00d991',
    fontSize: 12,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#2a2a3a',
    marginVertical: 30,
  },
  benefits: {
    marginTop: 20,
  },
  benefitTitle: {
    color: '#00d991',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  benefitDot: {
    width: 8,
    height: 8,
    backgroundColor: '#00d991',
    borderRadius: 4,
    marginRight: 10,
  },
  benefitText: {
    color: '#a0a0b0',
    fontSize: 11,
  },
  contact: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#12121a',
    borderRadius: 12,
  },
  contactTitle: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactText: {
    color: '#a0a0b0',
    fontSize: 10,
    marginBottom: 5,
  },
  watermark: {
    position: 'absolute',
    bottom: 20,
    right: 40,
    color: '#2a2a3a',
    fontSize: 10,
  },
})

const MemberCardPDF = ({ nom, prenom, section, memberId }) => {
  const currentYear = new Date().getFullYear()

  const benefits = [
    'Accès illimité à toutes nos formations',
    'Invitations prioritaires aux événements VIP',
    'Accès au groupe WhatsApp/Telegram privé',
    'Networking avec des professionnels de la finance',
    'Analyses de marché et actualités exclusives',
  ]

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Page Title */}
        <Text style={styles.pageTitle}>Carte Membre CESAG Venture</Text>
        <Text style={styles.pageSubtitle}>
          Club Finance, Bourse & Investissement du CESAG
        </Text>

        {/* Member Card */}
        <View style={styles.card}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>CV</Text>
            </View>
            <View style={styles.headerText}>
              <Text style={styles.title}>CESAG Venture</Text>
              <Text style={styles.subtitle}>Carte Membre {currentYear}</Text>
            </View>
          </View>

          {/* Member Name */}
          <Text style={styles.memberName}>
            {prenom} {nom}
          </Text>

          {/* Info Row */}
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Filière</Text>
              <Text style={styles.infoValue}>{section}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>N° Membre</Text>
              <Text style={styles.infoValue}>{memberId}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Date d'adhésion</Text>
              <Text style={styles.infoValue}>
                {new Date().toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </Text>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <View style={styles.qrPlaceholder}>
              <Text style={styles.qrText}>QR</Text>
            </View>
            <Text style={styles.validText}>Valide {currentYear}</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Benefits Section */}
        <View style={styles.benefits}>
          <Text style={styles.benefitTitle}>Vos avantages membres</Text>

          {benefits.map((benefit, index) => (
            <View key={index} style={styles.benefitItem}>
              <View style={styles.benefitDot} />
              <Text style={styles.benefitText}>{benefit}</Text>
            </View>
          ))}
        </View>

        {/* Contact Info */}
        <View style={styles.contact}>
          <Text style={styles.contactTitle}>Contact</Text>
          <Text style={styles.contactText}>Email: cesagventure@cesag.sn</Text>
          <Text style={styles.contactText}>
            CESAG, Boulevard du Général De Gaulle, Dakar
          </Text>
        </View>

        {/* Watermark */}
        <Text style={styles.watermark}>
          Document généré le {new Date().toLocaleDateString('fr-FR')}
        </Text>
      </Page>
    </Document>
  )
}

export default MemberCardPDF