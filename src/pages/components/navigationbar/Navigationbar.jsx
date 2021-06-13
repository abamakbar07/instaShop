import React, { useState, useContext, useEffect } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../../../components/context/CartContext'
import { ProductContext } from '../../../components/context/ProductContext'
import { ButtonPrimary } from '../Button'
import './navigationbar.css'

const Navigationbar = () => {
  const history = useHistory()
  const [login, setLogin] = useState(false)
  const [cart] = useContext(CartContext)
  const [product, dispatchProduct] = useContext(ProductContext)

  const homeButton = () => {
    dispatchProduct({
      type: "CLEAR_PRODUCT_DETAIL",
    })
    history.push("/")
  }

  useEffect(() => {
    console.log(product)
    console.log(cart)
  }, [product])
  return (
    <div className="NavigationBar">
      <Container className="Container">
        <Navbar expand="lg">
          <div onClick={homeButton}>
            <Navbar.Brand>INSTASHOP</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="me-auto ml-auto">
              {login ? (
                <>
                  <Navbar.Text className="mr-5">
                    <div onClick={() => history.push("/product")}>
                      Product
                    </div>
                  </Navbar.Text>
                  <Navbar.Text>
                    <div onClick={() => history.push("/cart")}>
                      Cart
                    </div>
                    </Navbar.Text>
                  </>
            ) : (
              <ButtonPrimary text="Login" onClick={() => setLogin(!login)} />
              // <Button varian="primary" onClick={() => setLogin(!login)}>
              //   LOGIN
              // </Button>
              )}
              </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Navigationbar
