import React from 'react'
import { CardColumns, Col, Container, Row } from 'react-bootstrap'
import BestProductsCard from '../../components/bestproductscard/BestProductsCard'
import best1 from '../../../assets/4.png'
import best2 from '../../../assets/7.png'


const BestProductsDashboard = () => {
   return (
     <div className="BestProductsDashboard">
       <Col>
         <div className="text-center">Best Products</div>
         <Container>
           <CardColumns>
             <BestProductsCard
               title="Produk Pertama"
               desc="Some quick example text to build on the card title and make up the
                     bulk of the card's content."
               img={best1}
             />
             <BestProductsCard
               title="Second Product"
               desc="Some quick example text to build on the card title and make up the
                     bulk of the card's content."
               img={best2}
             />
             <BestProductsCard
               title="Atsaltun prod"
               desc="Some quick example text to build on the card title and make up the
                     bulk of the card's content."
               img={best1}
             />
           </CardColumns>
         </Container>
       </Col>
     </div>
   );
}

export default BestProductsDashboard
