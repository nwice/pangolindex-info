import React from 'react'
import styled, { css, keyframes } from 'styled-components'

import AvaxLogo from '../../assets/avax_red_logo.png'
import PangoLogo from '../../assets/pango_white.svg'

const pulse = keyframes`
  0% { transform: scale(1); }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); }
`

const Wrapper = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  ${(props) =>
    props.fill && !props.height
      ? css`
          height: 100vh;
        `
      : css`
          height: 180px;
        `}
`

const AnimatedImg = styled.div`
  margin: .3em;
  animation: ${pulse} 800ms linear infinite;
  & > * {
    width: 72px;
  }
`

const LocalLoader = ({ fill }) => {

  return (
    <Wrapper fill={fill}>
      <AnimatedImg>
        <img src={AvaxLogo} alt="avax-loading-icon" />
      </AnimatedImg>
      <AnimatedImg>
        <img src={PangoLogo} alt="pangolin-loading-icon" />
      </AnimatedImg>
    </Wrapper>
  )
}

export default LocalLoader
