import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-12'>
          <footer>
            <article id='art-contacto'>
              <h5 id='contacto'>¡Contáctame!</h5>
              <div id='div-contacto'>
                <ul id='ul-contacto'>
                  <li><a href='https://www.linkedin.com/in/ricardoglezv/' target='_blank' rel='noreferrer'><img src='/src/images/logo-linkedin.png' alt='logo linkedin' /></a></li>
                  <li><a href='mailto:ricardoisrael.gonzalez@gmail.com'><img src='/src/images/logo-gmail.png' alt='logo gmail' /></a></li>
                  <li><a href='https://github.com/RicardoGonzalez17' target='_blank' rel='noreferrer'><img src='/src/images/github.png' alt='logo github' /></a></li>
                </ul>
              </div>
            </article>
            <p>Powered by Ricardo González</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer
