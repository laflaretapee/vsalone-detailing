import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    // Здесь будет логика отправки формы на сервер
    // Для демонстрации просто показываем сообщение об успехе
    setAlertVariant('success');
    setAlertMessage('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setShowAlert(true);
    
    // Сбрасываем форму
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setValidated(false);
    
    // Скрываем сообщение через 5 секунд
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  
  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="section-title text-center" data-aos="fade-up">
          <h2>Контакты</h2>
          <p>Свяжитесь с нами для консультации или записи</p>
        </div>
        
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12} data-aos="fade-up">
            <div className="contact-form">
              <h3 className="text-center mb-4">Отправить сообщение</h3>
              
              {showAlert && (
                <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                  {alertMessage}
                </Alert>
              )}
              
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Ваше имя</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Пожалуйста, укажите ваше имя
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Пожалуйста, укажите корректный email
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Телефон</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Пожалуйста, укажите ваш телефон
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Сообщение</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Пожалуйста, напишите ваше сообщение
                  </Form.Control.Feedback>
                </Form.Group>
                
                <div className="text-center mt-4">
                  <Button variant="primary" type="submit" size="lg">
                    Отправить сообщение
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;