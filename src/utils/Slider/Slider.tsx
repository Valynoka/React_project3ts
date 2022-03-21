import React from 'react';
import './Slider.scss';
import DataStore from "../../store/DataStore/DataStore";
import {Swiper, SwiperSlide} from 'swiper/react';
import  { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';


const Slider = () => {
	const { banner } = DataStore;

	return(
		<Swiper className={'swiper'}
				id={'swiper-color'}
				modules={[Navigation]}
			// navigation
				slidesPerView={1}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				tag='ul'
		>
			{banner.map ((item) => {
					return (
						<SwiperSlide className={'swiper__slide'}
									 key={item.id}
									 tag='li'
						>
							{item.title}
						</SwiperSlide>

					)
				}
			)}
			<div className="swiper-button-prev"></div>
			<div className="swiper-button-next"></div>
		</Swiper>
	)
}

export default Slider;
