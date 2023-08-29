"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider from "./slider.module.scss";

// カルーセルにする画像のソースをリストにします
const images = ["/dummy/1.jpg", "/dummy/2.jpg", "/dummy/3.jpg"];

const Slider = () => {
    return (
        <div className="h-screen">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1} //一度に表示するスライドの数
                pagination={{
                    el: null, //ページネーション要素
                    type: 'bullets', //ページネーション種類
                    clickable: true,
                }} //何枚目のスライドかを示すアイコン、スライドの下の方にある
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
            >
                {images.map((src: string, index: number) => {
                    return (
                        <SwiperSlide key={`${index}`}>
                            <div className="w-full flex justify-center items-center">
                                <div className={slider.container}>
                                    <Image className="overflow-hidden" layout="fixed" src={src} width={500} height={300} alt="image" />
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Slider;
