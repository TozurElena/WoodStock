import React from 'react'
import imgTeam from "../img/team.jpg"
import imgLogo from "../img/logo.svg"
import CreativeStyle from '../style/Creative.css'

function Creative() {
  return(

    <section className='section_creativ'>
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-5">
            <img className="float-end img-fluid" src={imgTeam} alt="team"/>
            
          </div>
          <div className="col-7">
            <img className="mt-3  float-end" src={imgLogo} alt="Logo"/>
                       
            <div className="row mt-5 team_text">
              <div className="ct_title"><p>CREATIVE TEAM</p></div> 
              <h2 className="mb-5">GOOG MINDSET</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div className="row">
              <button className="btn btn-light btn_team mt-5">Meat the team</button>
              <div className="line_team"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Creative
