import React from 'react'
import Back from '../common/back/Back'
import GameCard from './GameCard'
import OnlineGame from './OnlineGame'

const GamesHome = () => {
  return (
    <div>
      <Back title={'Explore Games'} />
      <GameCard />
      <OnlineGame />
    </div>
  )
}

export default GamesHome
