import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top " style={{ backgroundColor:"#fd5000",color:"white;" }} >
  <div className="container-fluid">
    <Link className="navbar-brand nav-item nav-link" to="/"><b style={{fontSize:"35px",padding:"0px 0px 0px 30px"}}>NE<span  style={{color:"#07294d"}}>WS</span></b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/countriceTable">CountriceTable</Link>
        </li> */}
         <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/news">All News </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/register">Register </Link>
        </li> */}
          <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/moviese">Moviese </Link>
        </li> */}
       
       
        
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default NavBar