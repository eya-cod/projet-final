import React from 'react'
import {Fragment } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import LoginModal from './auth/LoginModal'
import RegisterModal from './auth/RegisterModal'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


import { logout } from '../actions/authActions';


export default function AppNavBar() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  
  const user = useSelector((state) => state.authReducer.user);
  
  const logoutUser = () => {
    dispatch(logout());
  };
  const authLinks = (
    <Fragment>
      <ReactBootStrap.Nav >
        <Link to="/profile">
          <span >
            <strong style={{color:"grey"}}>{user ? `Welcome ${user.name}` : null}</strong>
          </span>
        </Link>
      </ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link style={{color:"grey"}} href="#" onClick={logoutUser} >
    
      Logout
      </ReactBootStrap.Nav.Link>
    </Fragment>
  );
  const guestLinks = (
    
    <div className="functional-buttons">
    <ul>
    <li><a href="#register"><RegisterModal /></a></li>
      <li><a href="#login"><LoginModal /></a></li>
      
    </ul>
  </div>
  );
  return (
    <div>
      
      <header className>
      <nav className="navbar navbar-expand-lg">
      <div className="container">
      <div >
      <a  className="navbar-brand" href="/"><h2 style={{color:"#D1B174"}}>NEST <em>Immo</em></h2></a>
                    
                  </div>
                  
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Acceuil
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/listeBiens">Nos Biens</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/About">A Propos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">Nos Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contacts</a>
                </li>
              </ul>
            </div>
            {isAuth ? authLinks : guestLinks}
          </div>
        </nav>
        </header>
        </div>
    )
  }

  
