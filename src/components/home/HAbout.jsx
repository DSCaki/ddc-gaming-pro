import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import { gamesCard } from '../../dummydata'
import Title from '../common/title/Title'
import './habout.css'
import { Link } from 'react-router-dom'

const HAbout = () => {
  return (
    <>
      <section className="homeAbout">
        <div className="container1">
          <Title subtitle={'Our Games'} title={'Explore Most Popular Game'} />
          <div className='gamesCard1'>
            <div className='grid2'>
              {gamesCard.slice(0,3).map((val) => (
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
          </div>
        </div>
      </section>
    </>
  )
}

export default HAbout
