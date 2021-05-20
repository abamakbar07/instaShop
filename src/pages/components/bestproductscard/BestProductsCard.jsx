import React from 'react'
import { Card } from 'react-bootstrap';
import './bestproductscard.css'

const BestProductsCard = (props) => {
   return (
      <div className="BestProductsCard">
         <Card>
            <Card.Img variant="top" src={props.img} />
            <Card.ImgOverlay>
               <Card.Body>
                  <Card.Title>
                     {props.title}
                  </Card.Title>
                  <Card.Text>
                     {props.desc}
                  </Card.Text>
               </Card.Body>
            </Card.ImgOverlay>
         </Card>
      </div>
   );
}

export default BestProductsCard
