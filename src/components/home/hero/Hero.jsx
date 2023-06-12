import React from 'react'
import './hero.css'
import {FaLongArrowAltRight} from 'react-icons/fa'
import Title from '../../common/title/Title'

const Hero = () => {
  return (
    <>
        <section className="hero">
            <div className="container">
                <div className="row">
                    <Title subtitle={'WELCOME TO GAMING-PRO'} title={'Best Gaming Place'} />
                    <p>
                        Welcome! This course is an introduction to the primary concepts of gaming, and an exploration of how these basic concepts affect the way gamers interact with our games.
                         In this course you will understand what defines a “game” and the mechanics and rules behind different types of games.
                    </p>
                    <div className="button">
                        <button className="primary-btn">
                            GET START NOW<FaLongArrowAltRight className='i' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="marigin"></div>
    </>
  )
}

export default Hero
