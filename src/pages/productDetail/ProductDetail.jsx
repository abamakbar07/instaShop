import { useContext, useEffect } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import { ProductContext } from '../../components/context/ProductContext'
import { ButtonArrowPrimary, ButtonArrowSecondary } from '../components/Button'
import './productdetail.css'

const ProductDetail = () => {
   // const { id } = useParams()
   const history = useHistory()
   const [product] = useContext(ProductContext)
   const detail = product.productDetail

   useEffect(() => {
      if (!product.productDetail) history.push('/')
   }, [])

   return (
      <Container className="ProductDetail">
         {detail ? (
            <Row>
               <Col>
                  <div className="Container">
                     <img src={detail ? detail.img : null} alt={detail ? detail.name : null} />   
                  </div>
               </Col>
               <Col>
                  <div className="Container">
                     <div className="Content">
                        <h3>{detail.name}</h3>
                        <p>{detail.desc}</p>
                        <br />
                        <tr>
                           <th>Size</th>
                           <td>{detail.size}</td>
                        </tr>
                        <tr>
                           <th>Variant</th>
                           <td>{detail.variant}</td>
                        </tr>
                        <br />
                        <div className="d-flex justify-content-between">
                           <h4>{detail.price}</h4>
                           <div className="Button">
                              <ButtonArrowSecondary text="Add to cart" />
                           </div>
                        </div>
                     </div>
                     <div className="Recomendation justify-content-center">
                        <img src={detail ? detail.img : null} alt={detail ? detail.name : null} />
                        <img src={detail ? detail.img : null} alt={detail ? detail.name : null} />
                        <img src={detail ? detail.img : null} alt={detail ? detail.name : null} />
                        <img src={detail ? detail.img : null} alt={detail ? detail.name : null} />
                     </div>
                  </div>
               </Col>
            </Row>
         ): (
            <Spinner animation="border" role="status">
               <span className="sr-only">Loading...</span>
            </Spinner>
         )}
      </Container>
   )
}

export default ProductDetail
