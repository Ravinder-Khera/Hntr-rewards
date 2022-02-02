import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import Popup from './popup';
import './navbar.css';

import { useMoralis } from "react-moralis";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Nav,
  Button
} from 'reactstrap';

import { Link } from 'react-router-dom';
export default function Headerbar() {

  let [isPopup, setIsPopup] = useState(false);
  const togglePopup = () => {
    setIsPopup(!isPopup);
  }

  const { authenticate, isAuthenticated,user, logout } = useMoralis();

  let userAddress;
  if (isAuthenticated) {
    console.log(user.attributes.accounts[0]);
     userAddress = user.attributes.accounts[0] ;
      
  }


  let disconnect = async () => {
    logout()
    console.log("log out");
  } 


  let accounts;
  const connect = async () => {  
    accounts = await window.ethereum.request({ 
      method: 'eth_requestAccounts' 
        }).catch((err)=> {
          console.log(err.code)
          })
    console.log(accounts);
  }

  

const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='header'>
        <div className='nav-container'>
          <Navbar
            color="transparent"
            dark
            expand="md"
            className='nav-navbar'
          >
            <NavbarBrand className='brand-nav' href="/">
            <div>
              <img className='img-fluid' src={ logo } alt=""/>$ HNTR
            </div>
            </NavbarBrand>
            <div className='order-md-2 '>
                {isAuthenticated ? (
                  <Button className='connected-to-address'> 
                  <h6 className='connected-to-heading'>Connected to</h6>
                  <p className='mb-0'>{ userAddress.substring(0,5)+"..."+ userAddress.slice(-5) }</p>
                  </Button>
                  
                
              ) : (
                <Button
                  color="light"
                  className='nav-btn'
                  onClick={togglePopup}
                  >
                  Connect
               </Button>
              )}

                      {isPopup && <Popup
                              content={<>

                                
                                    <div>
                                      <Button
                                  color="light"
                                  className='nav-btn'
                                  onClick={() => authenticate({ connect })}
                                  >
                                  Meta Mask
                              </Button>

                                      <Button
                                  color="light"
                                  className='nav-btn'
                                  onClick={() => authenticate({ provider: "walletconnect" })}
                                  >
                                  wallet connect
                              </Button>
                                  </div>
                                  

                              </>}
                              handleClose={togglePopup}
                            />}
                   
            </div>
        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen}    navbar>
                    <Nav className="ml-auto" navbar>
                    <div className='home-menu-nav'>
                            <NavItem className='home-menu'>
                                
                                <Link to="/" className='nav-link'> Home</Link>
                                
                                <Link to="/menu" className='nav-link'> Menu</Link>
                                {isAuthenticated  &&
                                <Button onClick={ disconnect }>Logout</Button>
                                }

                            </NavItem>
                </div>

                    </Nav>
                </Collapse> 
            
            
            </Navbar>

           
        </div>
        </div>

    );
}
