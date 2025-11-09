import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Product from './Product';
import './slideProduct.css';

function SlideProduct({ data, title }) {
  return (
    <div className="slide_product slide">
      <div className="container">
        <div className="top_slide">
          <h2>{title} </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            voluptates?
          </p>
        </div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          navigation={true}
          slidesPerView={5}
          spaceBetween={10}
          breakpoints={{
            1200: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
            300: { slidesPerView: 2 },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <SwiperSlide>
                {' '}
                <Product item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideProduct;
