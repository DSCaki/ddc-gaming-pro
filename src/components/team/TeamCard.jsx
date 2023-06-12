import React from 'react'
import {team} from '../../dummydata'
import './team.css'
import { TiSocialLinkedin } from 'react-icons/ti'
import { DiGithub } from 'react-icons/di'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { TiSocialInstagramCircular } from 'react-icons/ti'

const TeamCard = () => {
  return (
    <>
        {team.map((val) =>(
            <div className="items shadow">
                <div className="img">
                    <img src={val.cover} alt="" />
                    <div className="overlay">
                        <TiSocialFacebookCircular className='icon1 i'/>
                        <TiSocialInstagramCircular className='icon1 i'/>
                        <TiSocialLinkedin className='icon1 i'/>
                        <DiGithub className='icon1 i'/>
                    </div>
                </div>
                <div className="details">
                    <h2>{val.name}</h2>
                    <p>{val.work}</p>
                </div>
            </div>
        ))}
    </>
  )
}

export default TeamCard
