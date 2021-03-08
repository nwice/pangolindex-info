import React from 'react'
import styled from 'styled-components'
import { AutoColumn } from '../Column'
import Title from '../Title'
import { BasicLink } from '../Link'
import { useMedia } from 'react-use'
import { transparentize } from 'polished'
import { TYPE } from '../../Theme'
import { withRouter } from 'react-router-dom'
import { TrendingUp, List, PieChart, Disc, Activity } from 'react-feather'
import Link from '../Link'

import TwitterLogo from '../../assets/twitter.svg'
import MediumLogo from '../../assets/medium.svg'
import AvaxLogo from '../../assets/avax_red_logo.png'

import AvaxWalletLogo from '../../assets/avax_wallet.svg'
import AvaxWalletLogoDk from '../../assets/avax_wallet_purple.svg'

import ChromeLogo from '../../assets/chrome.svg'
import AndroidLogo from '../../assets/android.svg'

import AppleLogo from '../../assets/apple_black.svg'
import AppleLogoDk from '../../assets/apple.svg'

import DiscordLogo from '../../assets/discord_black.svg'
import DiscordLogoDk from '../../assets/discord.svg'

import TelegramLogo from '../../assets/telegram.svg'
import { useSessionStart } from '../../contexts/Application'
import { useDarkModeManager } from '../../contexts/LocalStorage'
import Toggle from '../Toggle'

const Wrapper = styled.div`
  height: ${({ isMobile }) => (isMobile ? 'initial' : '100vh')};
  background-color: ${({ theme }) => transparentize(theme.sideNavBackgroundTransparency, theme.sideNavBackgroundColor)};
  color: ${({ theme }) => theme.sideNavColor};
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  position: sticky;
  top: 0px;
  z-index: 9999;
  box-sizing: border-box;
  
  /* background-color: #1b1c22; */
  /* background: linear-gradient(193.68deg, #1b1c22 0.68%, #000000 100.48%); */

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    position: relative;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`

const Option = styled.div`
  font-weight: 500;
  font-size: 14px;
  opacity: ${({ activeText, theme }) => (activeText ? 1 : theme.sideNavOptionOpacity)};
  color: ${({ theme }) => theme.sideNavOptionColor};
  display: flex;
  :hover {
    opacity: 1;
  }
  svg {
    color: ${({ theme }) => theme.iconColor}
  }  
`

const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderText = styled.div`
  margin-right: 0.75rem;
  font-size: 0.825rem;
  font-weight: 500;
  display: inline-box;
  display: -webkit-inline-box;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
  a {
    color: ${({ theme }) => theme.sideNavLinkColor};
  }
`

const Polling = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  padding: 1rem;
  color: ${({ theme }) => theme.pollingColor};
  opacity: 0.67;
  transition: opacity 0.25s ease;
  :hover {
    opacity: 1;
  }
`
const PollingDot = styled.div`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  margin-right: 0.5rem;
  margin-top: 3px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.pollingDotColor};
`

function SideNav({ history }) {
  const below1080 = useMedia('(max-width: 1080px)')

  const below1180 = useMedia('(max-width: 1180px)')

  const seconds = useSessionStart()

  const [isDark, toggleDarkMode] = useDarkModeManager()

  const appleLogo = isDark ? AppleLogoDk : AppleLogo
  const discordLogo = isDark ? DiscordLogoDk : DiscordLogo
  const avaxWalletLogo = isDark ? AvaxWalletLogoDk : AvaxWalletLogo

  return (
    <Wrapper isMobile={below1080}>
      {!below1080 ? (
        <DesktopWrapper>
          <AutoColumn gap="1rem" style={{ marginLeft: '.75rem', marginTop: '1.5rem' }}>
            <Title />
            {!below1080 && (
              <AutoColumn gap="1.25rem" style={{ marginTop: '1rem' }}>
                <BasicLink to="/home">
                  <Option activeText={history.location.pathname === '/home' ?? undefined}>
                    <TrendingUp size={20} style={{ marginRight: '.75rem' }} />
                    Overview
                  </Option>
                </BasicLink>
                <BasicLink to="/tokens">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'tokens' ||
                        history.location.pathname.split('/')[1] === 'token') ??
                      undefined
                    }
                  >
                    <Disc size={20} style={{ marginRight: '.75rem' }} />
                    Tokens
                  </Option>
                </BasicLink>
                <BasicLink to="/pairs">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'pairs' ||
                        history.location.pathname.split('/')[1] === 'pair') ??
                      undefined
                    }
                  >
                    <PieChart size={20} style={{ marginRight: '.75rem' }} />
                    Pairs
                  </Option>
                </BasicLink>
                <BasicLink to="/txs">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'txs' ||
                        history.location.pathname.split('/')[1] === 'tx') ??
                      undefined
                    }
                  >
                    <Activity size={20} style={{ marginRight: '.75rem' }} />
                    Transactions
                  </Option>
                </BasicLink>

                <BasicLink to="/accounts">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'accounts' ||
                        history.location.pathname.split('/')[1] === 'account') ??
                      undefined
                    }
                  >
                    <List size={20} style={{ marginRight: '.75rem' }} />
                    Accounts
                  </Option>
                </BasicLink>
              </AutoColumn>
            )}
          </AutoColumn>
          <AutoColumn gap="0.5rem" style={{ marginLeft: '.75rem', marginBottom: '4rem', display: 'none' }}>
            <MobileWrapper>
              <Link href="https://app.pangolin.exchange" target="_blank">
                <img width={'24px'} src={ChromeLogo} alt="Pangolindex" />
              </Link>
              <Link href="https://app.pangolin.exchange" target="_blank" disabled="disabled">
                <img width={'24px'} src={AndroidLogo} alt="Pangolindex" />
              </Link>
              <Link href="https://app.pangolin.exchange" target="_blank" disabled="disabled">
                <img width={'24px'} src={appleLogo} alt="Apple Play Store" />
              </Link>
            </MobileWrapper>
            <HeaderText>
              <Link href="https://discord.gg/PARrDYYbfw" target="_blank">
                <img width={'24px'} src={discordLogo} alt="Discord" />
              </Link>
            </HeaderText>
            <MobileWrapper>
              <Link href="https://twitter.com/pangolindex" target="_blank">
                <img width={'24px'} src={TwitterLogo} alt="Twitter" />
              </Link>
              <Link href="https://medium.com/avalancheavax" target="_blank">
                <img width={'24px'} src={MediumLogo} alt="Twitter" />
              </Link>
              <Link href="https://t.me/pangolindex" target="_blank">
                <img width={'24px'} src={TelegramLogo} alt="Twitter" />
              </Link>
            </MobileWrapper>
            <MobileWrapper>
              <Link href="https://twitter.com/avalancheavax" target="_blank">
                <img width={'24px'} src={AvaxLogo} alt="Twitter" />
              </Link>
              <Link href="https://wallet.avax.network" target="_blank">
                <img width={'24px'} src={avaxWalletLogo} alt="Twitter" />
              </Link>
            </MobileWrapper>
            
          </AutoColumn>
          <AutoColumn gap="0.5rem" style={{ marginLeft: '.75rem', marginBottom: '4rem' }}>
            <Toggle isActive={isDark} toggle={toggleDarkMode} />
          </AutoColumn>
          {!below1180 && (
            <Polling style={{ marginLeft: '.5rem' }}>
              <PollingDot />
              <a href="">
                <TYPE.small color={'sideNavPollingColor'}>
                  Updated {!!seconds ? seconds + 's' : '-'} ago <br />
                </TYPE.small>
              </a>
            </Polling>
          )}
        </DesktopWrapper>
      ) : (
          <MobileWrapper>
            <Title />
          </MobileWrapper>
        )
      }
    </Wrapper >
  )
}

export default withRouter(SideNav)
