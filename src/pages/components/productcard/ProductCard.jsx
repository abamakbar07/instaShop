import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './productcard.css'

const ProductCard = (props) => {
   return (
     <div className="ProductCard">
       <Card style={{ width: "18rem" }}>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
           <Card.Title className="title">{props.title}</Card.Title>
           <Card.Text className="desc line-clamp">{props.desc}</Card.Text>
           <Button variant="primary">Go somewhere</Button>
         </Card.Body>
       </Card>
     </div>
   );
}

export default ProductCard
