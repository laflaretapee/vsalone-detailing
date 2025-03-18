import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Portfolio.scss';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const portfolioItems = [
    {
      id: 1,
      title: 'Перетяжка салона BMW X5',
      category: 'upholstery',
      description: 'Полная перетяжка салона в натуральную кожу наппа с контрастной строчкой',
      imageBefore: '/images/portfolio/bmw-x5-before.jpg',
      imageAfter: '/images/portfolio/bmw-x5-after.jpg',
    },
    {
      id: 2,
      title: 'Перешив руля Mercedes-Benz',
      category: 'controls',
      description: 'Перешив руля комбинацией кожи и алькантары с красной строчкой',
      imageBefore: '/images/portfolio/mercedes-wheel-before.jpg',
      imageAfter: '/images/portfolio/mercedes-wheel-after.jpg',
    },
    {
      id: 3,
      title: 'Саквояж для Audi Q7',
      category: 'accessories',
      description: 'Изготовление эксклюзивного саквояжа в багажник из натуральной кожи',
      imageBefore: '/images/portfolio/audi-trunk-before.jpg',
      imageAfter: '/images/portfolio/audi-trunk-after.jpg',
    },
    {
      id: 4,
      title: 'Перетяжка потолка Lexus LX',
      category: 'upholstery',
      description: 'Перетяжка потолка в черную алькантару с установкой LED-подсветки',
      imageBefore: '/images/portfolio/lexus-ceiling-before.jpg',
      imageAfter: '/images/portfolio/lexus-ceiling-after.jpg',
    },
    {
      id: 5,
      title: 'Перетяжка торпеды Toyota Camry',
      category: 'controls',
      description: 'Перетяжка торпеды в кожу с декоративной строчкой',
      imageBefore: '/images/portfolio/toyota-dash-before.jpg',
      imageAfter: '/images/portfolio/toyota-dash-after.jpg',
    },
    {
      id: 6,
      title: 'Органайзер для Range Rover',
      category: 'accessories',
      description: 'Изготовление органайзера между сиденьями с подстаканниками',
      imageBefore: '/images/portfolio/range-organizer-before.jpg',
      imageAfter: '/images/portfolio/range-organizer-after.jpg',
    },
  ];
  
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="portfolio-section">
      <Container>
        <div className="section-title text-center" data-aos="fade-up">
          <h2>Наши работы</h2>
          <p>Примеры выполненных проектов по перетяжке и изготовлению аксессуаров</p>
        </div>
        
        <div className="portfolio-filter text-center mb-5" data-aos="fade-up">
          <Button 
            variant={filter === 'all' ? 'primary' : 'outline-primary'} 
            onClick={() => setFilter('all')}
            className="mx-2 mb-2"
          >
            Все работы
          </Button>
          <Button 
            variant={filter === 'upholstery' ? 'primary' : 'outline-primary'} 
            onClick={() => setFilter('upholstery')}
            className="mx-2 mb-2"
          >
            Перетяжка салона
          </Button>
          <Button 
            variant={filter === 'controls' ? 'primary' : 'outline-primary'} 
            onClick={() => setFilter('controls')}
            className="mx-2 mb-2"
          >
            Элементы управления
          </Button>
          <Button 
            variant={filter === 'accessories' ? 'primary' : 'outline-primary'} 
            onClick={() => setFilter('accessories')}
            className="mx-2 mb-2"
          >
            Аксессуары
          </Button>
        </div>
        
        <Row className="portfolio-items">
          {filteredItems.map((item) => (
            <Col lg={6} className="mb-4" key={item.id} data-aos="fade-up">
              <div className="portfolio-item">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                
                <div className="before-after-slider">
                  <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="slide-label">До</div>
                      <img src={item.imageBefore || "https://via.placeholder.com/600x400?text=До"} alt={`${item.title} до`} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slide-label">После</div>
                      <img src={item.imageAfter || "https://via.placeholder.com/600x400?text=После"} alt={`${item.title} после`} />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-4" data-aos="fade-up">
          <Button variant="primary" size="lg">
            Смотреть все работы
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;