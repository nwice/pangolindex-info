import React from 'react'
import { Button as RebassButton } from 'rebass/styled-components'
import styled from 'styled-components'
import { Plus, ChevronDown, ChevronUp } from 'react-feather'
import { darken, transparentize } from 'polished'
import { RowBetween } from '../Row'
import { StyledIcon } from '..'

const Base = styled(RebassButton)`
  padding: 8px 12px;
  font-size: ${({ theme }) => theme.normalFontSize};
  font-weight: ${({ theme }) => theme.normalFontWeight};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  outline: none;
  border-bottom-right-radius: ${({ open }) => open && '0'};
  border-bottom-left-radius: ${({ open }) => open && '0'};
`

const BaseCustom = styled(RebassButton)`
  padding: 16px 12px;
  font-size: ${({ theme }) => theme.normalFontSize};
  font-weight: ${({ theme }) => theme.normalFontWeight - 200};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  outline: none;
`

const Dull = styled(Base)`
  background-color: ${({ theme }) => theme.dullBackgroundTransparentColor};
  border: ${({ theme }) => '1px solid ' + theme.dullBorderColor};
  color: ${({ theme }) => theme.dullColor};
  height: 100%;
  font-weight: ${({ theme }) => theme.normalFontWeight - 200};
  &:hover, :focus {
    background-color: ${({ theme }) => theme.dullBackgroundTransparentHoverColor};
    border-color: ${({ theme }) => theme.dullHoverColor};
  }
  &:focus {
    box-shadow: ${({ theme }) => theme.dullFocusBoxShadow};
  }
  &:active {
    background-color: ${({ theme }) => theme.dullActiveBoxShadow};
    border-color: ${({ theme }) => theme.dullActiveBoxShadow};
  }
`

export default function ButtonStyled({ children, ...rest }) {
  return <Base {...rest}>{children}</Base>
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ButtonLight = styled(Base)`
  background-color: ${({ color, theme }) => (color ? transparentize(0.9, color) : transparentize(0.9, 'yellow'))};
  color: ${({ color, theme }) => (color ? darken(0.1, color) : 'yellow')};

  min-width: fit-content;
  border-radius: ${({ theme }) => theme.borderRadius};
  white-space: nowrap;

  a {
    color: ${({ color, theme }) => (color ? darken(0.1, color) : 'yellow')};
  }

  :hover {
    background-color: ${({ color, theme }) =>
    color ? transparentize(0.8, color) : transparentize(0.8, 'yellow')};
  }
`

export function ButtonDropdown({ disabled = false, children, open, ...rest }) {
  return (
    <ButtonFaded {...rest} disabled={disabled} ope={open}>
      <RowBetween>
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
        {open ? (
          <StyledIcon>
            <ChevronUp size={24} />
          </StyledIcon>
        ) : (
            <StyledIcon>
              <ChevronDown size={24} />
            </StyledIcon>
          )}
      </RowBetween>
    </ButtonFaded>
  )
}

export const ButtonDark = styled(Base)`
  background-color: ${({ color, theme }) => (color ? color : 'yellow')};
  color: 'blue';
  width: fit-content;
  border-radius: ${({ theme }) => theme.borderRadius};
  white-space: nowrap;

  :hover {
    background-color: ${({ color, theme }) => (color ? darken(0.1, color) : darken(0.1, 'yellow'))};
  }
`

export const ButtonFaded = styled(Base)`
  background-color: ${({ theme }) => theme.fadedButtonBackgroundColor};
  color: ${({ theme }) => theme.fadedButtonColor};
  white-space: nowrap;

  :hover {
    opacity: 0.5;
  }
`

export function ButtonPlusDull({ disabled, children, ...rest }) {
  return (
    <Dull {...rest}>
      <ContentWrapper>
        <Plus size={16} />
        <div style={{ display: 'flex', alignItems: 'center' }}>{children}</div>
      </ContentWrapper>
    </Dull>
  )
}

export function ButtonCustom({ children, bgColor, color, ...rest }) {
  return (
    <BaseCustom bg={bgColor} color={color} {...rest}>
      {children}
    </BaseCustom>
  )
}

export const OptionButton = styled.div`
  font-weight: 500;
  width: fit-content;
  white-space: nowrap;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.optionButtonBorderColor};
  background-color: ${({ active, theme }) => active && theme.optionButtonBackgroundColor};
  color: ${({ theme }) => theme.optionButtonColor};

  :hover {
    cursor: ${({ disabled }) => !disabled && 'pointer'};
  }
`
