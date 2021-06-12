import { useContext } from 'react'
import { CardColumns, Col, Container } from 'react-bootstrap'
import BestProductsCard from '../../components/bestproductscard/BestProductsCard'
import { ProductContext } from '../../../components/context/ProductContext'


const BestProductsDashboard = () => {
  const [product] = useContext(ProductContext)
  const bestProducts = product.bestProducts
  console.log(bestProducts)

  return (
    <div className="BestProductsDashboard">
      <div className="Border">
        <Col>
          <div className="title text-center p-3">Best Products</div>
          <Container>
            <CardColumns>
              {bestProducts.map((data) => (
                <BestProductsCard
                title={data.name}
                desc={data.desc}
                img={data.img}
                />
              ))}
            </CardColumns>
          </Container>
        </Col>
      </div>
    </div>
  );
}

export default BestProductsDashboard
