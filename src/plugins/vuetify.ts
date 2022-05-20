import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  locale: {
    defaultLocale: 'en',
  },
  theme: {
    defaultTheme: 'light',
  },
})
