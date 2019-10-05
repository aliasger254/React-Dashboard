import React from 'react';
import { NavLink  } from "react-router-dom";
import { Row, Col, Breadcrumb } from 'react-bootstrap';

function Contact(){
    return(
        <React.Fragment>
            <Row className="page-title justify-content-between">
                <Col>
                    <h1>Contact</h1>
                </Col>
                <Col>
                    <Breadcrumb>
                        <NavLink className="breadcrumb-item" to="/">Dashboard</NavLink >
                        <Breadcrumb.Item active>Contact</Breadcrumb.Item>
                    </Breadcrumb>
                </Col> 
            </Row>

            <div className="inner-content">
                <Row className="mt-5">
                    <Col md={4} className="bg-white p-5">
                        <h5><i className="fa fa-home fa-1x"></i> Address:</h5>               
                        <p>79 Old Oak Court Flushing, NY 11354</p>
                        <br />
                        <h5><i className="fa fa-envelope fa-1x" ></i> E-Mail:</h5>
                        <p>test@gmail.com</p>
                        <br />
                        <h5><i className="fa fa-user fa-1x" ></i> Phone</h5>
                        <p>0731-45124578</p>
                        <br /> 
                        <h5><i className="fa fa-user fa-1x" ></i>Seles</h5>
                        <p>sales@test.com / 0731-45124579</p>         
                    </Col>
                    <Col md={8}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96690.80542089987!2d29.864461132544537!3d40.77109282810726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f66644bfb9d%3A0x82690ee7586b7eb9!2zxLB6bWl0LCBLb2NhZWxp!5e0!3m2!1str!2str!4v1480782606579" width="100%" height="450" style={{border:'0'}}></iframe>
                    </Col>
                </Row>
            </div>            
        </React.Fragment>
    )
}

export default Contact;