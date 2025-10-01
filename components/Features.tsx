import { useTranslation } from 'react-i18next'

export default function Features() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true }) as string[] || []
  return (
    <section id="features" className="section bg-baseball-dynamic bg-cover bg-center bg-fixed">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">{t('features.title')}</h2>
        <div className="grid md:grid-cols-4 gap-4" style={{ contentVisibility: 'auto' }}>
          {items.map((item) => (
            <div key={item} className="border border-white/10 rounded-lg p-4 bg-black/40 backdrop-blur">
              <h3 className="font-medium">{item}</h3>
              <p className="text-sm text-white/70">Nebula • {item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


