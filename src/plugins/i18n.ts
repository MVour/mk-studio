import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import gr from '@/locales/gr'

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, gr },
})
