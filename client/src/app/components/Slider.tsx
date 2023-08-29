"use client"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// カルーセルにする画像のソースをリストにします
const images = ["/dummy/1.jpg", "/dummy/2.jpg", "/dummy/3.jpg"];

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1} //一度に表示するスライドの数
            pagination={{
                clickable: true,
            }} //何枚目のスライドかを示すアイコン、スライドの下の方にある
            navigation //スライドを前後させるためのボタン、スライドの左右にある
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            {images.map((src: string, index: number) => {
                return (
                    <SwiperSlide key={`${index}`}>
                        <Image src={src} layout="responsive" width={640} height={400} alt="test_image" />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Slider;
