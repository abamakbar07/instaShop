import React, { useState } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import './navigationbar.css'

const Navigationbar = () => {
  const history = useHistory()
  const [login, setLogin] = useState(false)
  return (
    <Container className="NavigationBar">
      <Navbar>
        <div onClick={() => history.push('/')}>
          <Navbar.Brand href="#home">INSTASHOP</Navbar.Brand>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {login ? (
          <Navbar.Text>
            <div onClick={() => history.push('/product')}>
              Signed in as: <span>Mark Otto</span>
            </div>
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
