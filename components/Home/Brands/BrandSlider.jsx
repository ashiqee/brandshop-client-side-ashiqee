import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import "./brandSlider.css";

const BrandSlider = ({ brand }) => {
  const { brandName, sliderImgOne, sliderImgTwo, sliderImgThree } = brand;
  return (
    <div>
      <div className=" mb-16 p-5">
        <div className="max-w-fit rounded-lg mx-auto">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <img
                className=" object-cover lg:min-w-[1350px]  
                   max-h-[200px] md:min-h-[400px]  md:max-h-[400px]"
                src={sliderImgOne}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className=" object-cover lg:min-w-[1350px]  max-h-[200px] md:min-h-[400px]  md:max-h-[400px]"
                  src={sliderImgTwo}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-20 flex bg-opacity-50">
                {" "}
                <img
                  className="object-cover lg:min-w-[1350px]   max-h-[200px] md:min-h-[400px]  md:max-h-[400px]"
                  src={sliderImgThree}
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
