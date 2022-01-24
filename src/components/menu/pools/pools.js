import { Button, InputGroupText } from 'reactstrap';
import { CardGroup, Card, CardBody, CardTitle, CardText  } from 'reactstrap';
import React from 'react';
import logo from '../../../assets/logo.png';
import harvest from '../../../assets/harvest-icon.png';
import './pools.css'

import {
    Input,
    InputGroup
} from 'reactstrap';

export default function Home() {

     return (
          <div className='home'>
          <div className='content-div'>
  <div className='content-container'>
  <div>
      <img src={ harvest } className='harvest-icon' alt=""/>
    </div>
    <h2 className='content-h2'>Select Your Favourite Crops</h2>    
  </div>
</div>
{/* ---------------  cards  -------------------- */}
        <div>  
        <div className='card-container'>
        <CardGroup>
          <Card>
            
            <CardBody className='pools-card'>
            <div className='card-icon'>
              <img src={ logo } alt=""/>
            </div>
              
              <CardTitle tag="h5">
              USDT/HNTR
              </CardTitle>
              <CardTitle>
              Deposit HNTR-USDT-LP
              </CardTitle>
              <CardText>
              Earn HNTR
              </CardText>
              <Button className='token-btn'>
                Select
              </Button>

            

            <InputGroup>
            <Input type='text' readOnly = {true} name="input" id="input" placeholder="EROI" />
            <InputGroupText>80%</InputGroupText>
            </InputGroup>
            </CardBody>
          </Card>
          
          
        </CardGroup>
        </div>
        
              </div>
          </div>
      );
  }
  