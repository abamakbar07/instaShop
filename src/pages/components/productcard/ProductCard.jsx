import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import './productcard.css'

const ProductCard = (props) => {
  const [state, setState] = useState({
    name: "",
    size: "",
    variant: "",
    price: "",
    desc: "",
    img: props.img,
    tag: []
  })

  const desc = props.desc
  const descSplit = desc.split('----------')
  const content = descSplit[1]
  const contentSplit = content.split(('_'))
  const tag = content.split("#").slice(1)

  const getData = (x) => {
    return x.substring(x.search(" ")).slice(1, -1);
  }

  // console.log(state)
  
  useEffect(() => {
    setState({
      ...state,
      name: getData(contentSplit[1]),
      size: getData(contentSplit[2]),
      variant: getData(contentSplit[3]),
      price: getData(contentSplit[4]),
      desc: descSplit[0],
      tag: tag.map((data) => data.slice(0, -1)),
    });
  }, [])

  return (
    <div className="ProductCard">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={state.img} />
        <Card.Body>
          <Card.Title className="title">{state.name}</Card.Title>
          <Card.Title className="title">{state.size}</Card.Title>
          <Card.Text className="desc line-clamp">{state.desc}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard
