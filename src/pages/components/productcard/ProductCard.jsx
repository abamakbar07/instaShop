import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { ProductContext } from '../../../components/context/ProductContext'
import './productcard.css'

const ProductCard = (props) => {
  const history = useHistory()
  const [product, dispatchProduct] = useContext(ProductContext)
  const [state, setState] = useState({
    id: props.id,
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

  const onClick = () => {
    dispatchProduct({
      type: "SET_PRODUCT_DETAIL",
      payload: {
        productDetail: state
      },
    })

    history.push(`/product/${state.id}`)
  }
  
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
      <Card style={{ width: "18rem", cursor: "pointer" }} onClick={onClick}>
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
