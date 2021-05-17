import React, { useEffect, useState } from 'react'
import { CardColumns, Col, Container, Row, Spinner } from 'react-bootstrap'
import { instagramAPI } from '../../config/api'
import ProductCard from '../components/productcard/ProductCard'

const Product = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const getData = async () => {
    try {
        const param = {
          params: {
            fields: "id,media_type,caption,media_url,thumbnail_url",
            access_token:
              "IGQVJWYzBqX2M1YU9KTnpjZAm9nbDRMLVVJTVhHNnQ2TEkzeTdxUFJHa2ItODNTWlNnMW5tdUs4WUxJZAjl6N2YxYXFQSVVYbDlJVFNhXzFPYThkdTBLWG9tenNacjRpVk52SmVnbXJkRTgyT2MxQ3FfNQZDZD",
          },
        };
        const result = await instagramAPI.get('/me/media', param)
        setData(result.data.data)
        setLoading(false)
    } catch (error) {
        console.log(error)
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
          <CardColumns>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            data.map((post) => (
              <ProductCard
                media_type={post.media_type}
                img={post.media_type == "VIDIO" ? post.thumbnail_url : post.media_url}
                title={post.id}
                desc={post.caption}
                />
              ))
            )}
          </CardColumns>
        </Col>
      </Row>
    </Container>
  );
}

export default Product
