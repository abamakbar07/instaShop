import React, { useEffect, useState, useContext } from 'react'
import { CardColumns, Col, Container, Row, Spinner } from 'react-bootstrap'
import ProductCard from '../components/productcard/ProductCard'
import './product.css'
import ReactPaginate from 'react-paginate'
import { ProductContext } from '../../components/context/ProductContext'
import { GetDataProduct } from '../../config/functions/product'

const Product = () => {
  const [product, dispatchProduct] = useContext(ProductContext)
  const [refresh, setRefresh] = useState(0)
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState({
    offset: 0,
    tableData: [],
    orgtableData: [],
    perPage: 3,
    currentPage: 0,
  });

  const getData = async () => {
    try {
      const data = await product.products

      var slice = data.slice(state.offset, state.offset + state.perPage);
      
      setState({
        ...state,
        pageCount: Math.ceil(data.length / state.perPage),
        orgtableData: data,
        tableData: slice,
      });

      setLoading(false)
        
    } catch (error) {
        console.log(error)
    }
  }

  const loadMoreData = () => {
    const data = state.orgtableData;

    const slice = data.slice(state.offset, state.offset + state.perPage);

    setState({
      ...state,
      pageCount: Math.ceil(data.length / state.perPage),
      tableData: slice,
    });
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * state.perPage;

    setState({
      ...state,
      currentPage: selectedPage,
      offset: offset,
    });

    setRefresh(refresh + 1);
  }

  useEffect(() => {
    GetDataProduct().then((data) => {
      dispatchProduct({
          type: "GET_PRODUCTS",
          payload: {
            data,
          }
      })
    })
  }, [])

  useEffect(() => getData(), [product])

  useEffect(() => loadMoreData(), [refresh])
  
  return (
    <Container className="Product">
      <Row>
        {/* <Col md={2} className="filter">
          <div>Filter</div>
        </Col>
        <Col md={10} className="content"> // uncoment if want to use filter tab*/}
        <Col className="content"> {/*  // if do not want to use filter tab */}
          <ReactPaginate
            previousLabel={"←"}
            nextLabel={"→"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(e) => handlePageClick(e)}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <CardColumns>
              {state.tableData.map((post) => (
                <ProductCard
                key={post.id}
                  id={post.id}
                  media_type={post.media_type}
                  img={
                    post.media_type === "VIDEO"
                      ? post.thumbnail_url
                      : post.media_url
                  }
                  title={post.id}
                  desc={post.caption}
                  />
              ))}
            </CardColumns>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Product
