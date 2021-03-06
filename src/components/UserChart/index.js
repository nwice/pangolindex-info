import React, { useState } from 'react'
import styled from 'styled-components'
import { Area, XAxis, YAxis, ResponsiveContainer, Tooltip, AreaChart } from 'recharts'
import { AutoRow, RowBetween } from '../Row'
import { toK, toNiceDate, toNiceDateYear, formattedNum, getTimeframe } from '../../utils'
import { OptionButton } from '../ButtonStyled'
import { darken } from 'polished'
import { useMedia } from 'react-use'
import { timeframeOptions } from '../../constants'
import DropdownSelect from '../DropdownSelect'
import { useUserLiquidityChart } from '../../contexts/User'
import LocalLoader from '../LocalLoader'
import { useDarkModeManager } from '../../contexts/LocalStorage'
import { TYPE } from '../../Theme'
import { useEthPrice } from '../../contexts/GlobalData'

const ChartWrapper = styled.div`
  height: 100%;
  max-height: 390px;

  @media screen and (max-width: 600px) {
    min-height: 200px;
  }
`

const StyledTooltip = styled(Tooltip)`
  contentStyle: {
    padding: '10px 14px',
    borderRadius: 10,
    borderColor: 'pink',
    color: 'yellow',
  }
`

const tooltip = ``

const stroke = `${({ theme }) => theme.color}`

const Stop = styled.stop`
  stopColor=${({ theme }) => theme.customColor};
`

const UserChart = ({ account }) => {
  const chartData = useUserLiquidityChart(account)

  const [timeWindow, setTimeWindow] = useState(timeframeOptions.ALL_TIME)
  let utcStartTime = getTimeframe(timeWindow)

  const below600 = useMedia('(max-width: 600px)')
  const above1600 = useMedia('(min-width: 1600px)')

  const meme = 'blue'

  const domain = [(dataMin) => (dataMin > utcStartTime ? dataMin : utcStartTime), 'dataMax']

  const aspect = above1600 ? 60 / 12 : below600 ? 60 / 42 : 60 / 16

  const [darkMode] = useDarkModeManager()
  const [ethPrice] = useEthPrice()

  return (
    <ChartWrapper>
      {below600 ? (
        <RowBetween mb={40}>
          <div />
          <DropdownSelect options={timeframeOptions} active={timeWindow} setActive={setTimeWindow} color={'#ff007a'} />
        </RowBetween>
      ) : (
          <RowBetween mb={40}>
            <AutoRow gap="10px">
              <TYPE.main>Liquidity Value</TYPE.main>
            </AutoRow>
            <AutoRow justify="flex-end" gap="4px">
              <OptionButton
                active={timeWindow === timeframeOptions.MONTH}
                onClick={() => setTimeWindow(timeframeOptions.MONTH)}
              >
                1M
            </OptionButton>
              <OptionButton
                active={timeWindow === timeframeOptions.WEEK}
                onClick={() => setTimeWindow(timeframeOptions.WEEK)}
              >
                1W
            </OptionButton>
              <OptionButton
                active={timeWindow === timeframeOptions.ALL_TIME}
                onClick={() => setTimeWindow(timeframeOptions.ALL_TIME)}
              >
                All
            </OptionButton>
            </AutoRow>
          </RowBetween>
        )}
      {chartData ? (
        <ResponsiveContainer aspect={aspect} style={{ height: 'inherit' }}>
          <AreaChart margin={{ top: 0, right: 10, bottom: 6, left: 0 }} barCategoryGap={1} data={chartData}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="5%" stopOpacity={0.35} />
                <Stop offset="95%" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              tickLine={false}
              axisLine={false}
              interval="preserveEnd"
              tickMargin={16}
              minTickGap={0}
              tickFormatter={(tick) => toNiceDate(tick)}
              dataKey="date"
              tick={meme}
              type={'number'}
              domain={domain}
            />
            <YAxis
              type="number"
              orientation="right"
              tickFormatter={(tick) => '$' + toK(tick * ethPrice)}
              axisLine={false}
              tickLine={false}
              interval="preserveEnd"
              minTickGap={6}
              yAxisId={0}
              tick={meme}
            />
            <StyledTooltip
              cursor={true}
              formatter={(val) => formattedNum(val * ethPrice, true)}
              labelFormatter={(label) => toNiceDateYear(label)}
              labelStyle={{ paddingTop: 4 }}
              wrapperStyle={{ top: -70, left: -10 }}  
            />
            <Area
              key={'other'}
              dataKey={'valueUSD'}
              stackId="2"
              strokeWidth={2}
              dot={false}
              type="monotone"
              name={'Liquidity'}
              yAxisId={0}
              stroke={stroke}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
          <LocalLoader />
        )}
    </ChartWrapper>
  )
}

export default UserChart
