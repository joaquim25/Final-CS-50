import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About Us",
    url: "#",
  },
  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "PrivacyPolicy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },
  {
    display: "Terms of Service",
    url: "#",
  },
  {
    display: "Purchases Guide",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-service-fill"></i> CS50-FP
            </h2>

            <div className="follows">
              <p className="mb-0">Follow Us</p>
              <span>
                {" "}
                <a href="#">
                  <i class="ri-facebook-fill"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="#">
                  <i class="ri-instagram-fill"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="#">
                  <i class="ri-linkedin-fill"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="#">
                  <i class="ri-twitter-fill"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h6 className="fw-bold">Get in Touch</h6>
            <p>Address: Somewhere, Earth</p>
            <p>Phone: +351 976987652</p>
            <p>Email: qw123@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
