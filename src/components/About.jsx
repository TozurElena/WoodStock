import React from 'react'
import imgAbout from "../img/chaise.jpg"
import AboutStyle from '../style/About.css'

function About() {
  return(
    <section className='section_about container'>
      <div className='row'>
        <div className='col-md-6 col-12 text-centre'>
          <img className='img-fluid' src={imgAbout} alt="About"/>
        </div>
        
        <div className='col-md-6 col-12'>
            <div className='row ps-5'>
              <h2 className='mb-5'>ABOUT US</h2>
              <p className="text_about">Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a
              glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my
              ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
              </p>
            </div>
            <div className='row'>
              <button className='btn btn-light btn_about mt-5'>LEARN MORE</button>
              <div className='line'></div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About

