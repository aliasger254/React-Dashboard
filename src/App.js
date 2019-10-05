import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import SideBar from './component/sidebar';
import MainContent from './component/main-content';
import Header from './component/header';
import Footer from './component/footer';
 
 
function App() {
  return (
    <div className="App">
        <Container fluid="true" className="main-row flex-nowrap">
          <Header />
          <Row className="justify-content-between flex-xl-nowrap">
            <Router>
              <SideBar/>
              <MainContent/>
            </Router>  
          </Row>
          <Footer />
        </Container>
    </div>
  ); 
} 

export default App;