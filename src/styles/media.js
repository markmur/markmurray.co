import { css } from 'styled-components'

const x = size => p => p.theme.device[size]

export const queries = {
  xs: 767,
  sm: 768,
  md: 992,
  lg: 1200
}

export const device = {
  xs: (...args) => css`
    @media (max-width: ${x('xs')}) {
      ${css(...args)};
    }
  `,
  sm: (...args) => css`
    @media (min-width: ${x('sm')}) and (max-width: ${x('md')} {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (min-width: ${x('md')}) and (max-width: ${x('lg')}) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (min-width: ${x('lg')}) {
      ${css(...args)};
    }
  `
}
