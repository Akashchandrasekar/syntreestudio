// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { FaExclamation } from 'react-icons/fa'; // Import FontAwesome icon
import backgroundImage from "../assets/standard-quality-control-concept-m.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Services = () => {
  return (
    <div
      className="font-raleway services-carousel p-5 md:p-10 relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Contrast overlay for background */}
      <div className="absolute inset-0 bg-gray-950 opacity-40 backdrop-blur-2xl"></div>


 {/* Headline positioned at the top */}
<div className="absolute top-5 md:top-10 left-0 right-0 text-center z-10">
  <h1 className="font-raleway text-4xl  md:text-5xl font-bold text-gray-200  flex items-center justify-center gap-1">
    Our Services<FaExclamation className="text-pink-500" />
  </h1>
</div>

{/* Carousel positioned on top of the contrast background */}
<div className="flex items-center mt-10 md:mt-28 justify-center h-full relative z-20">
  <Swiper
    modules={[Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={10}
    slidesPerView={1} // Default for mobile
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
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    className="py-5 pb-24 w-full"
  >
          {[
            {
              title: "Website Design",
              image: "https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png",
              description:
                "A well-designed website is more than just an online presence—it's a powerful tool to captivate your audience, showcase your brand, and drive results.",
            },
            {
              title: "Web Application Development",
              image: "https://www.weetechsolution.com/wp-content/uploads/2023/02/10-Reasons-Why-Web-Development-Is-Important-in-2023.jpg",
              description:
                "We specialize in crafting dynamic, responsive, and scalable web applications that drive growth and deliver results.",
            },
            {
              title: "Mobile App Development",
              image: "https://www.binaryfolks.com/media/blog/Reasons%20to%20build%20a%20mobile%20app/4428861.png",
              description:
                "Our team of experienced developers and designers work closely with you to ensure your app stands out in today's competitive landscape.",
            },
            {
              title: "Windows Application Development",
              image: "https://th.bing.com/th/id/OIP.4SqVrtq7GjWMzlYhY1XjWQHaEq?w=1380&h=870&rs=1&pid=ImgDetMain",
              description:
                "We specialize in developing robust and high-performing Windows applications that empower businesses and enhance user productivity.",
            },
            {
              title: "Best UI/UX Design",
              image: "https://media.licdn.com/dms/image/v2/D4D12AQFuuyIj4n2urA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1683785103669?e=2147483647&v=beta&t=xLFCREV567HEnlJSIKr3eZjE71dV__AieLMfg8yHLc8",
              description:
                "Craft visually stunning and user-centric interfaces that provide intuitive and seamless experiences.",
            },
          ].map((service, index) => (
            <SwiperSlide
  key={index}
  className="flex items-center justify-center p-4"
>
  <div className=" mb-10 w-full h-80 md:h-96 cursor-pointer px-2 py-4 max-w-xs bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col justify-between">
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-40 object-cover"
    />
    <div className="p-4 flex flex-col justify-between flex-1">
      <h2 className="text-xl text-pink-500 md:text-2xl font-bold mb-2">{service.title}</h2>
      <p className="text-gray-700 font-raleway text-sm md:text-base">{service.description}</p>
    </div>
  </div>
</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
