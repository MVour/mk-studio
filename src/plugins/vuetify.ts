/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
// Styles
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'


const studioLightTheme = {
  dark: false,
  colors: {
    background:            '#ddd5c8',
    surface:               '#e5ddd0',
    'surface-bright':      '#ede7da',
    'surface-light':       '#d0c9bc',
    'surface-variant':     '#5a5570',
    'on-surface-variant':  '#eeecea',
    primary:               '#7C3AED',
    'primary-darken-1':    '#5B21B6',
    secondary:             '#a78bfa',
    'secondary-darken-1':  '#7C3AED',
    error:                 '#991b1b',
    info:                  '#4a3fcc',
    success:               '#166534',
    warning:               '#854d0e',
  },
  variables: {
    'border-color':              '#1a1825',
    'border-opacity':            0.08,
    'high-emphasis-opacity':     0.87,
    'medium-emphasis-opacity':   0.60,
    'disabled-opacity':          0.38,
    'idle-opacity':              0.04,
    'hover-opacity':             0.04,
    'focus-opacity':             0.12,
    'selected-opacity':          0.08,
    'activated-opacity':         0.12,
    'pressed-opacity':           0.12,
    'dragged-opacity':           0.08,
    'theme-kbd':                 '#1a1825',
    'theme-on-kbd':              '#ffffff',
    'theme-code':                '#eeecea',
    'theme-on-code':             '#1a1825',
  },
}
 
const studioDarkTheme = {
  dark: true,
  colors: {
    background:            '#0a0a0f',
    surface:               '#111118',
    'surface-bright':      '#16161f',
    'surface-light':       '#16161f',
    'surface-variant':     '#9490b0',
    'on-surface-variant':  '#16161f',
    primary:               '#A78BFA',
    'primary-darken-1':    '#7C3AED',
    secondary:             '#c4b5fd',
    'secondary-darken-1':  '#A78BFA',
    error:                 '#f87171',
    info:                  '#a89cf7',
    success:               '#4ade80',
    warning:               '#fbbf24',
  },
  variables: {
    'border-color':              '#ffffff',
    'border-opacity':            0.06,
    'high-emphasis-opacity':     0.87,
    'medium-emphasis-opacity':   0.60,
    'disabled-opacity':          0.38,
    'idle-opacity':              0.05,
    'hover-opacity':             0.05,
    'focus-opacity':             0.12,
    'selected-opacity':          0.10,
    'activated-opacity':         0.14,
    'pressed-opacity':           0.14,
    'dragged-opacity':           0.10,
    'theme-kbd':                 '#e8e6f0',
    'theme-on-kbd':              '#0a0a0f',
    'theme-code':                '#16161f',
    'theme-on-code':             '#e8e6f0',
  },
}


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'studioDarkTheme',
    themes: {
      studioLightTheme,
      studioDarkTheme,
    },
  },
})
