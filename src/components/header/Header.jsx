import React from 'react'
import CTA from './CTA'
import ME from '../../assests/My project-1.png'
import HeaderSocials from './HeaderSocials'
import './header.css'
import{Cursor ,useTypewriter} from 'react-simple-typewriter';

const Header = () => {
  const [text ,count] = useTypewriter({
    words: ["App Developer","Penetration Tester","UI/UX Designer","Video Editor","Content Creator"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Vishal Ram V A</h1>
        <h2>
          <span>{text}</span>
          <Cursor cursorColor="Colors.White" />
        </h2>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header