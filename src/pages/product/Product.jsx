import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from '../components/productcard/ProductCard'

const Product = () => {
   return (
     <Container className="Product bg-danger">
       <Row>
         <Col md={2} className="bg-light">
           Filter
         </Col>
         <Col md={10} className="bg-dark">
           <Row>
             <Col md={4}>
               <ProductCard
                 title="Product pertama dengan text panjang"
                 desc="Some quick example text to build on the card title and make up the
             bulk of the card's content. dengan text yang panjang dan melewati batas"
               />
             </Col>
           </Row>
         </Col>
       </Row>
     </Container>
   );
}

export default Product
