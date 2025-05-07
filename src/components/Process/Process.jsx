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
      </Container>
    </section>
  );
};

export default Process;