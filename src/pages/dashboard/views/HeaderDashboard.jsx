import React, { useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import { ButtonArrowPrimary, ButtonArrowSecondary } from '../../components/Button';
import '../dashboard.css'

const HeaderDashboard = () => {
  return (
    <div className="HeaderDashboard">
      <Container>
        <Col sm={6} className="">
          <div className="header title">
            Beautiful For The Everyday Activity
          </div>
          <div className="header desc">
            be pretty and make them fall in love with you
          </div>
          <div className="row p-0 m-0 mr-5">
            <Col sm={6} className="p-0 pt-2">
              <ButtonArrowPrimary text="Order Now" />
            </Col>
            <Col sm={6} className="p-0 pt-2">
              <ButtonArrowSecondary text="Learn About Us" />
            </Col>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default HeaderDashboard
