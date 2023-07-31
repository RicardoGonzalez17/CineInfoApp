import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'
import Navbar from '../components/Navbar'
import Seasons from '../components/Seasons'

const Details = () => {
  const { id } = useParams()
  const [serie, setSerie] = useState(null)
  const [cast, setCast] = useState(null)
  const [season, setSeason] = useState(null)

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setSerie(data))
  }, [id])
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then(response => response.json())
      .then(data => setCast(data))
  }, [id])
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
      .then(response => response.json())
      .then(data => setSeason(data))
  }, [id])
  return (
    <div className='bg-dark'>
      <Navbar />
      <br />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='mb-3 bg-dark text-white'>
              <div className='row g-0'>
                <div className='col-md-12 d-flex justify-content-center '>
                  <img src={serie?.image?.medium} className='img-fluid' alt='...' />
                </div>
              </div>
              <div className='offset-2 col-md-8'>
                <div className='card-body '>
                  <h5 className='card-title text-warning'>{serie?.name}</h5>
                  <div className='card-text' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(serie?.summary) }} />
                  <p className='card-text'><small className='text-warning'>Rating: {serie?.rating?.average}/10</small></p>
                  <p className='card-text'><small className='text-white'>Episodes:</small></p>
                  <Seasons allSeasons={season} />
                  <p className='card-text'><small className='text-white'>Cast:</small></p>
                  <div className='container'>
                    <div className='row'>

                      {cast?.map((castActual) => (
                        <div className='col-md-2 text-center' key={castActual?.person.id}>
                          <div className='mb-3'>
                            <img
                              src={castActual?.person.image?.medium}
                              className='img-fluid rounded'
                              alt='...'
                            />
                            <small className='text-white'>{castActual?.person.name} </small>
                          </div>
                        </div>
                      )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
