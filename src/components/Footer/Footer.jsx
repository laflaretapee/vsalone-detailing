import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaTelegram, FaVk } from 'react-icons/fa';
import devLogo from '../../assets/images/DZ.png';
import './Footer.scss';

  const Footer = () => {
    return (
      <footer className="footer">
        <div className="map-section">
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Afd8b6a362107e88ccc016278a3b118e0f39b0587ec775ae826f5878685135fd0&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true" 
            width="100%" 
            height="400" 
            frameBorder="0"
            title="Яндекс Карта"
            className="yandex-map"
          ></iframe>
        </div>
        
        <div className="footer-main">
          <Container>
            <Row>
              <Col lg={4} md={6} className="mb-4 mb-lg-0">
                <div className="footer-info">
                  <h3>Vsalone Detailing</h3>
                  <p>
                    Профессиональная перетяжка салонов автомобилей и изготовление 
                    эксклюзивных аксессуаров из натуральной кожи.
                  </p>
                  <div className="social-links">
                    <a href="https://vk.com/vsalonervk" target='_blank' className="vkontakte"><FaVk /></a>
                    <a href="https://wa.me/79273215687" target='_blank' className="whatsapp"><FaWhatsapp /></a>
                  </div>
                </div>
              </Col>
              
              <Col lg={2} md={6} className="mb-4 mb-lg-0">
                <div className="footer-links">
                  <h4>Навигация</h4>
                  <ul>
                    <li><a href="#hero">Главная</a></li>
                    <li><a href="#about">О нас</a></li>
                    <li><a href="#services">Услуги</a></li>
                    <li><a href="#portfolio">Наши работы</a></li>
                    <li><a href="#contact">Контакты</a></li>
                  </ul>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4 mb-lg-0">
                <div className="footer-contact">
                  <h4>Контакты</h4>
                  <p>
                    <FaMapMarkerAlt className="icon" />
                    с. Раевский, Альшеевский Район, ул. Кирова 221
                  </p>
                  <p>
                    <FaPhone className="icon" />
                    <a href="tel:+79273215687">+7 (927) 321-56-87</a>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        
        <div className="footer-bottom">
          <Container>
            <div className="copyright">
              &copy; {new Date().getFullYear()} <strong>Vsalone Detailing</strong>. Все права защищены.
            </div>
            <div className="credits">
              <a href="#">Политика конфиденциальности</a> | <a href="#">Условия использования</a>
            </div>
            <div className="developed-by" style={{ marginTop: 10 }}>
              Разработано&nbsp;
              <a href="https://dinarziyazetdinov.ru" target="_blank" rel="noopener noreferrer">
                <img src={devLogo} alt="Логотип разработчика" style={{ height: 24, verticalAlign: 'middle' }} />
              </a>
            </div>
          </Container>
        </div>
      </footer>
    );
  };

  export default Footer;