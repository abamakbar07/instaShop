import React, {useContext} from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ProductDetailContext } from '../../components/context/ProductDetailContext'
import './productdetail.css'

const ProductDetail = () => {
   const { id } = useParams()
   const [product] = useContext(ProductDetailContext)

   console.log(product)

   return (
      <Container className="ProductDetail">
         This product detail {id}
      </Container>
   )
}

export default ProductDetail
