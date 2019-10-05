import React from 'react';
import { NavLink  } from "react-router-dom";
import { Row, Col, Breadcrumb } from 'react-bootstrap';

function Products(){
    return(
        <Row className="page-title justify-content-between">
            <Col>
                <h1>Products</h1>
            </Col>
            <Col>
                <Breadcrumb>
                    <NavLink className="breadcrumb-item" to="/">Dashboard</NavLink >
                    <Breadcrumb.Item active>Products</Breadcrumb.Item>
                </Breadcrumb>
            </Col> 
        </Row>
    )
}

export default Products;