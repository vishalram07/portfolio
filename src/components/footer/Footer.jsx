import React from 'react'
import './footer.css'
import {FaInstagram, FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>VishalRam</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>        
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/vishal-ram-v-a-16250b25a/"><FaLinkedin /></a>
        <a href="https://www.instagram.com/_vishalram_/"><FaInstagram /></a>
        <a href="https://twitter.com/VishalR34387677"><FaTwitter /></a>
        <a href="https://github.com/vishalram07"><FaGithub /></a>        
      </div>
      <div className="footer_copyright">
        <small>&copy; VishalRam Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer