import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Materials.scss';

const Materials = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  
  const materials = [
    {
      id: 1,
      name: 'Натуральная кожа',
      description: 'Высококачественная натуральная кожа премиум-класса с различными типами выделки и текстуры.',
      features: [
        'Натуральное происхождение',
        'Высокая прочность',
        'Приятная на ощупь',
        'Естественная вентиляция',
        'Длительный срок службы'
      ],
      colors: [
        { name: 'Черный', code: '#000000' },
        { name: 'Коричневый', code: '#5D4037' },
        { name: 'Бежевый', code: '#D7CCC8' },
        { name: 'Красный', code: '#B71C1C' },
        { name: 'Синий', code: '#0D47A1' },
        { name: 'Белый', code: '#FFFFFF' }
      ],
      image: '/images/materials/leather.jpg',
      gallery: [
        '/images/materials/leather-1.jpg',
        '/images/materials/leather-2.jpg',
        '/images/materials/leather-3.jpg'
      ]
    },
    {
      id: 2,
      name: 'Алькантара',
      description: 'Премиальный искусственный материал с бархатистой поверхностью, имитирующий натуральную замшу.',
      features: [
        'Высокая износостойкость',
        'Не выгорает на солнце',
        'Приятная на ощупь',
        'Не скользит',
        'Легко чистится'
      ],
      colors: [
        { name: 'Черный', code: '#000000' },
        { name: 'Серый', code: '#616161' },
        { name: 'Бежевый', code: '#D7CCC8' },
        { name: 'Красный', code: '#B71C1C' },
        { name: 'Синий', code: '#0D47A1' }
      ],
      image: '/images/materials/alcantara.jpg',
      gallery: [
        '/images/materials/alcantara-1.jpg',
        '/images/materials/alcantara-2.jpg',
        '/images/materials/alcantara-3.jpg'
      ]
    },
    {
      id: 3,
      name: 'Экокожа',
      description: 'Современный искусственный материал, имитирующий натуральную кожу с улучшенными характеристиками.',
      features: [
        'Экологичность',
        'Устойчивость к истиранию',
        'Устойчивость к УФ-излучению',
        'Простота ухода',
        'Доступная цена'
      ],
      colors: [
        { name: 'Черный', code: '#000000' },
        { name: 'Коричневый', code: '#5D4037' },
        { name: 'Бежевый', code: '#D7CCC8' },
        { name: 'Красный', code: '#B71C1C' },
        { name: 'Синий', code: '#0D47A1' },
        { name: 'Белый', code: '#FFFFFF' },
        { name: 'Зеленый', code: '#1B5E20' },
        { name: 'Оранжевый', code: '#E65100' }
      ],
      image: '/images/materials/eco-leather.jpg',
      gallery: [
        '/images/materials/eco-leather-1.jpg',
        '/images/materials/eco-leather-2.jpg',
        '/images/materials/eco-leather-3.jpg'
      ]
    },
    {
      id: 4,
      name: 'Перфорированная кожа',
      description: 'Натуральная или искусственная кожа с перфорацией для улучшения вентиляции и создания уникального дизайна.',
      features: [
        'Улучшенная вентиляция',
        'Уникальный внешний вид',
        'Различные узоры перфорации',
        'Комфорт в жаркую погоду',
        'Сочетание с другими материалами'
      ],
      colors: [
        { name: 'Черный', code: '#000000' },
        { name: 'Коричневый', code: '#5D4037' },
        { name: 'Бежевый', code: '#D7CCC8' },
        { name: 'Красный', code: '#B71C1C' },
        { name: 'Белый', code: '#FFFFFF' }
      ],
      image: '/images/materials/perforated-leather.jpg',
      gallery: [
        '/images/materials/perforated-leather-1.jpg',
        '/images/materials/perforated-leather-2.jpg',
        '/images/materials/perforated-leather-3.jpg'
      ]
    }
  ];
  
  const handleShowModal = (material) => {
    setSelectedMaterial(material);
    setShowModal(true);
  };

  return (
    <section id="materials" className="materials-section">
      <Container>
        <div className="section-title text-center" data-aos="fade-up">
          <h2>Материалы</h2>
          <p>Мы используем только высококачественные материалы для перетяжки салона</p>
        </div>
        
        <Row>
          {materials.map((material, index) => (
            <Col lg={3} md={6} className="mb-4" key={material.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="material-card h-100">
                <div className="material-img">
                  <Card.Img variant="top" src={material.image || `https://via.placeholder.com/300x200?text=${material.name}`} alt={material.name} />
                </div>
                <Card.Body>
                  <Card.Title>{material.name}</Card.Title>
                  <Card.Text>{material.description}</Card.Text>
                  
                  <div className="color-samples">
                    {material.colors.slice(0, 5).map((color, i) => (
                      <div 
                        key={i} 
                        className="color-sample" 
                        style={{ backgroundColor: color.code }}
                        title={color.name}
                      ></div>
                    ))}
                    {material.colors.length > 5 && (
                      <div className="color-sample more">
                        +{material.colors.length - 5}
                      </div>
                    )}
                  </div>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0">
                  <Button 
                    variant="outline-primary" 
                    className="w-100"
                    onClick={() => handleShowModal(material)}
                  >
                    Подробнее
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5" data-aos="fade-up">
          <p className="mb-4">
            Помимо представленных материалов, мы можем предложить индивидуальные решения 
            под ваши требования. Возможно комбинирование различных материалов и цветов.
          </p>
          <Button variant="primary" size="lg">
            Получить консультацию
          </Button>
        </div>
      </Container>
      
      {/* Модальное окно с подробной информацией о материале */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="lg" 
        centered
        className="material-modal"
      >
        {selectedMaterial && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedMaterial.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <Swiper
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="material-gallery"
                  >
                    {selectedMaterial.gallery.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img 
                          src={image || `https://via.placeholder.com/600x400?text=${selectedMaterial.name}`} 
                          alt={`${selectedMaterial.name} ${index + 1}`} 
                          className="img-fluid"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Col>
                <Col md={6}>
                  <div className="material-details">
                    <h4>Описание</h4>
                    <p>{selectedMaterial.description}</p>
                    
                    <h4>Характеристики</h4>
                    <ul className="material-features">
                      {selectedMaterial.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    
                    <h4>Доступные цвета</h4>
                    <div className="color-grid">
                      {selectedMaterial.colors.map((color, index) => (
                        <div key={index} className="color-item">
                          <div 
                            className="color-sample large" 
                            style={{ backgroundColor: color.code }}
                          ></div>
                          <span>{color.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Закрыть
              </Button>
              <Button variant="primary">
                Заказать консультацию
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Materials;