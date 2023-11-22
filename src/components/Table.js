import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './Table.css'

const Table = (props) => {
  return (
    <div>
      <header style={{textAlign:'center'}}>
        <h2 >Информационный центр</h2> 
      </header>

      <nav>  
        <div style={{margin:'5%'}} className='row'>
          <div className='col'>
            <div className='row'>
              <Card style={{backgroundColor:'#F5F5F5'}}>
                <Card.Body >
                  <Card.Title > <h3>С начала месяца ноября 2023 года</h3> </Card.Title> {/* */}
                  <Card style={{backgroundColor:'#EBEBEB'}}>
                    <Card.Body className='border' style={{margin:'2%'}} > 
                    <div>
                      <h3 className=''>Выполнение плана отгрузки</h3>     
                      <Button id='questionbutton' style={{width: '30px', float:'right',borderRadius:'15px' }}  variant="primary" size="sm">
                        ?
                      </Button>
                    </div>
                                                             
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">План</th>
                            <th scope="col">Факт</th>
                            <th scope="col">%</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>{props.data.current.shipment.plan}</td>
                            <td>{props.data.current.shipment.fact}</td>
                            <td>{props.data.current.shipment.percent}</td>
                          </tr>
                        </tbody>
                      </table>
                      
                    </Card.Body>

                  <Card.Body className='border' style={{margin:'2%'}}  > 
                    <h3>Выполнение плана оплаты</h3>       
                      <Button id='questionbutton' style={{width: '30px', float:'right',borderRadius:'15px' }}  variant="primary" size="sm">
                        ?
                      </Button>                                                       
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">План</th>
                          <th scope="col">Факт</th>
                          <th scope="col">%</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>{props.data.current.payment.plan}</td>
                          <td>{props.data.current.payment.fact}</td>
                          <td>{props.data.current.payment.percent}</td>
                        </tr>
                      
                      
                      </tbody>
                    </table>
                  </Card.Body>

                  <Card.Body className='border' style={{margin:'2%'}} > 
                  <h3>Выполнение плана выпуска готовой продукции</h3>    
                   <Button id='questionbutton' style={{width: '30px', float:'right',borderRadius:'15px', }}  variant="primary" size="sm">
                        ?
                    </Button>                                                          
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">План</th>
                        <th scope="col">Факт</th>
                        <th scope="col">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>{props.data.current.release.plan}</td>
                        <td>{props.data.current.release.fact}</td>
                        <td>{props.data.current.release.percent}</td>
                      </tr>
                    </tbody>
                  </table>
                  </Card.Body>             
                  </Card>
                </Card.Body>
              </Card>                                                   
            </div>
           </div> 

{/*----------------------------------------------------------------------------------------------------*/}
          <div className='col ' id='col2' >
            <div className='row'>
            <Card style={{ backgroundColor:'#F5F5F5'}}>
                <Card.Body>
                  <Card.Title> <h3>С начала 2023 года </h3> </Card.Title>
                  <Card style={{backgroundColor:'#EBEBEB'}}>

                    <Card.Body className='border' style={{margin:'2%', }} > 
                    <h3>Факт отгрузки</h3> 

                      <Button id='questionbutton' style={{width: '30px', float:'right',borderRadius:'15px' }}  variant="primary" size="sm">
                        ?
                      </Button>                                                
                      <table className="table table-bordered" >
                        <thead>
                          <tr>
                            <th scope="col">Факт</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>                            
                            <td>{props.data.startYear.total.shipment}</td>
                          </tr>
                        </tbody>
                      </table>
                    </Card.Body>

                    <Card.Body className='border' style={{margin:'2%'}}  > 
                      <h3>Факт оплаты</h3>  
                      <Button id='questionbutton' style={{width: '30px', float:'right',borderRadius:'15px' }}  variant="primary" size="sm">
                        ?
                      </Button>                                                            
                      <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Факт</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>  
                              <td>{props.data.startYear.total.payment}</td>
                            </tr>
                          </tbody>
                        </table>
                    </Card.Body>

                    <Card.Body className='border' style={{margin:'2%'}} > 
                    <h3>Факт реализации( из 1С)</h3>                                                              
                    <Button id='questionbutton' style={{width: '30px', float:'right',borderRadius:'15px' }}  variant="primary" size="sm">
                        ?
                    </Button>
                    <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th scope="col">Факт</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>                            
                              <td>{props.data.startYear.total.release}</td>
                            </tr>
                          </tbody>
                        </table>
                    </Card.Body>
                  </Card>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Table;
