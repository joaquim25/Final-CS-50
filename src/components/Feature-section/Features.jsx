import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Easy to Learn",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quia sunt rerum. Quidem inventore enim eaque dignissimos impedit, ipsa dolore!",
    icon: "ri-draft-fill",
  },
  {
    title: "24/7 Support",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quia sunt rerum. Quidem inventore enim eaque dignissimos impedit, ipsa dolore!",
    icon: "ri-question-answer-fill",
  },
  {
    title: "Certified Content",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quia sunt rerum. Quidem inventore enim eaque dignissimos impedit, ipsa dolore!",
    icon: "ri-file-mark-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-4">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
