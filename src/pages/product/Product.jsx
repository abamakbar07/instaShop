import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { instagramAPI } from '../../config/api'
import ProductCard from '../components/productcard/ProductCard'

const Product = () => {
   const [data, setData] = useState(null)
   const getData = async () => {
      try {
         const param = {
            params : {
               fields: "id,caption",
               access_token:
                 "IGQVJWYzBqX2M1YU9KTnpjZAm9nbDRMLVVJTVhHNnQ2TEkzeTdxUFJHa2ItODNTWlNnMW5tdUs4WUxJZAjl6N2YxYXFQSVVYbDlJVFNhXzFPYThkdTBLWG9tenNacjRpVk52SmVnbXJkRTgyT2MxQ3FfNQZDZD",
               }
            };
         const result = await instagramAPI.get('/me/media', param)
         console.log(result)
      } catch (error) {
         console.log(data)
      }
   }

   useEffect(() => {
      getData()
   }, [])
   
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
