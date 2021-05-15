import React, { useState } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'

const Navigationbar = () => {
  const [login, setLogin] = useState(false)
  return (
    <Container>
      <Navbar>
        <Navbar.Brand href="#home">INSTASHOP</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {login ? (
          <Navbar.Text onClick={() => setLogin(!login)}>
            Signed in as: <a>Mark Otto</a>
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
