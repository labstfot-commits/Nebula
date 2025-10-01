import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 bg-black/60" id="support">
      <div className="container py-12 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-3">
            <Image
              src="/Nebula/nebula-logoo.svg"
              alt="Nebula logo"
              width={32}
              height={32}
              loading="lazy"
            />
            <span className="font-semibold">Nebula</span>
          </div>
          <Link href="https://labstfot-commits.github.io/TFOT-Labs/" target="_blank" className="inline-flex items-center gap-2 text-white/80">
            <Image
              src="/Nebula/TFOT-Labs-logo.png"
              alt="TFOT Labs"
              width={28}
              height={28}
              loading="lazy"
            />
            <span>TFOT Labs</span>
          </Link>
        </div>
        <div>
          <div className="font-medium mb-3">{t('footer.product')}</div>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="/Nebula/#features">{t('nav.features')}</a></li>
            <li><a href="/Nebula/#pricing">{t('nav.pricing')}</a></li>
            <li><a href="/Nebula/#download">{t('nav.download')}</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">{t('footer.company')}</div>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="/Nebula/#community">{t('nav.community')}</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">{t('footer.support')}</div>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="/Nebula/#support">{t('footer.a11y')}</a></li>
            <li><a href="/Nebula/#support">{t('footer.refund')}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        {t('footer.privacy')} • {t('footer.terms')} • {t('footer.cookies')}
        <div className="mt-2">{t('footer.copyright', { year })}</div>
      </div>
    </footer>
  )
}


