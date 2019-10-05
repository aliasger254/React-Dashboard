import React from 'react';
import { Row, Col, Card, ProgressBar, Image } from 'react-bootstrap';
import { NavLink  } from "react-router-dom";
import {Doughnut} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

function Dashboard(){
    const data = {
        labels: [
            'June',
            'July',
            'August'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };

    const data2 = {
        labels: ['April', 'May', 'June', 'July', 'August', 'September'],
        datasets: [
          {
            label: 'Orders',
            backgroundColor: '#5b6ce65e',
            borderColor: '#5b6ce6',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };

    return(
        <React.Fragment>
            <Row className="page-title justify-content-between">
                <Col>
                    <h1>Dashboard</h1>
                </Col>
            </Row>
            <div className="m-2 mt-4 p-4 bg-white flex-wrap inner-content row-eq-height">
                <Row>
                    <Col md={4}>
                        <Card className="bg-royal" text="white">
                            <Card.Header>Users</Card.Header>
                            <Card.Body>
                                <Row className="justify-content-between dashboard-card">
                                    <Col><Card.Title>Total <span>10</span></Card.Title></Col>
                                    <Col className="text-right"><NavLink className="text-white" to="/users">View</NavLink > </Col>
                                </Row>  
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="bg-royal" text="white">
                            <Card.Header>Blogs</Card.Header>
                            <Card.Body>
                                <Row className="justify-content-between dashboard-card">
                                    <Col><Card.Title>Total <span>100</span></Card.Title></Col>
                                    <Col className="text-right"><NavLink className="text-white" to="/blog">View</NavLink ></Col>
                                </Row>                        
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="bg-royal" text="white">
                            <Card.Header>Products</Card.Header>
                            <Card.Body>
                                <Row className="justify-content-between dashboard-card">
                                    <Col><Card.Title>Total <span>55</span></Card.Title></Col>
                                    <Col className="text-right"><NavLink className="text-white" to="/products">View</NavLink ></Col>
                                </Row>  
                            </Card.Body> 
                        </Card>
                    </Col>

                    <hr className="clearfix mt-2 mb-2"/>

                    <Col className="mt-5" style={{height: '350px'}} xl={6} md={12}>
                        <h3>Sales Value</h3>
                        <Doughnut data={data}/>
                    </Col>
                    <Col className="mt-5" style={{height: '350px'}} xl={6} md={12}>
                        <h3>Total Orders</h3>
                        <Bar
                            data={data2}
                            width={100}
                            height={50}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />
                    </Col> 
                </Row>

                <Row className="mt-4 flex-wrap row-eq-height">
                    <Col md={6} xl={4} className="mt-5 p-2">
                        <div className="bg-light p-4">
                            <h4 className="mb-4">Progress track</h4>
                            <div className="mt-1 mb-1 p-1">
                                <h6>Delievery</h6>
                                <ProgressBar variant="info" now='60' label='60%' />
                            </div>  
                            <div className="mt-1 mb-1 p-1">
                                <h6>Clients</h6>
                                <ProgressBar variant="success" now='90' label='90%' />
                            </div>  
                            <div className="mt-1 mb-1 p-1">
                                <h6>Company</h6>
                                <ProgressBar variant="warning" now='50' label='50%' />
                            </div>   
                            <div className="mt-1 mb-1 p-1">
                                <h6>Self</h6>
                                <ProgressBar variant="danger" now='20' label='20%' />
                            </div> 
                            <div className="mt-1 mb-1 p-1">
                                <h6>Coffe</h6>
                                <ProgressBar variant="warning" now='40' label='40%' />
                            </div> 
                        </div>                                      
                    </Col>

                    <Col md={6} xl={4} className="mt-5 p-2">
                        <div className="bg-light p-4">
                            <h4 className="mb-4">To do lists</h4>
                            <div className="border-bottom mt-1 mb-1 p-2">
                                <h6>Call with Dave</h6>
                                <span>10:30 AM</span>
                            </div>  
                            <div className="border-bottom mt-1 mb-1 p-2">
                                <h6>Lunch meeting</h6>
                                <span>1:30 PM</span>
                            </div> 
                            <div className="border-bottom mt-1 mb-1 p-2">
                                <h6>Meeting with Angela</h6>
                                <span>4:00 PM</span>
                            </div> 
                            <div className="mt-1 mb-1 p-2">
                                <h6>Collect Cash from John</h6>
                                <span>09:00 PM</span>
                            </div>  
                        </div>                                 
                    </Col>

                    <Col md={12} xl={4} className="mt-5 p-2">
                        <div className="bg-light p-4">
                            <h4 className="mb-4">Team Member</h4>
                            <Row className="border-bottom mt-1 mb-1 p-2 justify-content-start">
                                <div>
                                    <Image src="http://api.randomuser.me/portraits/men/24.jpg" roundedCircle  width="50px" height="50px"/>
                                </div>
                                <Col>
                                    <h6>Todd Shelton</h6>
                                    <span>California</span>
                                </Col>
                            </Row>   
                            <Row className="border-bottom mt-1 mb-1 p-2 justify-content-start">
                                <div>
                                    <Image src="http://api.randomuser.me/portraits/men/97.jpg" roundedCircle  width="50px" height="50px"/>
                                </div>
                                <Col>
                                    <h6>Seth Frazier</h6>
                                    <span>Florida</span>
                                </Col>
                            </Row>   
                            <Row className="border-bottom mt-1 mb-1 p-2 justify-content-start">
                                <div>
                                    <Image src="http://api.randomuser.me/portraits/women/90.jpg" roundedCircle  width="50px" height="50px"/>
                                </div>
                                <Col>
                                    <h6>Jean Myers</h6>
                                    <span>New york</span>
                                </Col>
                            </Row>   
                            <Row className="mt-1 mb-1 p-2 justify-content-start">
                                <div>
                                    <Image src="http://api.randomuser.me/portraits/women/34.jpg" roundedCircle  width="50px" height="50px"/>
                                </div>
                                <Col>
                                    <h6>Rosemary Porter</h6>
                                    <span>Washington</span>
                                </Col>
                            </Row>                         
                        </div>                                 
                    </Col>
                </Row>
            </div>
        </React.Fragment>    
    ) 
}

export default Dashboard;