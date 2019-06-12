import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import "./styles.scss";
import BasicRoute from './router'


export default function TodoApp() {
    return (
        <div className="todo-app">
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#/">List</Nav.Link>
                    <Nav.Link href="#/add">Add</Nav.Link>
                </Nav>
            </Navbar>
            <Container fluid="true">
                <BasicRoute />
            </Container>
            <Navbar bg="dark" fixed="bottom" variant="dark">
                <Navbar.Brand>Foolter</Navbar.Brand>
            </Navbar>
        </div>
    );
}
