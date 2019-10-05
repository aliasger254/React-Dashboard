import React from 'react';
import { Nav, Row, Col, Navbar } from 'react-bootstrap';
import { NavLink  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'


function SideBar(){
    return(
        <div className="sidebar">
            <Navbar expand="xl" style={{padding:'0 !important'}} className="sidebar-nav">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex-column" style={{width:'100%'}}>               
                        <NavLink exact={true} activeClassName="active" className="text-white nav-link" to="/">Dashboard</NavLink >                
                        <NavLink activeClassName="active" className="text-white nav-link" to="/users">Users</NavLink >               
                        <NavLink activeClassName="active" className="text-white nav-link" to="/products">Products</NavLink >               
                        <NavLink activeClassName="active" className="text-white nav-link" to="/about">About</NavLink >               
                        <NavLink activeClassName="active" className="text-white nav-link" to="/blog">Blog</NavLink >               
                        <NavLink activeClassName="active" className="text-white nav-link" to="/contact">Contact</NavLink >          
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            <div className="sidebar-bottom d-none d-xl-block">
                <div className="pl-4 pr-2">
                    <Row className="mb-2">
                        <Col xs={2} className="text-center"><FontAwesomeIcon icon={faMapMarkerAlt} color="white" /></Col>                    
                        <Col className="text-light">79 Old Oak Court<br/>Flushing, NY 11354</Col>
                    </Row>
                    <Row className="mb-2">
                        <Col xs={2} className="text-center"><FontAwesomeIcon icon={faEnvelope} color="white" /></Col>                    
                        <Col className="text-light">test@gmail.com</Col>
                    </Row>
                    <Row>
                        <Col xs={2} className="text-center"><FontAwesomeIcon icon={faPhoneAlt} color="white" /></Col>                    
                        <Col className="text-light">0731-45124578</Col>
                    </Row>
                </div>
                
                <hr className="mt-3" style={{borderColor:'#eee',marginBottom:0}}/>

                <Nav className="justify-content-center social-icon">
                    <Nav.Item>
                        <Nav.Link href="/home">
                            <FontAwesomeIcon icon={faFacebook} color="white" />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <FontAwesomeIcon icon={faTwitter} color="white" />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <FontAwesomeIcon icon={faInstagram} color="white"/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <FontAwesomeIcon icon={faYoutube} color="white" />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
           
        </div>
    )
}

export default SideBar;