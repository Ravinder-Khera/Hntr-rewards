import { Button } from 'reactstrap';
import { CardGroup, Card, CardBody, CardTitle, CardText  } from 'reactstrap';
import React, {useState } from 'react';
import logo from '../../../assets/logo.png';
import harvest from '../../../assets/harvest-icon.png';
import './pool1.css'
import PoolPopup from './poolPopUp';
import NumericInput from 'react-numeric-input';

export default function Pool() {

  const availableWithdraw = 1234;
  let [ setWithdraw ] = useState(""); 
  let [withdrawHntrUSD, SetwithdrawHntrUSD] = useState("");
  setWithdraw = () => {
    SetwithdrawHntrUSD(availableWithdraw);
  };

  const availableDeposit = 123;
  let [ setDeposit] = useState("");
  let [depositHntrUSD, SetdepositHntrUSD] = useState("");
   setDeposit = () => {
    SetdepositHntrUSD(availableDeposit)
  };


  const [isPoolPopup, setIsPoolPopup] = useState(false);
  const togglePoolPopup = () => {
    setIsPoolPopup(!isPoolPopup);
  }

  const [isPoolPopup1, setIsPoolPopup1] = useState(false);
  const togglePoolPopup1 = () => {
    setIsPoolPopup1(!isPoolPopup1);
  }

     return (
          <div className='home'>
          <div className='content-div'>
  <div className='content-container'>
  <div>
      <img src={ harvest } className='harvest-icon' alt=""/>
    </div>
    <h2 className='content-h2'>USDT/HNTR</h2>
    <p className='content-p'>Deposit HNTR-USDT-LP Tokens and earn HNTR</p> 
  </div>
</div>
{/* ---------------  cards  -------------------- */}
<div>  
        <div className='card-container'>
        <CardGroup>
          <Card className='pool1-card'>
            
          <CardBody className='pools-card'>
            <div className='card-icon'>
              <img src={ logo } alt=""/>
            </div>
              
              <CardTitle tag="h5">
                    0.000
              </CardTitle>
              <CardText>
               HNTR Earned
              </CardText>
            </CardBody>
            <div className='card-bottom'>
            <Button 
            onClick={ togglePoolPopup }
            className='withdrwa-lp'>
            Withdraw LP & rewards
              </Button>

              {isPoolPopup && <PoolPopup
                        content={<>

                        <div className='row'>
                          
                          <div className='col-12 harvest-heading'>
                            <h2>Harvest HNTR-USDT-LP</h2>
                          </div>

                          <div className='col-12'> 
                              <div className='d-flex justify-content-end'>
                                <h6 className='available-HNTR' ><span>{ availableWithdraw } </span> HNTR-USDT-LP Available </h6>
                              </div>  
                          </div>

                          <div className='col-sm-6 input-harvest'>
                            <div >
                            <NumericInput 
                                  className="form-control" 
                                  value={ withdrawHntrUSD } 
                                  min={ 0 } 
                                  max={ availableWithdraw } 
                                  precision={ 0 } 
                                  size={ 5 } 
                                  step={ 1 } 
                                  strict
                                  noStyle
                                  onChange={(e) => SetwithdrawHntrUSD(e) } 
                                />
                               
                            </div>                                               
                          </div>

                          <div className='col-sm-6 input-harvest'>
                              <div className='container'>
                                  <div className='d-flex justify-content-between'>
                                    <h6 className='HNTR-LP' >HNTR-USDT-LP</h6>
                                    <Button onClick={ setWithdraw }
                                      className='input-max'>
                                      MAX</Button>
                                  </div>
                              </div>
                          </div>

                          <div >
                          <Button 
                              className='input-confirm'
                              type="submit" 
                              disabled={ !withdrawHntrUSD }
                              >Confirm</Button>
                          </div>

                        </div>
                            
                          </>}
                            handleClose={togglePoolPopup}
                          />}
              </div>
          </Card>

          <Card className='pool1-card'>
          <CardBody className='pools-card'>
            <div className='card-icon'>
              <img src={ logo } alt=""/>
            </div>
              
              <CardTitle tag="h5">
                    0.000
              </CardTitle>
               HNTR Earned
              <CardText>
              </CardText>
            </CardBody>
            <div className='card-bottom'>
            <CardText className='approve-lp'>
                Approve LP
              </CardText>

                <div className='deposit-div'>
                    <Button 
                    onClick={ togglePoolPopup1 }
                    className='deposit-lp'>
                            Deposit LP
                    </Button>


              {isPoolPopup1 && <PoolPopup
                        content={<>
                            <div className='row'>
                          
                          <div className='col-12 harvest-heading'>
                            <h2>Harvest HNTR-USDT-LP</h2>
                          </div>

                          <div className='col-12'> 
                              <div className='d-flex justify-content-end'>
                                <h6 className='available-HNTR' ><span>{ availableDeposit } </span> HNTR-USDT-LP Available </h6>
                              </div>  
                          </div>

                          <div className='col-sm-6 input-harvest'>
                            <div >
                                
                                <NumericInput 
                                  className="form-control" 
                                  value={ depositHntrUSD } 
                                  min={ 0 } 
                                  max={ availableDeposit } 
                                  precision={ 0 } 
                                  size={ 5 } 
                                  step={ 1 } 
                                  strict
                                  noStyle
                                  onChange={(e) => SetdepositHntrUSD(e) } 
                                />                           
                            </div>                                               
                          </div>

                          <div className='col-sm-6 input-harvest'>
                              <div className='container'>
                                  <div className='d-flex justify-content-between'>
                                    <h6 className='HNTR-LP' >HNTR-USDT-LP</h6>
                                    <Button 
                                    onClick={ setDeposit }
                                      className='input-max'>
                                      MAX</Button>
                                  </div>
                              </div>
                          </div>

                          <div>
                          <Button 
                              className='input-confirm'
                              type="submit" 
                              disabled={ !depositHntrUSD }
                              >Confirm</Button>
                          </div>

                        </div>
                          </>}
                            handleClose={togglePoolPopup1}
                          />}
                </div>
              </div>
          </Card>

        </CardGroup>
        </div>
              </div>
          </div>
      );
  }
  