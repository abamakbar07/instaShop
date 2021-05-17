import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './productcard.css'

const ProductCard = (props) => {
   props.media_type == "VIDIO" ? console.log("VIDIO") : console.log("NOT_VIDIO")
   return (
     <div className="ProductCard">
       <Card style={{ width: "18rem" }}>
         {/* {props.media_type == "VIDIO" ? (
           <iframe src={props.img} />
         ) : ( */}
           <Card.Img variant="top" src={props.img} />
         {/* )} */}
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
