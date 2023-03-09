import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./hero-section.css";
import heroImg from "../../assets/images/hero-img.png";

const HeroSection = () => {
  return (
    <section id="hero">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4">
                Learn Whatever you want, <br /> Wherever you want.
              </h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Maiores nostrum ipsa <br />
                similique voluptates nobis illum eum at <br />
                veritatis reprehenderit autem?
              </p>

              <div className="search">
                <input type="text" placeholder="Search..." />
                <button className="btn">
                  <i class="ri-search-line"></i>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img
              src={heroImg}
              alt="A student holding some books"
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
