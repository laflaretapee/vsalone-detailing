import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import seatsImg from '../../assets/images/seats.jpg';
import doorCardsImg from '../../assets/images/door-cards.jpg';
import ceilingImg from '../../assets/images/ceiling.jpg';
import pillarsImg from '../../assets/images/pillars.jpg';
import rulImg from '../../assets/images/rul.jpg';
import kppImg from '../../assets/images/kpp.jpg';
import sakvoiImg from '../../assets/images/sakvoyag.jpg';
import './Services.scss';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Перетяжка сидений',
      description: 'Обновление внешнего вида и комфорта сидений с помощью натуральной кожи, алькантары или других материалов.',
      image: seatsImg
    },
    {
      id: 2,
      title: 'Перетяжка дверных карт',
      description: 'Изготовление и перетяжка дверных карт с учетом индивидуальных пожеланий клиента.',
      image: doorCardsImg
    },
    {
      id: 3,
      title: 'Перетяжка потолка',
      description: 'Обновление потолка автомобиля с возможностью установки дополнительных элементов, таких как "звездное небо".',
      image: ceilingImg
    },
    {
      id: 4,
      title: 'Перетяжка стоек и пилларов',
      description: 'Профессиональная перетяжка стоек и пилларов для создания целостного дизайна интерьера.',
      image: pillarsImg
    },
    {
      id: 5,
      title: 'Перетяжка рулевого колеса',
      description: 'Обновление внешнего вида и комфорта рулевого колеса с помощью натуральной кожи, алькантары или других материалов.',
      image: rulImg
    },
    {
      id: 6,
      title: 'Перетяжка ручки КПП',
      description: 'Обновление внешнего вида и комфорта ручки КПП с помощью натуральной кожи, алькантары или других материалов.',
      image: kppImg
    },
    {
      id: 7,
      title: 'Саквояж, органайзер для вашего автомобиля',
      description: 'Саквояж, органайзер для вашего автомобиля',
      image: sakvoiImg
    }
  ];

  return (
    <section id="services" className="services-section">
      <Container>
        <div className="section-title text-center" data-aos="fade-up">
          <h2>Наши услуги</h2>
          <p>Профессиональная перетяжка и обновление салона вашего автомобиля</p>
        </div>
        
        <Row>
          {services.map((service) => (
            <Col key={service.id} lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay={(service.id - 1) * 100}>
              <Card className="service-card">
                <div className="service-img">
                  <img src={service.image} alt={service.title} className="card-img-top" />
                  <div className="service-icon">
                    {service.icon}
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button variant="outline-primary" className="service-btn">Подробнее</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5" data-aos="fade-up">
        <p className="mb-4">
          Не нашли нужную услугу? Свяжитесь с нами для индивидуальной консультации.
        </p>
        <Button
          variant="primary"
          size="lg"
          href="https://wa.me/79273215687?text=Здравствуйте!%20Я%20хочу%20получить%20индивидуальную%20консультацию."
          target="_blank"
          rel="noopener noreferrer"
        >
          Получить консультацию
        </Button>
      </div>

      </Container>
    </section>
  );
};

export default Services;