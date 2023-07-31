const Header = ({ firstSerie }) => {
  return (
    <>
      {firstSerie && (
        <div className='card text-bg-dark' style={{ maxWidth: '100%', height: '800px', maxHeight: '2000px', backgroundColor: 'black' }}>
          <div className='card-img-container d-flex justify-content-center align-items-center' style={{ height: '100%', backgroundColor: 'black' }}>
            <img src={firstSerie.image?.original} className='img-fluid rounded' style={{ maxWidth: '80%', maxHeight: '80%' }} alt='...' />
            <div className='card-img-overlay'>
              <h5 className='card-title text-warning'>{firstSerie.name}</h5>
              <p className='card-text text-white'>Rating: {firstSerie.rating?.average}/10</p>
              <a href={firstSerie.officialSite} target='_blank' className='card-text' style={{ textDecoration: 'underline white' }} rel='noreferrer'>
                <small className='text-white'>Official Site</small>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
