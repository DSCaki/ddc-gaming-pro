import React from 'react'
import Back from "../common/back/Back"
import "./contact.css"
import Iframe from 'react-iframe'
const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5436.913074020907!2d81.85439027207119!3d7.339307903638723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2slk!4v1686368932433!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <Iframe url={map} />
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>286, Hair Mosque road Nintavur-09</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> aabith619@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +94 755 809 737</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK LINKEDIN INSTAGRAM GITHUB</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
