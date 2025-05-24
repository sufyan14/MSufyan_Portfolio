import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import c1 from "../assets/certificate_1.png";
import c2 from "../assets/certificate_2.png";
import c3 from "../assets/certificate_3.png";
import c4 from "../assets/certificate_4.png";
import c5 from "../assets/certificate_5.png";
import c6 from "../assets/certificate_6.png";

const certifications = [c1, c2, c3, c4, c5, c6];

const Certification = () => {
  return (
    <section
      id="certifications"
      className="bg-[#0c0c2b] py-20 px-4 font-poppins"
    >
      <div className="max-w-6xl mx-auto text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={4000}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-xl"
        >
          {certifications.map((img, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <div className="w-full max-w-xs h-[250px] bg-gray-800 rounded-lg shadow-lg flex items-center justify-center p-4">
                <img
                  src={img}
                  alt={`Certificate ${i + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certification;
