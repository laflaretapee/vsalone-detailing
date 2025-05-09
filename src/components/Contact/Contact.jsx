import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.scss';

const Contact = () => {
  const [state, handleSubmit] = useForm('mzzrvdbz');

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h2 className="mb-3">Контакты</h2>
          <p className="lead">Свяжитесь с нами для консультации или записи</p>
        </div>
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12} data-aos="fade-up">
            <div className="contact-form p-4 p-md-5 rounded shadow-sm bg-white">
              <h3 className="text-center mb-4">Отправить сообщение</h3>
              {state.succeeded ? (
                <div
                  className="text-center p-4 my-5"
                  style={{
                    background: '#d4edda',
                    color: '#155724',
                    borderRadius: '8px',
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    border: '1px solid #c3e6cb'
                  }}
                >
                  Спасибо за ваше сообщение!<br />
                  Мы свяжемся с вами в ближайшее время.
                </div>
              ) : (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Ваше имя</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Введите ваше имя"
                          required
                          className="custom-input"
                        />
                        <ValidationError prefix="Имя" field="name" errors={state.errors} />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Введите ваш email"
                          required
                          className="custom-input"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Телефон</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="Введите ваш телефон"
                      className="custom-input"
                    />
                    <ValidationError prefix="Телефон" field="phone" errors={state.errors} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Сообщение</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Напишите ваше сообщение"
                      required
                      className="custom-input"
                    />
                    <ValidationError prefix="Сообщение" field="message" errors={state.errors} />
                  </Form.Group>
                  <div className="text-center mt-4">
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      className="px-5"
                      disabled={state.submitting}
                    >
                      {state.submitting ? 'Отправка...' : 'Отправить сообщение'}
                    </Button>
                  </div>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
