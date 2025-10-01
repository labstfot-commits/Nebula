import { useTranslation } from 'react-i18next'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import FTOTIdModal from './FTOTIdModal'

const LANGS = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'de', label: 'DE' },
  { code: 'it', label: 'IT' },
  { code: 'pt', label: 'PT' },
  { code: 'hi', label: 'HI' },
  { code: 'ar', label: 'AR' },
  { code: 'he', label: 'HE' },
  { code: 'zh', label: 'ZH' },
  { code: 'ja', label: 'JA' },
  { code: 'ko', label: 'KO' },
  { code: 'sw', label: 'SW' },
  { code: 'es', label: 'ES' },
  { code: 'el', label: 'EL' },
  { code: 'da', label: 'DA' },
  { code: 'nl', label: 'NL' },
  { code: 'sv', label: 'SV' },
  { code: 'no', label: 'NO' },
]

export default function Header() {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/50">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/nebula-logoo.png"
            alt="Nebula logo"
            width={36}
            height={36}
            priority
          />
          <span className="font-semibold">Nebula</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="/Nebula/#features" className="hover:text-white" aria-label="Features">{t('nav.features')}</a>
          <a href="/Nebula/#pricing" className="hover:text-white" aria-label="Pricing">{t('nav.pricing')}</a>
          <a href="/Nebula/#devices" className="hover:text-white" aria-label="Download">{t('nav.download')}</a>
          <a href="/Nebula/#community" className="hover:text-white" aria-label="Community">{t('nav.community')}</a>
          <a href="/Nebula/#support" className="hover:text-white" aria-label="Support">{t('nav.support')}</a>
        </nav>
        <div className="flex items-center gap-3">
          <select
            aria-label="Language selector"
            className="bg-transparent border border-white/20 rounded px-2 py-1 text-sm"
            value={i18n.language}
            onChange={(e) => {
              const lang = e.target.value
              // persist language to cookie for SSR/CSR consistency
              document.cookie = `i18next=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`
              i18n.changeLanguage(lang)
            }}
          >
            {LANGS.map((l) => (
              <option key={l.code} value={l.code}>{l.label}</option>
            ))}
          </select>
          {mounted && (
            <button
              aria-label="Toggle theme"
              className="px-2 py-1 text-sm border border-white/20 rounded"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          )}
          <button className="btn-primary text-sm" onClick={() => setOpen(true)}>{t('nav.signin')}</button>
        </div>
      </div>
      <FTOTIdModal open={open} onClose={() => setOpen(false)} />
    </header>
  )
}


