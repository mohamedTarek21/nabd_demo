import { createI18n } from 'vue-i18n'

import messages from '@intlify/unplugin-vue-i18n/messages'

export default createI18n({
    locale: localStorage.lang || import.meta.env.VITE_API_I18N_LOCALE || 'ar',
    globalInjection: true,
    messages
  })
  