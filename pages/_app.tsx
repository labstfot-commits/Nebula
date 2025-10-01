import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'
import '../i18n'

const defaultSEO = {
  titleTemplate: '%s | Nebula',
  defaultTitle: 'Nebula — TFOT Labs',
  description: 'Nebula: Смотреть. Тренироваться. Жить. Спортивная платформа от TFOT Labs.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Nebula',
  },
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <DefaultSeo {...defaultSEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}


