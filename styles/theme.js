import { injectGlobal } from 'styled-components'
import { queries } from './media'

const colors = {
  'pastel-green': '#58B3B2',
  'pastel-pink': '#E0B0C2',
  'pastel-orange': '#E19C7D',
  navy: '#2c3e50',
  pink: '#DA5269',
  'black-pearl': '#1F2529',
  blue: '#0087ff',
  'deep-blue': '#373F81',
  gradient: '#0060FF, #0031FF',
  'light-grey': '#ADB1BF',
  'border-grey': '#eeeeee',
  'text-grey': '#9BA0B1',
  dark: '#232a2f',
  'background-grey': 'rgb(246, 246, 249)',
  green: '#1abc9c',
  blueGradient: '(#005FFF, 0.09, #0031FF, 0.5)'
}

const fonts = {
  main: 'Lato',
  header: "'Helvetica Neue', Helvetica"
}

const theme = {
  fonts,
  radius: 4,
  lineSpeed: '1s',
  lineEasing: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
  nav: {
    open: 226,
    closed: 65,
    width: '65px'
  },
  projectDetail: {
    height: '400px'
  },
  projectShowcase: '100vh',
  device: queries,
  colors: {
    ...colors,
    primary: colors.pastelGreen,
    background: colors.blackPearl,
    menuLinks: colors.lightGrey
  }
}

export default theme

export const injectThemeVars = () => injectGlobal`
:root {
  ${Object.keys(theme.colors).map(key => `--${key}: ${theme.colors[key]};`)}
}
`
