import { Button } from 'reactstrap';
import { CardGroup, Card, CardBody, CardTitle, CardText  } from 'reactstrap';
import React from 'react';
import logo from '../../assets/logo.png';



export default function Home() {

     return (
        <div className='home'>
              <div className='content-div'>
                  <div className='content-container'>
                      <div>
                        <img src={ logo } alt=""/>
                      </div>
                        <h2 className='content-h2'>Claim Tokens </h2>
                        <p className='content-p'> Tokens Released As Per Vesting Schedule</p>
                  </div>
              </div>
{/* ---------------  cards  -------------------- */}
          <div>  
              <div className='card-container'>
                  <CardGroup>
                    <Card>
                      
                      <CardBody>
                        <div>
                          <img src={ logo } alt=""/>
                        </div>

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
        </div>
      );
  }
  