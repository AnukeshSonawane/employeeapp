import React from 'react'



function Navbar() {
    return(

<header>

<nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className='logo'>
            <img src={"./godrejlogo.png"} height="100"></img>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"><b>Home</b></a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/employee"><b>Employees</b></a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/status">Status</a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="/register">Register Emp</a>
              </li>  */}
              <li className="nav-item">
                <a className="nav-link" href="/department"><b>Department</b></a>
              </li> 
              {/* <li className="nav-item">
                <a className="nav-link" href="/register2">Register Dept</a>
              </li>  */}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      </header>
    )
}


export default Navbar;