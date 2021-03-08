import React, { useMemo } from 'react'
import styled from 'styled-components'
import Panel from '../Panel'
import { AutoColumn } from '../Column'
import { RowFixed } from '../Row'
import { TYPE } from '../../Theme'
import { usePairData } from '../../contexts/PairData'
import { formattedNum } from '../../utils'

const PriceCard = styled(Panel)`
  position: absolute;
  right: -220px;
  width: 220px;
  top: -20px;
  z-index: 9999;
  height: fit-content;
  background-color: ${({ theme }) => theme.priceBackgroundColor};
`

function formatPercent(rawPercent) {
  if (rawPercent < 0.01) {
    return '<1%'
  } else return parseFloat(rawPercent * 100).toFixed(0) + '%'
}

export default function AvaxPrice() {
  const usdtPair = usePairData('0x9ee0a4e21bd333a6bb2ab298194320b8daa26516')
  const pngPair = usePairData('0xd7538cabbf8605bde1f4901b47b8d42c61de0367')

  const totalLiquidity = useMemo(() => {
    return usdtPair
      ? usdtPair.trackedReserveUSD + pngPair.trackedReserveUSD
      : 0
  }, [usdtPair])

  const usdtPerPair = usdtPair ? parseFloat(usdtPair.token0Price).toFixed(2) : '-'
  const pngPerPair = pngPair ? (parseFloat(pngPair.token0Price) * parseFloat(usdtPair.token0Price).toFixed(2)).toFixed(2) : '-'

  return (
    <PriceCard>
      <AutoColumn gap="10px">
        <RowFixed>
          <TYPE.main>USDT/AVAX: {formattedNum(usdtPerPair, true)}</TYPE.main>
          <TYPE.light style={{ marginLeft: '10px' }}>
            {usdtPair && totalLiquidity ? formatPercent(usdtPair.trackedReserveUSD / totalLiquidity) : '-'}
          </TYPE.light>
        </RowFixed>
        <RowFixed>
          <TYPE.main>PNG/AVAX: {formattedNum(pngPerPair, true)}</TYPE.main>
          <TYPE.light style={{ marginLeft: '10px' }}>
            {pngPair && totalLiquidity ? formatPercent(pngPair.trackedReserveUSD / totalLiquidity) : '-'}
          </TYPE.light>
        </RowFixed>        
      </AutoColumn>
    </PriceCard>
  )
}
