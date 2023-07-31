import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  const [series, setSeries] = useState([])
  const [search, setSearch] = useState('')
  const [firstSerieResponse, setfirstSerieResponse] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(15)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = series.slice(indexOfFirstPost, indexOfLastPost)
  const isSmallScreen = window.innerWidth <= 576
  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => {
        setSeries(data)
        setfirstSerieResponse(data[Math.floor(Math.random() * data.length)])
      })
  }, [])

  const handleSearchResult = (data) => {
    setSearch(data)
  }

  const filteredSeries = currentPosts.filter(serie => {
    return serie.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className='bg-dark'>
      <div className='mt-5 mb-5'>
        <Header firstSerie={firstSerieResponse} />
        <Navbar onSearch={handleSearchResult} />
      </div>
      <div className='container'>
        <div className='row '>
          {
            filteredSeries.map(serie => (
              <div className='col-md-4' key={serie.id}>
                <div className='card mb-3 bg-dark border border-dark' style={{ maxWidth: '540px' }}>
                  <div className='row g-0'>
                    <div className={`col-md-4 d-flex align-items-center ${isSmallScreen ? 'justify-content-center' : ''} `}>
                      <img style={{ width: '200px', height: '130px' }} src={serie.image == null ? 'src/images/no-image.png' : serie.image.medium} className='img-fluid rounded-start' alt='Serie´s image' />
                    </div>
                    <div className={`col-md-8 ${isSmallScreen ? 'text-center' : ''}`}>
                      <div className='card-body'>
                        <Link style={{ textDecorationLine: 'none' }} to={`/details/${serie.id}`}><h5 className='card-title text-warning'>{serie.name}</h5></Link>
                        <p className='card-text text-white'>Rating: {serie.rating?.average}/10</p>
                        <p className='card-text'><small className='text-white'>Premiered: {serie.premiered}</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            )
          }
          <div className='cold-md-12 d-flex justify-content-center'>
            <Pagination postsPerPage={postsPerPage} totalPosts={series.length} paginate={paginate} currentPage={currentPage} />
          </div>
          <Footer />

        </div>
      </div>
    </div>
  )
}

export default Home
