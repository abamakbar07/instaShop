import React, { useState, useContext, useEffect } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { ProductContext } from '../../../components/context/ProductContext'
import { ButtonPrimary } from '../Button'
import './navigationbar.css'

const Navigationbar = () => {
  const history = useHistory()
  const [login, setLogin] = useState(false)
  const [product] = useContext(ProductContext)
  useEffect(() => {
    console.log(product)
    
  }, [product])
  return (
    <div className="bg-transparent">
      <Container className="NavigationBar">
        <Navbar>
          <div onClick={() => history.push("/")}>
            <Navbar.Brand>INSTASHOP</Navbar.Brand>
          </div>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {login ? (
              <Navbar.Text>
                <div onClick={() => history.push("/product")}>
                  Signed in as: <span>Mark Otto</span>
                </div>
              </Navbar.Text>
            ) : (
              <ButtonPrimary text="Login" onClick={() => setLogin(!login)} />
              // <Button varian="primary" onClick={() => setLogin(!login)}>
              //   LOGIN
              // </Button>
            )}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Navigationbar
