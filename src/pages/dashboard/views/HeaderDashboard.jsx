import React, { useState } from 'react'
import { Carousel, Col, Container } from 'react-bootstrap'
import { ButtonPrimary, ButtonSecondary } from '../../components/Button';
import '../dashboard.css'

const HeaderDashboard = () => {
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="HeaderDashboard">
      <Container>
        <Col sm={5} className="">
          <div className="header title">
            Beautiful For The Everyday Activity
          </div>
          <div className="header desc">
            be pretty and make them fall in love with you
          </div>
          <div className="row p-0 m-0 mr-5 justify-content-between">
            <ButtonPrimary text="Order Now" />
            <ButtonSecondary text="Learn About Us" />
            {/* <div className="btn btn-danger mr-auto">
              Order Now
            </div>
            <div className="btn btn-danger">
              Learn About Us
            </div> */}
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default HeaderDashboard
