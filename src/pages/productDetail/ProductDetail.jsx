import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './productdetail.css'

const ProductDetail = () => {
   const { id } = useParams()

   return (
      <Container className="ProductDetail">
         This product detail {id}
      </Container>
   )
}

export default ProductDetail
