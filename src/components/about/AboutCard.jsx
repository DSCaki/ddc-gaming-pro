import React from 'react'
import Title from '../common/title/Title'
import {homeAbout} from '../../dummydata'
import pexel from '../../img/pexels.jpg'
import AWrapper from './AWrapper'
import './about.css'

const AboutCard = () => {
  return (
    <>
    <section className="aboutHome">
      <div className="container flexSB">
        <div className="left row">
          <img src={pexel} alt="" />
        </div>
        <div className="right row">
            <Title subtitle={'LETS PLAY'} title={'Enjoy with Online Play'} />
            <div className="items">{homeAbout.map((val) =>(
              <div className="item flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h2>{val.title}</h2>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}</div>
        </div>
      </div>
    </section>
    <AWrapper />
    </>
  )
}

export default AboutCard
