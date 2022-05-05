import React from 'react'
import imgFooter from '../img/logoFooter.svg'
import FooterStyle from '../style/Footer.css'

function Footer() {
  return(
    <footer className='footer d-flex justify-content-center align-items-center'>
      <img className='w-25' src={imgFooter} alt="Logo"/>
      
    </footer>
  )
} 

export default Footer