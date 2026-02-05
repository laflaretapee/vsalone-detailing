import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaTelegram, FaVk } from 'react-icons/fa';
import devLogo from '../../assets/images/DZ.png';
import './Footer.scss';

	  const Footer = () => {
      const mapContainerRef = useRef(null);

      useEffect(() => {
        const container = mapContainerRef.current;
        if (!container) return;

        container.innerHTML = '';
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.async = true;
        script.src =
          'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acbf7351ffa8797c578f1d30982e1a9fe08889474ff7f780a457e83a3ca3e2496&width=100%25&height=400&lang=ru_RU&scroll=true';
        container.appendChild(script);

        return () => {
          container.innerHTML = '';
        };
      }, []);

	    return (
	      <footer className="footer">
	        <div className="map-section">
	          <div ref={mapContainerRef} className="yandex-map" aria-label="Яндекс Карта" />
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
		                    <a href="https://vk.com/vsalonervk" target="_blank" rel="noopener noreferrer" className="vkontakte"><FaVk /></a>
		                    <a href="https://t.me/VSALONE_RVK" target="_blank" rel="noopener noreferrer" className="telegram"><FaTelegram /></a>
		                    <a href="https://wa.me/79273215687" target="_blank" rel="noopener noreferrer" className="whatsapp"><FaWhatsapp /></a>
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
	                    с. Раевский, Альшеевский район, ул. Кирова 98
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
	              <a href="/privacy.html" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a> |{' '}
	              <a href="/terms.html" target="_blank" rel="noopener noreferrer">Условия использования</a>
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
