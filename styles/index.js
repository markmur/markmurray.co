import styled from 'styled-components'
import { device } from './media'

export const Container = styled.div`
  max-width: ${p => p.width || 900}px;
  margin: auto;
`

export const Label = styled.label`
  color: ${p => p.theme.colors.deepBlue};
  font-size: 13px;
  font-weight: 600;
`

export const Nav = styled.nav`
  position: fixed;
  width: ${p => (p.open ? p.theme.nav.closed : p.theme.nav.open)};
  background: ${p => p.theme.nav.blackPearl};
  height: 100vh;
  display: flex;
  z-index: 1000;
  flex-direction: column;
  transition: width 200ms ease-in-out;
  will-change: width;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  ${device.xs`
    flex-direction: column;
    height: 100vh
  `};
`

export const Main = styled.div`
  flex: 1;
  padding-left: ${p => p.theme.nav.width};

  ${device.xs`
    display: flex;
    padding-top: ${p => p.theme.nav.width};
    padding-left: 0 !important;
    flex-direction: column;
    flex: 1 1 100% !important
  `};
`
