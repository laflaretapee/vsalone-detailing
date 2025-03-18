import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaPhoneAlt, 
  FaClipboardCheck, 
  FaPalette, 
  FaCut, 
  FaTools, 
  FaCheckCircle 
} from 'react-icons/fa';
import './Process.scss';

const Process = () => {
  const steps = [
    {
      icon: <FaPhoneAlt />,
      title: 'Консультация',
      description: 'Вы связываетесь с нами по телефону или через форму на сайте. Мы обсуждаем ваши пожелания и отвечаем на вопросы.',
      delay: 0
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Осмотр и оценка',
      description: 'Мы осматриваем ваш автомобиль, определяем объем работ и составляем детальную смету.',
      delay: 100
    },
    {
      icon: <FaPalette />,
      title: 'Выбор материалов',
      description: 'Вы выбираете материалы, цвет, тип строчки и другие детали будущего интерьера.',
      delay: 200
    },
    {
      icon: <FaCut />,
      title: 'Подготовка и раскрой',
      description: 'Мы демонтируем необходимые элементы салона, создаем выкройки и раскраиваем материалы.',
      delay: 300
    },
    {
      icon: <FaTools />,
      title: 'Выполнение работ',
      description: 'Наши мастера выполняют все работы согласно техническому заданию с особым вниманием к деталям.',
      delay: 400
    },
    {
      icon: <FaCheckCircle />,
      title: 'Контроль и сдача',
      description: 'Мы проводим финальную проверку качества и передаем вам автомобиль с обновленным интерьером.',
      delay: 500
    }
  ];

  return (
    <section id="process" className="process-section">
      <Container>
        <div className="section-title text-center" data-aos="fade-up">
          <h2>Как мы работаем</h2>
          <p>Процесс создания идеального интерьера для вашего автомобиля</p>
        </div>
        
        <div className="timeline">
          {steps.map((step, index) => (
            <div 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={step.delay}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="timeline-number">{index + 1}</div>
              </div>
            </div>
          ))}
        </div>
        
        <Row className="mt-5 pt-4">
          <Col md={6} data-aos="fade-right">
            <div className="process-info">
              <h3>Сроки выполнения работ</h3>
              <p>
                Стандартные сроки выполнения работ составляют:
              </p>
              <ul>
                <li>Перетяжка отдельных элементов: 1-3 дня</li>
                <li>Перетяжка сидений: 3-5 дней</li>
                <li>Полная перетяжка салона: 7-14 дней</li>
                <li>Изготовление аксессуаров: 2-5 дней</li>
              </ul>
              <p>
                Точные сроки зависят от сложности работ и загруженности мастерской.
                Мы всегда стараемся выполнить работу в кратчайшие сроки, не жертвуя качеством.
              </p>
            </div>
          </Col>
          <Col md={6} data-aos="fade-left">
            <div className="process-info">
              <h3>Гарантия качества</h3>
              <p>
                Мы предоставляем гарантию на все виды выполненных работ:
              </p>
              <ul>
                <li>Гарантия на материалы: до 3 лет</li>
                <li>Гарантия на работу: 1 год</li>
                <li>Гарантия на швы и строчки: 2 года</li>
              </ul>
              <p>
                В случае обнаружения дефектов в период гарантийного срока, 
                мы бесплатно устраним все недостатки. Наша цель — ваше полное 
                удовлетворение результатом работы.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Process;