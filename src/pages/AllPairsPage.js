import React, { useEffect, useState } from 'react'
import 'feather-icons'

import { TYPE } from '../Theme'
import Panel from '../components/Panel'
import { useAllPairData } from '../contexts/PairData'
import PairList from '../components/PairList'
import { PageWrapper, FullWrapper } from '../components'
import { RowBetween, AutoRow } from '../components/Row'
import Search from '../components/Search'
import { useMedia } from 'react-use'
import QuestionHelper from '../components/QuestionHelper'
import CheckBox from '../components/Checkbox'

function AllPairsPage() {
  const allPairs = useAllPairData()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const trackText = `USD amounts may be inaccurate in low liquidity pairs or pairs without AVAX or stablecoins backing.`

  const rewardText = `Liquidity providers are rewarded in PNG for pairings`

  const below800 = useMedia('(max-width: 800px)')

  const [useTracked, setUseTracked] = useState(true)

  const [useRewarded, setUseRewarded] = useState(true)

  return (
    <PageWrapper>
      <FullWrapper>
        <RowBetween>
          <TYPE.largeHeader>Top Pairs</TYPE.largeHeader>
          {!below800 && <Search small={true} />}
        </RowBetween>
        <AutoRow gap="4px">
          <CheckBox checked={useTracked} setChecked={() => setUseTracked(!useTracked)} text={'Stable'} />
          <QuestionHelper text={trackText} />
          <CheckBox checked={useRewarded} setChecked={() => setUseRewarded(!useRewarded)} text={'LP Reward'} />
          <QuestionHelper text={rewardText} />
        </AutoRow>
        <Panel style={{ padding: below800 && '1rem 0 0 0 ' }}>
          <PairList pairs={allPairs} disbaleLinks={true} maxItems={50} useTracked={useTracked} useRewarded={useRewarded} />
        </Panel>
      </FullWrapper>
    </PageWrapper>
  )
}

export default AllPairsPage
