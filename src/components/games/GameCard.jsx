import React from 'react'
import './games.css'
import {gamesCard} from '../../dummydata'
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const GameCard = () => {
  return (
    <>
      <section className='gamesCard'>
        <div className='container grid2'>
          {gamesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                <div className='text'>
                  <h1>{val.gamesName}</h1>
                  <div className='rate'>
                    <AiFillStar className='i'/>
                    <AiFillStar className='i'/>
                    <AiFillStar className='i'/>
                    <AiFillStar className='i'/>
                    <AiFillStar className='i'/>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                </div>
                </div>
              </div>
              <Link to ="https://cracked-games.org/">
              <button className='outline-btn'>DOWNLOAD NOW !</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default GameCard
