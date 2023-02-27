import React from "react";
import { Container, Row, Col } from "reactstrap";

const Company = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="2" md="3">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-facebook-fill"></i> Facebook
            </h3>
          </Col>
          <Col lg="2" md="3">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-gatsby-fill"></i> Gatsby
            </h3>
          </Col>
          <Col lg="2" md="3">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-discord-fill"></i> Discord
            </h3>
          </Col>
          <Col lg="2" md="3">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-apple-fill"></i> Apple
            </h3>
          </Col>
          <Col lg="2" md="3">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-microsoft-fill"></i> Microsoft
            </h3>
          </Col>
          <Col lg="2" md="3">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-telegram-fill"></i> Telegram
            </h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;
