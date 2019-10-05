import React, {useState, useEffect} from 'react';
import { NavLink  } from "react-router-dom";
import { Row, Col, Breadcrumb, Tabs, Tab, Button } from 'react-bootstrap';
import axios from 'axios';

function SingleUser(props){ 
    const userId = props.match.params.id; 
    const [singleUser, setSingleUser] = useState([]); 
    const [singleUserCompany, setSingleUserCompany] = useState([]); 
    const [singleUserAddress, setSingleUserAddress] = useState([]);  

    useEffect(()=>{ 
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => {
            setSingleUser(res.data);
            setSingleUserCompany(res.data.company);
            setSingleUserAddress(res.data.address);
        });
    },[userId]);

    return(
        <React.Fragment>
              <Row className="page-title justify-content-between">
                <Col>
                    <h1>{singleUser.name}</h1>
                </Col>
                <Col>
                    <Breadcrumb>
                        <NavLink className="breadcrumb-item" to="/">Dashboard</NavLink >
                        <NavLink className="breadcrumb-item" to="/users">Users</NavLink >
                        <Breadcrumb.Item active>Single User</Breadcrumb.Item>
                    </Breadcrumb>
                </Col> 
            </Row>
            <Row className="emp-profile">
                <form method="post">
                    
                    <Row>
                        <Col md={4}>
                            <div className="profile-img">
                                <img src={require(`../images/image-${userId}.png`)} alt="First"/>
                                <div className="file btn btn-lg btn-primary">
                                    Change Photo
                                <input type="file" name="file" />
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="profile-head">
                                <h5>{singleUser.name}</h5>
                                <h6>Web Developer and Designer</h6>
                                <p className="proile-rating">RANKINGS : <span>{singleUser.id}/10</span></p>
                            </div>
                        </Col>
                        <Col className="col-md-2">
                            <Button className="btn btn-sm cstm-btn">Edit Profile</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className="profile-work">
                                <p>WORK LINK</p>
                                <a href={"https://www."+ singleUser.website}>Website Link</a><br />
                                <a href="http://github.com">Github Profile</a><br />
                                <p>SKILLS</p>
                                <b>Web Designer</b><br />
                                <b>Web Developer</b><br />
                                <b>WordPress</b><br />
                                <b>PHP, .Net</b><br />
                            </div>
                        </Col>
                        <Col md={8} className="profile-tab profile-head">
                            <Tabs defaultActiveKey="about" className="tab-content">
                                <Tab eventKey="about" title="About">
                                    <Row>
                                        <Col md={4}>
                                            <label>User Id</label>
                                        </Col>
                                        <Col>
                                            <p>{singleUser.id}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>
                                            <label>User Name</label>
                                        </Col>
                                        <Col>
                                            <p>{singleUser.name}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>
                                            <label>Email</label>
                                        </Col>
                                        <Col>
                                            <p>{singleUser.email}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>
                                            <label>Phone</label>
                                        </Col>
                                        <Col>
                                            <p>{singleUser.phone}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>
                                            <label>Address</label>
                                        </Col>
                                        <Col>
                                            <p>{singleUserAddress.street}, {singleUserAddress.suite}<br/>                                                
                                            {singleUserAddress.city}, {singleUserAddress.zipcode}</p>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="company" title="Company">
                                    <Row>
                                        <Col md={4}>
                                            <label>Company Name</label>
                                        </Col>
                                        <Col>
                                            <p>{singleUserCompany.name}</p>
                                        </Col>
                                    </Row>                                    
                                    <Row>
                                        <Col md={4}>
                                            <label>Catch Phrase</label>
                                        </Col>
                                        <Col>
                                            <p>{singleUserCompany.catchPhrase}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>
                                            <label>Company BS</label>
                                        </Col>
                                        <Col>
                                            <p>{singleUserCompany.bs}</p>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </form>           
            </Row>
        </React.Fragment>
      
    )
}

export default SingleUser;