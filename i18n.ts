import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ru from './locales/ru.json'
import en from './locales/en.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import it from './locales/it.json'
import pt from './locales/pt.json'
import hi from './locales/hi.json'
import ar from './locales/ar.json'
import he from './locales/he.json'
import zh from './locales/zh.json'
import ja from './locales/ja.json'
import ko from './locales/ko.json'
import sw from './locales/sw.json'
import es from './locales/es.json'
import el from './locales/el.json'
import da from './locales/da.json'
import nl from './locales/nl.json'
import sv from './locales/sv.json'
import no from './locales/no.json'

const resources = {
  ru: { translation: ru },
  en: { translation: en },
  fr: { translation: fr },
  de: { translation: de },
  it: { translation: it },
  pt: { translation: pt },
  hi: { translation: hi },
  ar: { translation: ar },
  he: { translation: he },
  zh: { translation: zh },
  ja: { translation: ja },
  ko: { translation: ko },
  sw: { translation: sw },
  es: { translation: es },
  el: { translation: el },
  da: { translation: da },
  nl: { translation: nl },
  sv: { translation: sv },
  no: { translation: no },
}

// Initialize without browser language detection to keep SSR/CSR consistent
i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    lng: 'ru',
    supportedLngs: Object.keys(resources),
    interpolation: { escapeValue: false },
    initImmediate: false,
  })

export default i18n


