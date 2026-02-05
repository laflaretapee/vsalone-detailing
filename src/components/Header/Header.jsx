import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FaPhone } from 'react-icons/fa';
import logoImg from '../../assets/images/logo.jpg';
import './Header.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <Navbar expand="lg" fixed="top" className={scrolled ? 'navbar-scrolled' : ''}>
      <Container className="px-2"> {/* Изменено с fluid на обычный Container и уменьшены отступы */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img 
            src={logoImg} 
            alt="Vsalone Detailing Logo" 
            className="brand-logo" 
          />
          <span className="brand-text d-none d-sm-inline">Vsalone Detailing</span> {/* Скрываем текст на очень маленьких экранах */}
        </Navbar.Brand>
        <div className="d-flex d-lg-none align-items-center"> {/* Блок для телефона на мобильных */}
          <a href="tel:+79273215687" className="navbar-phone-mobile me-2">
            <FaPhone />
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center"> {/* Добавлен text-center */}
            <Nav.Link as={Link} to="about" smooth={true} duration={500} className="nav-item px-2">О нас</Nav.Link>
            <Nav.Link as={Link} to="services" smooth={true} duration={500} className="nav-item px-2">Услуги</Nav.Link>
            <Nav.Link as={Link} to="portfolio" smooth={true} duration={500} className="nav-item px-2">Наши работы</Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500} className="nav-item px-2">Контакты</Nav.Link>
          </Nav>
          <div className="d-lg-none text-center mt-2 mb-2"> {/* Блок для мобильной версии */}
            <a href="tel:+79273215687" className="navbar-phone d-block mb-2">
              <FaPhone /> +7 (927) 321-56-87
            </a>
          </div>
        </Navbar.Collapse>
        <div className="contact-block d-none d-lg-flex"> {/* Блок для десктопной версии */}
          <a href="tel:+79273215687" className="navbar-phone">
            <FaPhone /> +7 (927) 321-56-87
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
