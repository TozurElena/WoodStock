import React from 'react'

import ContactStyle from '../style/Contact.css'

function Contact() {
  return(

    <section className='section_contact'>
      <div className="container w-50">
        <div className="row ">
          <h2>CONTACT US</h2>
        </div>
        <div className="row mt-5 ">
          <form action="" method="POST">
            <div className="row justify-content-center">
              <div className="col-10 col-md-5 mb-5">
                <input type="text" className="form-control  rounded-pill" name="name" placeholder="FIRST NAME"/>
              </div>
              <div className="col-10 col-md-5 mb-5">
                <input type="text" className="form-control rounded-pill" name="lastName" placeholder="LAST NAME"/>
              </div>
            </div>
            <div className="row justify-content-center">
              <div class="col-10 mb-5 ">
                <input type="email" className="form-control rounded-pill w-75" id="email" name="email" placeholder="MAIL ADRESS"
                  aria-describedby="email-help"/>
              </div>
            </div>        
            <div className="row justify-content-center">
              <div className="col-10 mb-3">
                <textarea className="form-control rounded-3" rows="10" placeholder="MESSAGE" name="message"></textarea>
              </div>
            </div>
            {/* <button type="submit" class="mon_btn btn btn-primary">Envoyer</button> */}
          </form>
        </div>
        
      </div>
    </section>
  )
}

export default Contact