import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider, createGlobalStyle } from 'styled-components'
import { useDarkModeManager } from '../contexts/LocalStorage'
import styled from 'styled-components'
import { Text } from 'rebass'

let avaxWalletPurple = '#4c2e56';
let pangoOrange = '#ff6b00';

export default function ThemeProvider({ children }) {
  const [darkMode] = useDarkModeManager()
  return <StyledComponentsThemeProvider theme={theme(darkMode, pangoOrange)}>{children}</StyledComponentsThemeProvider>
}

const theme = (darkMode, color) => ({

  customColor: color,
  iconColor: darkMode ? color : color,
  checkboxColor: darkMode ? color : color,

  sideNavBackgroundColor: darkMode ? 'black' : 'transparent',
  sideNavBackgroundTransparency: 0,
  sideNavColor: color,
  sideNavLinkColor: darkMode ? 'white' : 'black',
  sideNavPollingDotColor: 'green',
  sideNavPollingColor: darkMode ? 'white' : 'black',
  sideNavToggleColor: darkMode ? 'white' : 'black',

  searchColor: darkMode ? 'black' : 'transparent',
  searchBackgroundColor: darkMode ? 'black' : 'white',

  link: darkMode ? color : color,

  normalText: darkMode ? '#FAFAFA' : '#1F1F1F',
  normalText: darkMode ? '#FAFAFA' : '#1F1F1F',
  searchText: darkMode ? '#FAFAFA' : '#1F1F1F',
  inputText: darkMode ? '#FAFAFA' : '#1F1F1F',
  largerText: darkMode ? '#6C7284' : '#888D9B',

  popoverColor: darkMode ? 'blue' : 'pink',
  popoverBackgroundColor: darkMode ? 'blue' : 'pink',
  popoverBackgroundBorderColor: darkMode ? 'blue' : 'pink',
  popoverBoxShadowColor: darkMode ? 'blue' : 'pink',

  centerBackgroundColor: darkMode ? '#22242a' : 'transparent',

  searchMenuBackgroundColor: darkMode ? 'white' : 'white',
  searchMenuItemHover: 'blue',

  pinnedBorderColor: darkMode ? 'yellow' : 'yellow',
  pinnedBackgroundColor: darkMode ? 'black' : 'transparent',
  pinnedColor: darkMode ? 'white' : 'black',

  buttonLightPrimary: darkMode ? 'yellow' : 'yellow',
  arrowColor: darkMode ? 'yellow' : 'gold',

  divider: darkMode ? 'yellow' : 'brown',
  liHoverColor: darkMode ? 'yellow' : 'purple',
  iconColor: darkMode ? 'yellow' : color,

  flyoutBackgroundColor: darkMode ? 'yellow' : 'green',
  menuRowBackgroundColor: darkMode ? 'yellow' : 'green',
  warningBackgroundColor: darkMode ? 'red' : 'red',

  boxShadow: '0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04) '

})

const TextWrapper = styled(Text)`
  color: ${({ color, theme }) => theme[color]};
`

export const TYPE = {
  main(props) {
    return <TextWrapper fontWeight={500} fontSize={14} color={'text1'} {...props} />
  },

  body(props) {
    return <TextWrapper fontWeight={400} fontSize={14} color={'popoverColor'} {...props} />
  },

  popover(props) {
    return <TextWrapper fontWeight={400} fontSize={14} color={'popoverColor'} {...props} />
  },

  search(props) {
    return <TextWrapper fontWeight={400} fontSize={14} color={'searchText'} {...props} />
  },

  small(props) {
    return <TextWrapper fontWeight={500} fontSize={11} color={'text1'} {...props} />
  },

  header(props) {
    return <TextWrapper fontWeight={600} color={'text1'} {...props} />
  },

  largeHeader(props) {
    return <TextWrapper fontWeight={500} color={'text1'} fontSize={24} {...props} />
  },

  light(props) {
    return <TextWrapper fontWeight={400} color={'text3'} fontSize={14} {...props} />
  },

  pink(props) {
    return <TextWrapper fontWeight={props.faded ? 400 : 600} color={props.faded ? 'text1' : 'text1'} {...props} />
  },
}

export const Hover = styled.div`
  :hover {
    cursor: pointer;
  }
`

export const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.linkDk};
  font-weight: 500;
  :hover {
    text-decoration: underline;
  }
  :focus {
    outline: none;
    text-decoration: underline;
  }
  :active {
    text-decoration: none;
  }
`

export const ThemedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  max-width: 100vw !important;
  height: 200vh;
  mix-blend-mode: color;
  background: ${({ backgroundColor }) =>
    `radial-gradient(50% 50% at 50% 50%, ${backgroundColor} 0%, rgba(255, 255, 255, 0) 100%)`};
  position: absolute;
  top: 0px;
  left: 0px;
  /* z-index: 9999; */

  transform: translateY(-110vh);
`

export const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 14px;    
    background-color: ${({ theme }) => theme.bg6};
  }

  a {
    text-decoration: none;

    :hover {
      text-decoration: none
    }
  }

  
.three-line-legend {
	width: 100%;
	height: 70px;
	position: absolute;
	padding: 8px;
	font-size: 12px;
	color: #20262E;
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 10;
  pointer-events: none;
}

.three-line-legend-dark {
	width: 100%;
	height: 70px;
	position: absolute;
	padding: 8px;
	font-size: 12px;
	color: white;
	background-color: rgba(255, 255, 255, 0.23);
	text-align: left;
	z-index: 10;
  pointer-events: none;
}

@media screen and (max-width: 800px) {
  .three-line-legend {
    display: none !important;
  }
}

.tv-lightweight-charts{
  width: 100% !important;
  

  & > * {
    width: 100% !important;
  }
}


  html {
    font-size: 1rem;
    font-variant: none;
    color: 'black';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    height: 100%;
  }
`
