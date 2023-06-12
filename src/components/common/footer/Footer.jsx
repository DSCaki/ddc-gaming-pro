import React from 'react'
import './footer.css'
import {FaPaperPlane} from 'react-icons/fa'
import { TiSocialLinkedin } from 'react-icons/ti'
import { DiGithub } from 'react-icons/di'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { TiSocialInstagramCircular } from 'react-icons/ti'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {BsTelephoneFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <FaPaperPlane className='paper'/>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>GAMING-PRO</h1>
            <span>BEST GAMING PLACE</span>
            <p>A small Gaminging Place and its based on most Popular Website || CRACKED_GAMES.org || and you may FOllow & you can Get newUpdates.</p>

            <TiSocialFacebookCircular className='icon1 i'/>
            <TiSocialInstagramCircular className='icon1 i'/>
            <Link to="https://www.linkedin.com/in/akthar-aki-578b45129/">
            <TiSocialLinkedin className='icon1 i'/>
            </Link>
            <Link to="https://github.com/DSCaki">
            <DiGithub className='icon1 i'/>
            </Link>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>All Games</li>
              <li>News</li>
              <li>Test</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>All Games</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <FaMapMarkerAlt className='icon1'/>
                286, Hair Mosque road NTR-o9
              </li>
              <li>
                <BsTelephoneFill className='icon1'/>
                +94 755 809 737
              </li>
              <li>
                <FaPaperPlane className='icon1'/>
                aabith619@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Akthar aki.
        </p>
      </div>
    </>
  )
}

export default Footer
