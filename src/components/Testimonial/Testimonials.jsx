import React from "react";
import { Container, Row, Col } from "reactstrap";
import img from "../../assets/images/testimonial01.png";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Clients Opinion</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-2 fw-bold">Great content</h6>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Cumque reprehenderit nobis eaque repellat,
                        obcaecati perspiciatis?
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Robert Jr.</h6>
                        <p>Cambodia</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-2 fw-bold">Great content</h6>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Cumque reprehenderit nobis eaque repellat,
                        obcaecati perspiciatis?
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Robert Jr.</h6>
                        <p>Cambodia</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-2 fw-bold">Great content</h6>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Cumque reprehenderit nobis eaque repellat,
                        obcaecati perspiciatis?
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Robert Jr.</h6>
                        <p>Cambodia</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
