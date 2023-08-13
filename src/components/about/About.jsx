import React from 'react'

import './About.css'
import ME from '../../assests/Me-PIC.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
              <img src={ME} alt='About Me'></img>
          </div>
        </div>
        <div className='about_content'>
          {/* <div className='about_cards'>
            <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>3+ years working</small>
            </article> 
            <article className='about_card'>
            <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
            </article> 
            <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>80+ completed</small>
            </article> 
          </div> */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur esse, odio necessitatibus vitae nihil. Officiis ipsam quidem quaerat eos repellat asperiores commodi, voluptatum consectetur excepturi et. Iste, quas neque!</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About