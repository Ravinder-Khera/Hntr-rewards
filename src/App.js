import './App.css';

import logo from './assets/logo.png';
import Headerbar from './components/navbar';
import { Button } from 'reactstrap';
import { CardGroup, Card, CardBody, CardTitle, CardText  } from 'reactstrap';

import React from "react";


function App() {


 
  return (
    <div className="App">

     
              
    {/* ---------------------- navbar ----------------------------------- */}
  
  <Headerbar />
  

{/* ------------------------------- content  -------------------------------------------- */}
<div className='content-div'>
  <div className='content-container'>
  <div>
      <img src={ logo } alt=""/>
    </div>
    <h2 className='content-h2'>HNTR Token Rewarding is Ready</h2>
    <p className='content-p'>Stake --- tokens to claim the future of HNTR!</p>
  </div>
</div>
{/* ---------------  cards  -------------------- */}
            
        <div className='card-container'>
        <CardGroup>
          <Card>
            
            <CardBody>
            {/* <div>
              <img src={ logo } alt=""/>
            </div> */}
              <CardText>
              Your Wallet Balance
              </CardText>
              <CardTitle tag="h5">
                LOCKED
              </CardTitle>
              
            </CardBody>
            <div className='card-bottom'>
            <CardText>
            Pending harvest
              </CardText>

              <CardText>
                    0.00 HNTR
              </CardText>
              </div>
          </Card>
          
          <Card>
            
            <CardBody>
              <CardText>
                Total HNTR Supply
              </CardText>
              <CardTitle tag="h5">       
                  Locked
              </CardTitle>
            </CardBody>
            <div className='card-bottom'>
            <CardText>
                New rewards per block
              </CardText>

              <CardText>
                    0.00 HNTR
              </CardText>
              </div>
          </Card>
        </CardGroup>
        </div>
        <Button className='token-btn'>
        Get HNTR-USDT LP Tokens
              </Button>


            
</div>
  );
}

export default App;

