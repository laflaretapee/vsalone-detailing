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
            <img
              src={require('../../assets/images/works/1.jpg')}
              alt="Наша мастерская"
              className="img-fluid rounded"
              style={{ maxWidth: '380px', height: 'auto', display: 'block', margin: '0 auto' }}
            />
            </div>
          </Col>
          
          <Col lg={6} data-aos="fade-left" data-aos-delay="100">
            <div className="about-content">
              <h3>Детейлинг автомобильных интерьеров</h3>
              <p>
                Мы - команда профессионалов, которые любят своё дело и всегда работают с душой. Каждый проект для нас уникален, и мы внимательно относимся к вашим пожеланиям.
              </p>
              <p>
                <strong>Бесплатный замер, выезд и доставка</strong><br></br>
                Наш специалист приедет к вам для замера, а готовое изделие мы доставим бесплатно - вам не придётся беспокоиться о логистике.
              </p>
              <p>
              <strong>Гарантия качества</strong><br></br>
              Мы используем только проверенные материалы и гарантируем качество всех выполненных работ.
              </p>
              <p>
              <strong>Большой выбор материалов</strong><br></br>
              В нашем ассортименте - натуральная кожа, алькантара, экокожа, карпет и другие современные материалы. Поможем подобрать оптимальный вариант для вашего автомобиля.
              </p>
              <p>
              <strong>Работаем для вас - надёжно, качественно и с заботой!</strong>
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