import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {BiUserPlus} from 'react-icons/bi'
import ModalForm from "./ModalForm";


const NavBar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Users</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
          </Nav>
          <Button onClick={handleShow} variant="outline-success"><span><BiUserPlus /></span>Create</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <ModalForm show={show} handleClose={handleClose}/>
    </>
  );
};

export default NavBar;
