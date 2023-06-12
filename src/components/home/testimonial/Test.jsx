import React from 'react'
import { testimonal } from "../../../dummydata"
import Title from "../../common/title/Title"
import {BsFillChatQuoteFill} from 'react-icons/bs'
import "./style.css"

const Test = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Title subtitle='TESTIMONIAL' title='Our Successful Players' />

          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <BsFillChatQuoteFill  className='i icons'/>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Test
