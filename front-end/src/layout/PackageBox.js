import Packages from "../components/Package";
import image from "../assets/PackageImages/Rectangle_23.png";
import MainTopic from "../components/MainTopic";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

import { Keyboard, Navigation, Pagination, Virtual } from "swiper";

function PackageBox() {
  const packages = [
    {
      id: 1,
      image: image,
      package_name: "Packge Name 1",
      content: "vgrhttrhyt",
    },
    {
      id: 2,
      image: image,
      package_name: "Packge Name 2",
      content: "vgrhttrhyt",
    },
    {
      id: 3,
      image: image,
      package_name: "Packge Name 3",
      content: "vgrhttrhyt",
    },
    {
      id: 4,
      image: image,
      package_name: "Packge Name 4",
      content: "vgrhttrhyt",
    },
    {
      id: 5,
      image: image,
      package_name: "Packge Name 5",
      content: "vgrhttrhyt",
    },
  ];

  return (
    <section className="bg-primary px-5">
      <div className="py-4  mx-auto px-10 xl:w-[1200px] flex justify-center flex-col text-center">
        <MainTopic text="Packages" className="text-3xl font-bold text-white" subTopic="this is the sub topic" subTopicClassName="text-white" />
        <div className=" flex items-center ">
          <Swiper
            autoplay={true}
            pagination={{
              className: "page",
              clickable: true,
            }}
            navigation={{
              enabled: true,
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              "@0.50": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              "@1.25": {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              "@1.75": {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper mx-12 "
          >
            {packages.map((item) => (
              <SwiperSlide
                key={item.id}
                className="flex justify-center items-center"
              >
                <Packages
                  image={item.image}
                  package_name={item.package_name}
                  content={item.content}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default PackageBox;
