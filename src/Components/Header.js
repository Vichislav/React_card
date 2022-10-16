import React, {Component} from 'react';
import { Container, Nav, Navbar} from "react-bootstrap";
import logo from '../Assets/logo192.png'
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../Pages/Home"
import About from "../Pages/About"
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";
import '../css/home.css'

export default class Header extends Component {
    render() {
        return (
            <Container>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/" >
                            <img
                                src={logo}
                                className="headerLogo"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                       {/* <Nav className="me-auto">
                            <Nav.Link href="/" > Home </Nav.Link>
                            <Nav.Link href="/about" > About me </Nav.Link>
                            <Nav.Link href="/contacts" > Forms </Nav.Link>
                            <Nav.Link href="/blog" > Blog </Nav.Link>
                        </Nav>*/}
                    </Container>
                </Navbar>
                <Router >
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='/blog' element={<Blog/>}/>
                    </Routes>
                </Router>
            </Container>
        );
    }
}


