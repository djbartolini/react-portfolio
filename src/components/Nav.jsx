import React from "react";
import logo from "../../public/images/dev-favicon.svg"

function Nav({ currentPage, handlePageChange, pages }) {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src={logo} alt="logo" id="logo" /></a>
        <div>
          <h1>Daniel Bartolini</h1>
          <p>Web Development</p>
        </div>
        <div className="navbar">
          <div className="navbar" id='nav'>
            {pages.map(page => (
              <article key={page} className='nav-item'>
                <a
                  href={`#${page.toLowerCase()}`}
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page ? 'nav-link-active' : 'nav-link'}
                  id='nav-link'
                >
                  {page}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;