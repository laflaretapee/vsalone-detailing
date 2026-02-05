import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import seatsImg from '../../assets/images/seats.jpg';
import doorCardsImg from '../../assets/images/door-cards.jpg';
import ceilingImg from '../../assets/images/ceiling.jpg';
import pillarsImg from '../../assets/images/pillars.jpg';
import rulImg from '../../assets/images/rul.jpg';
import kppImg from '../../assets/images/kpp.jpg';
import sakvoiImg from '../../assets/images/sakvoyag.jpg';
import tintingImg from '../../assets/images/services/tinting.png';
import ppfImg from '../../assets/images/services/ppf.png';
import polishingImg from '../../assets/images/services/polishing.png';
import './Services.scss';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleShowModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const telegramLink = 'https://t.me/VSALONE_RVK';

  const services = [
    {
      id: 1,
      title: 'Перетяжка сидений',
      description: 'Обновление внешнего вида и комфорта сидений с помощью натуральной кожи, алькантары или других материалов.',
      image: seatsImg,
      fullDescription: [
        'Перетяжка сидений — один из самых заметных способов обновить салон. Подбираем материал, фактуру и цвет под ваш интерьер и стиль авто.',
        'Аккуратно разбираем сиденье, выполняем раскрой по лекалам и прошивку с ровной декоративной строчкой. При необходимости усиливаем зоны повышенного износа.',
      ],
      includes: [
        'Подбор материала и цвета',
        'Возможность комбинации материалов (кожа/алькантара/экокожа)',
        'Декоративная строчка и кант',
        'Восстановление формы (по согласованию)',
        'Рекомендации по уходу',
      ]
    },
    {
      id: 2,
      title: 'Перетяжка дверных карт',
      description: 'Изготовление и перетяжка дверных карт с учетом индивидуальных пожеланий клиента.',
      image: doorCardsImg,
      fullDescription: [
        'Дверные карты постоянно контактируют с руками и одеждой, поэтому они быстро теряют вид. Обновим их материалом, который сочетается с сиденьями и общим дизайном салона.',
        'Можем перетянуть отдельные вставки или выполнить комплексно, включая подлокотники и элементы декора.',
      ],
      includes: [
        'Перетяжка вставок и подлокотников',
        'Подбор фактуры/цвета под салон',
        'Аккуратные стыки и швы',
        'Возможность прострочки в стиле OEM',
      ]
    },
    {
      id: 3,
      title: 'Перетяжка потолка',
      description: 'Обновление потолка автомобиля с возможностью установки дополнительных элементов, таких как "звездное небо".',
      image: ceilingImg,
      fullDescription: [
        'Потолок задает тон всему интерьеру. Перетяжка помогает убрать провисания, пятна и следы времени, а также сделать салон визуально «дороже».',
        'Работаем с популярными материалами (алькантара/ткань/экокожа). Дополнительно можем реализовать эффект «звездного неба» — по согласованию.',
      ],
      includes: [
        'Демонтаж/монтаж потолка',
        'Обновление основы и проклейка',
        'Перетяжка материалом на выбор',
        'Опции: «звездное небо» (по согласованию)',
      ]
    },
    {
      id: 4,
      title: 'Перетяжка стоек и пилларов',
      description: 'Профессиональная перетяжка стоек и пилларов для создания целостного дизайна интерьера.',
      image: pillarsImg,
      fullDescription: [
        'Стойки и пиллары — важная часть визуальной целостности салона. Перетяжка позволяет добиться единого стиля с потолком и сиденьями.',
        'Используем материалы, которые хорошо держат форму на изгибах и углах, добиваясь аккуратной геометрии и плотной посадки.',
      ],
      includes: [
        'Перетяжка A/B/C стоек (по необходимости)',
        'Согласование материала под потолок и салон',
        'Аккуратная подрезка и посадка',
      ]
    },
    {
      id: 5,
      title: 'Перетяжка рулевого колеса',
      description: 'Обновление внешнего вида и комфорта рулевого колеса с помощью натуральной кожи, алькантары или других материалов.',
      image: rulImg,
      fullDescription: [
        'Руль — элемент, который вы ощущаете каждый день. Перетяжка делает хват комфортнее и возвращает премиальный вид.',
        'Можно выбрать кожу (гладкая/перфорация), алькантару, цвет нити и стиль шва. При необходимости делаем утолщение и метку «12 часов».',
      ],
      includes: [
        'Подбор материала и цвета нити',
        'Швы: макраме/ёлочка/классика (по согласованию)',
        'Перфорация и комбинации материалов',
        'Опция утолщения обода',
      ]
    },
    {
      id: 6,
      title: 'Перетяжка ручки КПП',
      description: 'Обновление внешнего вида и комфорта ручки КПП с помощью натуральной кожи, алькантары или других материалов.',
      image: kppImg,
      fullDescription: [
        'Перетяжка ручки КПП — небольшой штрих, который сильно влияет на ощущения от салона.',
        'Подбираем материал под руль/сиденья, делаем ровный шов и аккуратную посадку. При желании обновим чехол кулисы.',
      ],
      includes: [
        'Материал под стиль салона',
        'Ровный декоративный шов',
        'Опция: перетяжка чехла кулисы (по согласованию)',
      ]
    },
    {
      id: 7,
      title: 'Саквояж, органайзер для вашего автомобиля',
      description: 'Эксклюзивный саквояж/органайзер из натуральной кожи (в продаже).',
      image: sakvoiImg,
      fullDescription: [
        'Саквояж/органайзер из натуральной кожи — практичное решение для багажника и стильный аксессуар в одном.',
        'Доступны разные размеры и варианты исполнения. Уточняйте наличие и комплектацию — подскажем оптимальный вариант под ваш автомобиль.',
      ],
      includes: [
        'Натуральная кожа и качественная фурнитура',
        'Варианты размеров и отделений',
        'Цвет и строчка по согласованию',
      ]
    },
    {
      id: 8,
      title: 'Тонировка',
      description: 'Тонировка стекол с подбором степени светопропускания и аккуратной установкой.',
      image: tintingImg,
      fullDescription: [
        'Тонировка улучшает внешний вид автомобиля, снижает нагрев салона и повышает комфорт в солнечную погоду.',
        'Подберем пленку и степень затемнения под ваши задачи и аккуратно выполним установку без пузырей и заломов.',
      ],
      includes: [
        'Подбор пленки и консультация',
        'Аккуратная подрезка и формовка',
        'Чистая установка',
      ]
    },
    {
      id: 9,
      title: 'Бронепленка',
      description: 'Оклейка кузова и оптики защитной пленкой для сохранения внешнего вида.',
      image: ppfImg,
      fullDescription: [
        'Бронепленка (PPF) защищает кузов и оптику от сколов, мелких царапин и воздействия реагентов.',
        'Работаем с оклейкой зон риска (капот, бампер, крылья, пороги) или комплексной оклейкой — подберем оптимальный вариант под бюджет и задачи.',
      ],
      includes: [
        'Оклейка зон риска или полностью',
        'Возможна защита фар и глянцевых стоек',
        'Рекомендации по уходу после оклейки',
      ]
    },
    {
      id: 10,
      title: 'Полировка',
      description: 'Полировка кузова и фар: удаление мелких царапин, восстановление блеска.',
      image: polishingImg,
      fullDescription: [
        'Полировка возвращает глубину цвета и блеск, убирает мелкие царапины и следы от мойки.',
        'Выполняем подготовку поверхности, поэтапную полировку и финишную защиту (по согласованию).',
      ],
      includes: [
        'Оценка состояния ЛКП',
        'Мойка и подготовка поверхности',
        'Поэтапная полировка',
        'Опции защиты (по согласованию)',
      ]
    }
  ];

  return (
    <section id="services" className="services-section">
      <Container>
        <div className="section-title text-center" data-aos="fade-up">
          <h2>Наши услуги</h2>
          <p>Перетяжка салона и детейлинг: тонировка, бронепленка, полировка</p>
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
                  <Button
                    variant="outline-primary"
                    className="service-btn"
                    onClick={() => handleShowModal(service)}
                  >
                    Подробнее
                  </Button>
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
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Получить консультацию
        </Button>
      </div>

      </Container>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        {selectedService && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedService.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedService.fullDescription?.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}

              {selectedService.includes?.length ? (
                <>
                  <h5 className="mt-4">Что входит</h5>
                  <ul>
                    {selectedService.includes.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Закрыть
              </Button>
              <Button
                variant="primary"
                as="a"
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Получить консультацию в Telegram
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Services;
