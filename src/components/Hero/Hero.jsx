import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="overlay"></div>
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={7} className="text-white" data-aos="fade-right">
            <h1 className="display-4 fw-bold mb-4">
              Премиум детейлинг <br />вашего автомобиля
            </h1>
            <p className="lead mb-4">
              Профессиональная перетяжка салона и изготовление эксклюзивных 
              аксессуаров из натуральной кожи. Превратим интерьер вашего 
              автомобиля в произведение искусства.
            </p>
            <div className="hero-buttons">
              <Button 
                variant="primary" 
                size="lg" 
                className="me-3"
                as={Link}
                to="contact"
                smooth={true}
                duration={500}
              >
                Получить консультацию
              </Button>
              <Button 
                variant="outline-light" 
                size="lg"
                as={Link}
                to="portfolio"
                smooth={true}
                duration={500}
              >
                Смотреть работы
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;