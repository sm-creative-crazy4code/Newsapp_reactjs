//import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Navbar extends Component {
//   static propTypes = {second: third}

  render() {
    return (
      <div>


<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">NewsX</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Categories
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          
        <Link className="dropdown-item" to="/ business"> Business</Link>    
        <Link className="dropdown-item" to="/entertainment"> Entertainment</Link>    
        <Link className="dropdown-item" to="/general">General </Link>     
        <Link className="dropdown-item" to="/health">Health</Link>     
        <Link className="dropdown-item" to="/science"> Science</Link>    
        <Link className="dropdown-item" to="/sports"> Sports</Link>    
        <Link className="dropdown-item" to="/ technology"> Technology</Link>    
        </div>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-Link disabled">Disabled</ Link>
      </li> */}
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>










      </div>
    )
  }
}

