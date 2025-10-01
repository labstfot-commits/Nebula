import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'react-i18next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Devices from '@/components/Devices'
import EcosystemCarousel from '@/components/EcosystemCarousel'
import Footer from '@/components/Footer'

export default function Home() {
  const { t } = useTranslation()
  const title = t('seo.metaTitle')
  const description = t('seo.metaDescription')
  return (
    <>
      <NextSeo title={title} description={description} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Hero />
        <section className="section bg-football bg-cover bg-center">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">{t('what.title')}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {(t('what.cards', { returnObjects: true }) as any[]).map((c) => (
                <div key={c.title} className="border border-white/10 rounded-lg p-6 bg-black/50">
                  <div className="text-xl font-medium">{c.title}</div>
                  <div className="text-white/70 text-sm">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Features />
        <section id="download" className="section bg-boxing bg-cover bg-center">
          <div className="container text-center">
            <div className="text-xl text-white/80 mb-4">Download demos and UI mockups</div>
            <video className="w-full max-w-3xl mx-auto rounded-lg border border-white/10" controls poster="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop" aria-label="Nebula demo video">
              <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
        <Pricing />
        <Devices />
        <EcosystemCarousel />
      </main>
      <Footer />
    </>
  )
}


