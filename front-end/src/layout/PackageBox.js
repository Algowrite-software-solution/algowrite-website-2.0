import Packages from "../components/Package";
import image from "../assets/PackageImages/Rectangle_23.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

import { Pagination } from "swiper";

function PackageBox() {
    const packages = [
        {
            id: 1,
            image: image,
            package_name: "Packge Name 1",
            content: "vgrhttrhyt"
        },
        {
            id: 2,
            image: image,
            package_name: "Packge Name 2",
            content: "vgrhttrhyt"
        },
        {
            id: 3,
            image: image,
            package_name: "Packge Name 3",
            content: "vgrhttrhyt"
        },
        {
            id: 4,
            image: image,
            package_name: "Packge Name 4",
            content: "vgrhttrhyt"
        },
        {
            id: 5,
            image: image,
            package_name: "Packge Name 5",
            content: "vgrhttrhyt"
        },
    ];

    return (
        <div>
            <div className="bg-primary min-h-[510px] md:pt-3 pb-7">
                <h3 className="text-center text-[36px] text-white font-[900] leading-10">Packages</h3>
                <p className="text-center text-white font-[700]">Tag line of services</p>


                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    pagination={{
                        className: 'page',
                        clickable: true,
                    }}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div className="flex flex-wrap content-center justify-around">
                       <div>
                       {packages.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Packages
                                    image={item.image}
                                    package_name={item.package_name}
                                    content={item.content}
                                />
                            </SwiperSlide>
                        ))}
                       </div>
                    </div>
                </Swiper>
            </div>
        </div>
    
  );
}

export default PackageBox;

