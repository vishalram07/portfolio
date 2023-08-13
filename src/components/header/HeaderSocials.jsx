import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

import {RiInstagramFill} from 'react-icons/ri'

import {TfiTwitterAlt} from 'react-icons/tfi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' ><BsLinkedin /></a>
        <a href='https://github.com' ><FaGithub /></a>
        <a href='https://dribbble.com' ><RiInstagramFill /></a>
        <a href='https://dribbble.com' ><TfiTwitterAlt /></a>
    </div>
  )
}

export default HeaderSocials