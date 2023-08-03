import React from 'react'
import '../css/Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = []
  for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
    pageNumbers.push(index)
  }
  return (
    <div className='col-md-12 d-flex justify-content-center'>
      <ul className='pagination'>
        {
            pageNumbers.map(number => (
              <li key={number} className={`page-item ${currentPage === number ? ' active' : ''}`}>
                <a onClick={() => paginate(number)} className='page-link text-dark'>
                  {number}
                </a>
              </li>
            ))
          }
      </ul>
    </div>
  )
}

export default Pagination
