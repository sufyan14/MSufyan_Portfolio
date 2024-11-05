import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import c1 from "../assets/certificate_1.png";
import c2 from "../assets/certificate_2.png";
import c3 from "../assets/certificate_3.png";
import c4 from "../assets/certificate_4.png";
import c5 from "../assets/certificate_5.png";
import c6 from "../assets/certificate_6.png";
import divider from "../assets/divider-bg.jpg";

const certifications = [
  { imageUrl: c1 },
  { imageUrl: c2 },
  { imageUrl: c3 },
  { imageUrl: c4 },
  { imageUrl: c5 },
  { imageUrl: c6 },
];

const Certification = () => {
  return (
    <section
      id="certifications"
      className="font-poppins mt-24 md:mt-80 bg-slate-950"
    >
      <div
        className="h-12 w-full bg-repeat bg-center opacity-85"
        style={{
          backgroundImage: `url(${divider})`,
          backgroundSize: "contain",
        }}
      />
      <div className="text-white max-w-6xl mx-auto p-4 space-y-20 mt-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          Certifications
        </h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={4000}
          className="rounded-lg overflow-hidden"
          style={{ height: "400px" }}
          breakpoints={{
            350: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {certifications.map((cert, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="w-80 h-60 flex flex-col items-center bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:cursor-pointer hover:scale-105">
                <img
                  src={cert.imageUrl}
                  alt={`Certificate ${index + 1}`} // Accessibility
                  className="w-full h-full object-contain rounded-t-lg"
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
