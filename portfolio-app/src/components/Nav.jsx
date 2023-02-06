import React from "react";

function Nav({ currentPage, handlePageChange, pages }) {
  return (
    <ul className="nav nav-tabs container-fluid justify-content-center" id='nav'>
      {pages.map(page => (
        <li key={page} className='nav-item'>
          <a
            href={`#${page.toLowerCase()}`}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? 'nav-link active text-dark' : 'nav-link'}
            id='nav-link'
          >
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;