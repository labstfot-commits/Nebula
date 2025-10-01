import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export default function Hero() {
  const { t } = useTranslation()
  const [downloading, setDownloading] = useState(false)

  const handleDownload = async () => {
    setDownloading(true)

    // Show download notification
    if (typeof window !== 'undefined') {
      const notification = document.createElement('div')
      notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce'
      notification.textContent = 'Загрузка Nebula начата...'
      document.body.appendChild(notification)

      setTimeout(() => {
        document.body.removeChild(notification)
      }, 3000)
    }

    // Simulate download delay
    setTimeout(() => {
      window.open('https://nebula.tf/download', '_blank')
      setDownloading(false)
    }, 1000)
  }
  return (
    <section className="relative section bg-hero-stars bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
      <div className="container text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg md:text-xl text-white/80 mb-8"
        >
          {t('hero.subtitle')}
        </motion.p>
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className={`btn-primary ${downloading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {downloading ? 'Загрузка...' : t('hero.ctaPrimary')}
          </button>
          <a href="#pricing" className="btn-secondary">{t('hero.ctaSecondary')}</a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-white/70">
          {(t('hero.badges', { returnObjects: true }) as string[])?.map((b: string) => (
            <span key={b} className="px-2 py-1 border border-white/20 rounded">{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}


