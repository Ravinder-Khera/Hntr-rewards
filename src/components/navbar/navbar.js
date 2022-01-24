import logo from '../../assets/logo.png';
import React, { useState } from 'react';
import Popup from './popup';


import { useMoralis } from "react-moralis";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';

import { Link } from 'react-router-dom';



export default function Headerbar() {

  const { authenticate, isAuthenticated,user, logout } = useMoralis();

  const [isPopup, setIsPopup] = useState(false);
  const togglePopup = () => {
    setIsPopup(!isPopup);
  }

  let userAddress;
  if (isAuthenticated) {
     console.log(user.attributes.accounts[0]);
     userAddress = user.attributes.accounts[0] ;
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
    const [isOpen, setIsOpen] = useState(false);
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
            <div className='order-md-2'>
            {isAuthenticated ? (
              
            <Button 
            onClick={togglePopup} > 
            Connected 
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

                              <Button
                                  color="light"
                                  className='nav-btn'
                                  onClick={connect}
                                  >
                                  Meta Mask
                              </Button>
                              
                              {isAuthenticated ? (
                                <div>
                                <h5>Welcome { userAddress }</h5>
                                <Button onClick={() => logout()}>Logout</Button>
                              </div>

                              ) : (
                              <Button
                                  color="light"
                                  className='nav-btn'
                                  onClick={() => authenticate({ provider: "walletconnect" })}
                                  >
                                  wallet connect
                              </Button>
                              )}
                           
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
                            </NavItem>
                </div>
                    
                    </Nav>
                </Collapse>
            
            </Navbar>
        </div>
        </div>
    );
}
