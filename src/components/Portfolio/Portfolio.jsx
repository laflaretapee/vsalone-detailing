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
      title: 'Перетяжка салона Mazda',
      category: 'upholstery',
      description: 'Полная перетяжка салона в натуральную кожу',
      imageBefore: require('../../assets/images/works/19.jpg'),
      imageAfter: require('../../assets/images/works/21.jpg'),
    },
    {
      id: 2,
      title: 'Перешив руля Mazda',
      category: 'controls',
      description: 'Перешив руля комбинацией кожи и экокожи',
      imageBefore: require('../../assets/images/works/28.jpg'),
      imageAfter: require('../../assets/images/works/35.jpg'),
    },
    {
      id: 4,
      title: 'Перетяжка дверных карт',
      category: 'upholstery',
      description: 'Перетяжка дверных карт с использованием экокожи',
      imageBefore: require('../../assets/images/works/6.jpg'),
      imageAfter: require('../../assets/images/works/15.jpg'),
    },
    {
      id: 5,
      title: 'Перетяжка торпеды Ford',
      category: 'controls',
      description: 'Перетяжка торпеды в экокожу',
      imageBefore: require('../../assets/images/works/8.jpg'),
      imageAfter: require('../../assets/images/works/14.jpg'),
    },
    {
      id: 3,
      title: 'Саквояж',
      category: 'accessories',
      description: 'Эксклюзивный саквояж в багажник из натуральной кожи (в продаже)',
      imageBefore: require('../../assets/images/sakvoyag.jpg'),
      imageAfter: null,
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
          onClick={() => setFilter('all')}
          className={`mx-2 mb-2 filter-btn${filter === 'all' ? ' active' : ''}`}
        >
          Все работы
        </Button>
          <Button 
            onClick={() => setFilter('upholstery')}
            className={`mx-2 mb-2 service-btn${filter === 'upholstery' ? ' active' : ''}`}
          >
            Перетяжка салона
          </Button>
          <Button 
            onClick={() => setFilter('controls')}
            className={`mx-2 mb-2 service-btn${filter === 'controls' ? ' active' : ''}`}
          >
            Элементы управления
          </Button>
          <Button 
            onClick={() => setFilter('accessories')}
            className={`mx-2 mb-2 service-btn${filter === 'accessories' ? ' active' : ''}`}
          >
            Аксессуары
          </Button>
        </div>

	        
	        <Row className="portfolio-items">
	          {filteredItems.map((item) => (
	            <Col lg={6} className="mb-4" key={item.id} data-aos="fade-up">
                {(() => {
                  const hasBeforeAfter =
                    Boolean(item.imageBefore) &&
                    Boolean(item.imageAfter) &&
                    item.imageBefore !== item.imageAfter;

                  const sliderImage = item.imageAfter || item.imageBefore;

                  return (
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
	                    pagination={hasBeforeAfter ? { clickable: true } : false}
	                    navigation={hasBeforeAfter}
	                    modules={[EffectCoverflow, Pagination, Navigation]}
	                    className="mySwiper"
	                  >
                      {hasBeforeAfter ? (
                        <>
                          <SwiperSlide>
                            <div className="slide-label">До</div>
                            <img
                              src={item.imageBefore || "https://via.placeholder.com/600x400?text=До"}
                              alt={`${item.title} до`}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="slide-label">После</div>
                            <img
                              src={item.imageAfter || "https://via.placeholder.com/600x400?text=После"}
                              alt={`${item.title} после`}
                            />
                          </SwiperSlide>
                        </>
                      ) : (
                        <SwiperSlide>
                          <img
                            src={sliderImage || "https://via.placeholder.com/600x400"}
                            alt={item.title}
                          />
                        </SwiperSlide>
                      )}
	                  </Swiper>
	                </div>
	              </div>
                  );
                })()}
	            </Col>
	          ))}
	        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
