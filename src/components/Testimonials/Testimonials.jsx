import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.scss';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Александр Иванов',
      position: 'Владелец BMW X5',
      image: '/images/testimonials/client1.jpg',
      rating: 5,
      text: 'Обратился в компанию для перетяжки салона своего BMW X5. Результат превзошел все ожидания! Качество материалов и исполнения на высшем уровне. Особенно понравилась работа с кожей и декоративной строчкой. Теперь мой автомобиль выглядит как новый премиальный экземпляр.'
    },
    {
      id: 2,
      name: 'Елена Петрова',
      position: 'Владелица Mercedes-Benz GLE',
      image: '/images/testimonials/client2.jpg',
      rating: 5,
      text: 'Заказывала перетяжку руля и сидений в алькантару с кожаными вставками. Работа выполнена идеально, все строчки ровные, материалы приятные на ощупь. Мастера учли все мои пожелания по дизайну. Буду рекомендовать эту компанию всем знакомым!'
    },
    {
      id: 3,
      name: 'Дмитрий Сидоров',
      position: 'Владелец Audi Q7',
      image: '/images/testimonials/client3.jpg',
      rating: 4,
      text: 'Заказывал комплексную перетяжку салона и изготовление саквояжа в багажник. Работа выполнена качественно и в срок. Единственное, что хотелось бы отметить - немного затянули с подбором материалов. В остальном все отлично, салон выглядит шикарно!'
    },
    {
      id: 4,
      name: 'Ольга Смирнова',
      position: 'Владелица Lexus RX',
      image: '/images/testimonials/client4.jpg',
      rating: 5,
      text: 'Обратилась для перетяжки потолка в алькантару с установкой LED-подсветки. Результат просто фантастический! Мастера выполнили работу быстро и аккуратно. Теперь салон моего автомобиля выглядит как космический корабль. Большое спасибо за профессионализм!'
    },
    {
      id: 5,
      name: 'Сергей Козлов',
      position: 'Владелец Range Rover',
      image: '/images/testimonials/client5.jpg',
      rating: 5,
      text: 'Заказывал полную перетяжку салона в натуральную кожу наппа. Работа выполнена на высочайшем уровне. Мастера проявили внимание к каждой детали. Отдельное спасибо за индивидуальный подход и рекомендации по выбору материалов. Результат превзошел все ожидания!'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <Container>
        <div className="section-title text-center" data-aos="fade-up">
          <h2>Отзывы клиентов</h2>
          <p>Что говорят о нас наши клиенты</p>
        </div>
        
        <div className="testimonials-slider" data-aos="fade-up">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-item">
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>
                  <p>{testimonial.text}</p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < testimonial.rating ? 'filled' : ''} 
                      />
                    ))}
                  </div>
                  <div className="testimonial-author">
                    <div className="author-img">
                      <img 
                        src={testimonial.image || `https://via.placeholder.com/80x80?text=${testimonial.name.charAt(0)}`} 
                        alt={testimonial.name} 
                      />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;