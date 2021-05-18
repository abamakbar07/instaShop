import React, { useState } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navigationbar.css'

const Navigationbar = () => {
  const [login, setLogin] = useState(false)
  return (
    <Container className="NavigationBar">
      <Navbar>
        <Link to="/">
          <Navbar.Brand href="#home">INSTASHOP</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {login ? (
          <Navbar.Text>
            <Link to="/product">
              Signed in as: <span>Mark Otto</span>
            </Link>
          </Navbar.Text>
            ) : (
              <Button varian="primary" onClick={() => setLogin(!login)}>LOGIN</Button>
            )}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Navigationbar
