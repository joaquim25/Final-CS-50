import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./courses.css";
import courseImg1 from "../../assets/images/html.png";
import courseImg2 from "../../assets/images/react.png";
import courseImg3 from "../../assets/images/ui-ux.png";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "HTML Course-2023 Beginner to Professional",
    lesson: 36,
    students: 30.5,
    rating: 15.1,
    imgUrl: courseImg1,
  },
  {
    id: "02",
    title: "React Course-2023 for Beginners",
    lesson: 20,
    students: 15,
    rating: 7.1,
    imgUrl: courseImg2,
  },
  {
    id: "03",
    title: "UI/UX Course-2023 for Beginners to Expert",
    lesson: 29,
    students: 9,
    rating: 6.7,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section id="courses">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Courses available to enroll</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis consectetur labore amet doloribus enim officia.
                </p>
              </div>
              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>

          {coursesData.map((item) => (
            <Col lg="4" md="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
