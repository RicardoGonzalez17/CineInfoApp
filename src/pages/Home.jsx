import { useState, useEffect } from 'react'

const Home = () => {
  const [series, setSeries] = useState([])
  const today = new Date()
  const day = today.getDate()
  const month = (today.getMonth() + 1).toString().length < 2 ? `0${today.getMonth() + 1}` : today.getMonth() + 1
  const year = today.getFullYear()
  useEffect(() => {
    const todayWithFormat = `${year}-${month}-${day}`
    fetch(`https://api.tvmaze.com/schedule/web?date=${todayWithFormat}&country=US`)
      .then(response => response.json())
      .then(data => setSeries(data))
  }, [])
  const isSmallScreen = window.innerWidth <= 576
  return (
    <>
      <br />
      <div className='container'>
        <div className='row'>
          {
            series.map(serie => (
              <div className='col-md-6' key={serie.id}>
                <div className='card mb-3' style={{ maxWidth: '540px' }}>
                  <div className='row g-0'>
                    <div className={`col-md-4 d-flex align-items-center ${isSmallScreen ? 'justify-content-center' : ''} `}>
                      <img style={{ width: '200px', height: '130px' }} src={serie.image == null ? 'src/images/no-image.png' : serie.image.medium} className='img-fluid rounded-start' alt='Serie´s image' />
                    </div>
                    <div className={`col-md-8 ${isSmallScreen ? 'text-center' : ''}`}>
                      <div className='card-body'>
                        <h5 className='card-title'>{serie.name}</h5>
                        <p className='card-text'>Season: {serie.season} Number: {serie.number}</p>
                        <p className='card-text'><small className='text-body-secondary'>Air time: serie.airtime</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            )
          }
        </div>
      </div>
    </>
  )
}

export default Home
