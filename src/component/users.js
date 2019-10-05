import React, {  useState, useEffect } from 'react';
import { NavLink  } from "react-router-dom";
import { Row, Col, Breadcrumb, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function Users(){
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {        
            setUsers(res.data);
        });  
    },[]);

    return( 
        <React.Fragment>
            <Row className="page-title justify-content-between">
                <Col>
                    <h1>Users</h1>
                </Col>
                <Col>
                    <Breadcrumb>
                        <NavLink className="breadcrumb-item" to="/">Dashboard</NavLink >
                        <Breadcrumb.Item active>Users</Breadcrumb.Item>
                    </Breadcrumb>
                </Col> 
            </Row>
            <Row className="inner-content">
                <Table bordered hover className="mt-2 users-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.length > 1
                            ?
                            users.map((users, key) =>
                                <tr key={key}> 
                                    <td>{users.id}</td>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td>{users.phone}</td>
                                    <td className="text-center"><NavLink className="btn btn-sm cstm-btn" to={`/users/${users.id}`}><FontAwesomeIcon icon={faEye} color="white" /></NavLink></td>
                                </tr>
                            )
                            :
                            <tr>
                                <td>Loading</td>
                            </tr>
                        }                   
                    </tbody>
                </Table>
            </Row>
        </React.Fragment>      
    )
}

export default Users;