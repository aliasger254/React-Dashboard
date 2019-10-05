import React, {  useState, useEffect }  from 'react';
import { NavLink  } from "react-router-dom";
import { Row, Col, Breadcrumb, ListGroup } from 'react-bootstrap';
import axios from 'axios';

function Blogs(){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPosts(res.data);
        })
    },[])

    return(
        <React.Fragment>
            <Row className="page-title justify-content-between">
                <Col>
                    <h1>Blog</h1>
                </Col>
                <Col>
                    <Breadcrumb>
                        <NavLink className="breadcrumb-item" to="/">Dashboard</NavLink >
                        <Breadcrumb.Item active>Blog</Breadcrumb.Item>
                    </Breadcrumb>
                </Col> 
            </Row>
            <Row className="inner-content mt-3">
                <ListGroup className="w-100"> 
                    { 
                        posts.length > 1 ?
                        posts.map((posts, key)=> 
                            <NavLink key={posts.id} className="list-group-item list-group-item-action" to={`/blog/${posts.id}`}>{posts.title}</NavLink >                            
                        )
                        :
                        <p>Loading</p>
                    }
                 </ListGroup> 
            </Row>
        </React.Fragment>
        
    )
}

export default Blogs;