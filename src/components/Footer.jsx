import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <footer>
            <article>
              <h2>¡Contáctame!</h2>
              <div>
                <ul className='d-flex justify-content-items'>
                  <li><a href='https://www.linkedin.com/in/ricardoglezv/' target='_blank' rel='noreferrer'><img src='./images/logo-linkedin.png' alt='logo linkedin' /></a></li>
                  <li><a href='mailto:ricardoisrael.gonzalez@gmail.com'><img src='../../src/images/logo-gmail.png' alt='logo gmail' /></a></li>
                  <li><a href='https://github.com/RicardoGonzalez17' target='_blank' rel='noreferrer'><img src='./images/github.png' alt='logo github' /></a></li>
                </ul>
              </div>
            </article>
            <p className='text-white'>Powered by Ricardo González</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer
