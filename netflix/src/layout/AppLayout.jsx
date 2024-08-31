import React, {useState} from 'react';
import {Link, Outlet, useNavigate} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const AppLayout = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-dark navbar-dark">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src="/netflixLogo.svg" alt="logo" width={93} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/" className="nav-link text-light" >Home</Link>
                            <Link to="/movies" className="nav-link text-light" >Movies</Link>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 search-input"
                                aria-label="Search"
                                style={{ backgroundColor: "#606870", color: "white", border: " #90979f" }}
                            />
                            <Button variant="outline-danger" >Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
};

export default AppLayout;