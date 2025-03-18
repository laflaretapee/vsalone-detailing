import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Tab, Nav } from 'react-bootstrap';
import './Pricing.scss';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('upholstery');
  
  const pricingData = {
    upholstery: [
      {
        title: 'Перетяжка сидений',
        items: [
          { name: 'Перетяжка передних сидений (эко-кожа)', price: 'от 25 000 ₽' },
          { name: 'Перетяжка передних сидений (натуральная кожа)', price: 'от 40 000 ₽' },
          { name: 'Перетяжка задних сидений (эко-кожа)', price: 'от 30 000 ₽' },
          { name: 'Перетяжка задних сидений (натуральная кожа)', price: 'от 45 000 ₽' },
          { name: 'Перетяжка всех сидений (эко-кожа)', price: 'от 50 000 ₽' },
          { name: 'Перетяжка всех сидений (натуральная кожа)', price: 'от 80 000 ₽' }
        ]
      },
      {
        title: 'Перетяжка потолка и стоек',
        items: [
          { name: 'Перетяжка потолка (алькантара)', price: 'от 20 000 ₽' },
          { name: 'Перетяжка потолка (кожа)', price: 'от 25 000 ₽' },
          { name: 'Перетяжка стоек (алькантара)', price: 'от 10 000 ₽' },
          { name: 'Перетяжка стоек (кожа)', price: 'от 15 000 ₽' },
          { name: 'Комплексная перетяжка потолка и стоек (алькантара)', price: 'от 25 000 ₽' },
          { name: 'Комплексная перетяжка потолка и стоек (кожа)', price: 'от 35 000 ₽' }
        ]
      },
      {
        title: 'Перетяжка дверных карт',
        items: [
          { name: 'Перетяжка передних дверных карт (эко-кожа)', price: 'от 15 000 ₽' },
          { name: 'Перетяжка передних дверных карт (натуральная кожа)', price: 'от 25 000 ₽' },
          { name: 'Перетяжка задних дверных карт (эко-кожа)', price: 'от 15 000 ₽' },
          { name: 'Перетяжка задних дверных карт (натуральная кожа)', price: 'от 25 000 ₽' },
          { name: 'Перетяжка всех дверных карт (эко-кожа)', price: 'от 25 000 ₽' },
          { name: 'Перетяжка всех дверных карт (натуральная кожа)', price: 'от 45 000 ₽' }
        ]
      }
    ],
    controls: [
      {
        title: 'Перешив руля',
        items: [
          { name: 'Перетяжка руля (кожа)', price: 'от 8 000 ₽' },
          { name: 'Перетяжка руля (кожа + алькантара)', price: 'от 10 000 ₽' },
          { name: 'Перетяжка руля (кожа + перфорация)', price: 'от 9 000 ₽' },
          { name: 'Утолщение обода руля', price: 'от 3 000 ₽' },
          { name: 'Установка подогрева руля', price: 'от 12 000 ₽' }
        ]
      },
      {
        title: 'Перешив элементов управления',
        items: [
          { name: 'Перетяжка ручки КПП (кожа)', price: 'от 3 000 ₽' },
          { name: 'Перетяжка чехла КПП (кожа)', price: 'от 3 000 ₽' },
          { name: 'Перетяжка ручки КПП и чехла (кожа)', price: 'от 5 000 ₽' },
          { name: 'Перетяжка подлокотника (кожа)', price: 'от 5 000 ₽' },
          { name: 'Перетяжка ручного тормоза (кожа)', price: 'от 3 000 ₽' }
        ]
      },
      {
        title: 'Перешив торпеды',
        items: [
          { name: 'Частичная перетяжка торпеды (эко-кожа)', price: 'от 15 000 ₽' },
          { name: 'Частичная перетяжка торпеды (натуральная кожа)', price: 'от 25 000 ₽' },
          { name: 'Полная перетяжка торпеды (эко-кожа)', price: 'от 30 000 ₽' },
          { name: 'Полная перетяжка торпеды (натуральная кожа)', price: 'от 45 000 ₽' },
          { name: 'Перетяжка центральной консоли (кожа)', price: 'от 15 000 ₽' }
        ]
      }
    ],
    accessories: [
      {
        title: 'Саквояжи и органайзеры',
        items: [
          { name: 'Саквояж в багажник (эко-кожа)', price: 'от 10 000 ₽' },
          { name: 'Саквояж в багажник (натуральная кожа)', price: 'от 15 000 ₽' },
          { name: 'Органайзер между сиденьями (эко-кожа)', price: 'от 8 000 ₽' },
          { name: 'Органайзер между сиденьями (натуральная кожа)', price: 'от 12 000 ₽' },
          { name: 'Органайзер на спинку сиденья (эко-кожа)', price: 'от 5 000 ₽' },
          { name: 'Органайзер на спинку сиденья (натуральная кожа)', price: 'от 8 000 ₽' }
        ]
      },
      {
        title: 'Аксессуары из кожи',
        items: [
          { name: 'Чехол для ключа (кожа)', price: 'от 2 000 ₽' },
          { name: 'Чехол для документов (кожа)', price: 'от 3 000 ₽' },
          { name: 'Чехол для очков (кожа)', price: 'от 2 000 ₽' },
          { name: 'Кошелек для монет (кожа)', price: 'от 2 500 ₽' },
          { name: 'Брелок с логотипом авто (кожа)', price: 'от 1 500 ₽' }
        ]
      }
    ],
    packages: [
      {
        title: 'Комплексные решения',
        items: [
          { name: 'Пакет "Базовый" (руль + ручка КПП + чехол)', price: 'от 12 000 ₽' },
          { name: 'Пакет "Комфорт" (передние сиденья + руль + ручка КПП)', price: 'от 45 000 ₽' },
          { name: 'Пакет "Премиум" (все сиденья + руль + ручка КПП + дверные карты)', price: 'от 90 000 ₽' },
          { name: 'Пакет "Люкс" (полная перетяжка салона + аксессуары)', price: 'от 150 000 ₽' }
        ]
      },
      {
        title: 'Дополнительные услуги',
        items: [
          { name: 'Шумоизоляция салона', price: 'от 20 000 ₽' },
          { name: 'Установка подогрева сидений', price: 'от 15 000 ₽' },
          { name: 'Установка вентиляции сидений', price: 'от 25 000 ₽' },
          { name: 'Установка LED-подсветки в салоне', price: 'от 10 000 ₽' },
          { name: 'Химчистка салона', price: 'от 5 000 ₽' }
        ]
      }
    ]
  };

  return (
    <section id="pricing" className="pricing-section">
      <Container>
        <div className="section-title text-center" data-aos="fade-up">
          <h2>Цены на услуги</h2>
          <p>Стоимость работ по перетяжке салона и изготовлению аксессуаров</p>
        </div>
        
        <Tab.Container id="pricing-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Nav className="pricing-nav justify-content-center mb-5" data-aos="fade-up">
            <Nav.Item>
              <Nav.Link eventKey="upholstery">Перетяжка салона</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="controls">Элементы управления</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="accessories">Аксессуары</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="packages">Комплексные решения</Nav.Link>
            </Nav.Item>
          </Nav>
          
          <Tab.Content>
            {Object.keys(pricingData).map((category) => (
              <Tab.Pane eventKey={category} key={category}>
                <Row>
                  {pricingData[category].map((section, sectionIndex) => (
                    <Col lg={6} className="mb-4" key={sectionIndex} data-aos="fade-up" data-aos-delay={sectionIndex * 100}>
                      <Card className="pricing-card h-100">
                        <Card.Header>
                          <h3>{section.title}</h3>
                        </Card.Header>
                        <Card.Body>
                          <ul className="price-list">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <span className="service-name">{item.name}</span>
                                <span className="service-price">{item.price}</span>
                              </li>
                            ))}
                          </ul>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
        
        <div className="pricing-note text-center mt-5" data-aos="fade-up">
          <p>
            * Указанные цены являются ориентировочными и могут варьироваться в зависимости от марки и модели автомобиля, 
            сложности работ и выбранных материалов. Для получения точной стоимости необходима консультация специалиста.
          </p>
          <Button variant="primary" size="lg" className="mt-3">
            Получить точный расчет
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;