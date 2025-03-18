import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTools, FaUserTie, FaAward, FaHistory } from 'react-icons/fa';
import './About.scss';

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <div className="section-title text-center" data-aos="fade-up">
          <h2>О нашей компании</h2>
          <p>Мы создаем уникальные интерьеры для вашего автомобиля</p>
        </div>
        
        <Row className="mt-5">
          <Col lg={6} data-aos="fade-right" data-aos-delay="100">
            <div className="about-img">
              <img src="/images/about-img.jpg" alt="Наша мастерская" className="img-fluid rounded" />
            </div>
          </Col>
          
          <Col lg={6} data-aos="fade-left" data-aos-delay="100">
            <div className="about-content">
              <h3>Премиум детейлинг автомобильных интерьеров</h3>
              <p>
                Наша компания специализируется на профессиональной перетяжке салонов автомобилей 
                и изготовлении эксклюзивных аксессуаров из натуральной кожи. Мы работаем с 2015 года 
                и за это время реализовали более 500 проектов различной сложности.
              </p>
              <p>
                Мы используем только высококачественные материалы от проверенных поставщиков, 
                что гарантирует долговечность и безупречный внешний вид наших работ. Каждый проект 
                выполняется с особым вниманием к деталям и индивидуальным подходом к пожеланиям клиента.
              </p>
              <p>
                Наша команда состоит из опытных мастеров, которые постоянно совершенствуют свои навыки 
                и следят за последними тенденциями в автомобильном детейлинге.
              </p>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-5">
          {[
            {
              icon: <FaTools />,
              title: 'Современное оборудование',
              description: 'Используем профессиональное оборудование и инструменты для достижения идеального результата'
            },
            {
              icon: <FaUserTie />,
              title: 'Опытные мастера',
              description: 'Наши специалисты имеют более 7 лет опыта работы с кожей и автомобильными интерьерами'
            },
            {
              icon: <FaAward />,
              title: 'Гарантия качества',
              description: 'Предоставляем гарантию на все виды работ и используемые материалы до 3 лет'
            },
            {
              icon: <FaHistory />,
              title: 'Соблюдение сроков',
              description: 'Выполняем работы в согласованные сроки без задержек и переносов'
            }
          ].map((item, index) => (
            <Col md={6} lg={3} key={index} data-aos="zoom-in" data-aos-delay={100 * (index + 1)}>
              <Card className="feature-card text-center">
                <div className="icon-box">
                  {item.icon}
                </div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;