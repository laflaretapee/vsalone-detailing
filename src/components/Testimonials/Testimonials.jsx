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
      position: 'Владелец KIA RIO',
      image: require('../../assets/images/mysh.png'),
      rating: 5,
      text: 'Обратился в компанию для перетяжки салона своего BMW X5. Результат превзошел все ожидания! Качество материалов и исполнения на высшем уровне. Особенно понравилась работа с кожей и декоративной строчкой. Теперь мой автомобиль выглядит как новый премиальный экземпляр.'
    },
    {
      id: 2,
      name: 'Рита Копина',
      position: 'Владелица Audi',
      image: require('../../assets/images/zhen.png'),
      rating: 5,
      text: 'Спасибо большое за работу ! Очень понравилось ! Советую'
    },
    {
      id: 3,
      name: 'Тимур Кагарманов',
      position: 'Владелец ВАЗ 2112',
      image: require('../../assets/images/mysh.png'),
      rating: 4,
      text: 'Заказывал комплексную перетяжку салона и изготовление саквояжа в багажник. Работа выполнена качественно и в срок. Единственное, что хотелось бы отметить - немного затянули с подбором материалов. В остальном все отлично, салон выглядит шикарно!'
    },
    {
      id: 4,
      name: 'Айбулат Галиаскаров',
      position: 'Владелица Chevrolet Niva',
      image: require('../../assets/images/mysh.png'),
      rating: 5,
      text: 'Заказывал перетяжку руля и ручки КПП. Всё сделали быстро и аккуратно, кожа мягкая, приятная на ощупь. Теперь салон выглядит как новый! Отдельное спасибо за консультацию и советы по уходу.'
    },
    {
      id: 5,
      name: 'Сергей Козлов',
      position: 'Владелец Range Rover',
      image: require('../../assets/images/mysh.png'),
      rating: 5,
      text: 'Заказывал полную перетяжку салона. Работа выполнена на высочайшем уровне. Мастера проявили внимание к каждой детали. Отдельное спасибо за индивидуальный подход и рекомендации по выбору материалов. Результат превзошел все ожидания!'
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