import React from 'react'
import imgShop from "../img/wood-restaurant.jpg"
import ShopStyle from '../style/About.css'

function Shop() {
  return(
    <section className='section_shop container'>
      <div className='row'>
            
        <div className='col-md-6 col-12'>
            <div className='row ps-5'>
              <h2 className='mb-5'>SHOP</h2>
              <p className="text_about">Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a
              glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my
              ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
              </p>
            </div>
            <div className='row'>
              <button className='btn btn-light btn_about mt-5'>Go Shopping</button>
              <div className='line'></div>
            </div>
          </div>
        <div className='col-md-6 col-12 text-centre'>
          <img className='img-fluid' src={imgShop} alt="Shop"/>
        </div>
               
      </div>
    </section>
  )
}

export default Shop