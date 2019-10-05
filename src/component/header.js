import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Header(){
    return(
        <Navbar>
            <Navbar.Brand href="#home"><h1 className="logo">Logo</h1></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}
