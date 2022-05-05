import React from 'react'
import logoMax from "../img/logoBig.svg"
import TitleStyle from '../style/Title.css'

function Title() {
  return(
    <section className='section_title container-fluid'>
      <div className='row'>
        <div className='col'><img src={logoMax} alt="logoWoodStock"/></div>
      </div>
    </section>
  )
}

export default Title