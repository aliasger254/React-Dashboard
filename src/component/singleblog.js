import React, {useEffect, useState} from 'react';
import { NavLink  } from "react-router-dom";
import { Row, Col, Breadcrumb, Nav } from 'react-bootstrap';
import axios from 'axios';

function SingleBlog(props){
    const postId = props.match.params.id;
    const [singlePost, setSinglePost] = useState([]);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res =>{
            setSinglePost(res.data);
        });
    },[postId])

    return( 
        <React.Fragment>
            <Row className="page-title justify-content-between">
                <Col>
                    <h1>{singlePost.id}</h1>
                </Col>
                <Col>
                    <Breadcrumb>
                        <NavLink className="breadcrumb-item" to="/">Dashboard</NavLink >
                        <NavLink className="breadcrumb-item" to="/blog">Blog</NavLink >
                        <Breadcrumb.Item active>Single Blog Page</Breadcrumb.Item>
                    </Breadcrumb>
                </Col> 
            </Row> 
            <Row className="bg-white p-3 m-3" style={{borderRadius:'20px'}}>
                <Col md={4}>
                    <img src="https://via.placeholder.com/300x150.png/4776E6/fff" alt="posts" width="100%"/>
                </Col>
                <Col>
                    <h2 className="single-blog-title">{singlePost.title}</h2>
                    <p>{singlePost.body}, {singlePost.body}</p>
                </Col>
                <Col md={12} className="pt-2">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Col>
                <hr className="mt-2 mb-2"/>
                <Col>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link className="text-dark"><b>Post Date</b> : {singlePost.userId + 4}/{singlePost.userId}/2019</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark"><b>Comments</b> : {singlePost.id + 14}</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </React.Fragment>        
    )
}

export default SingleBlog;