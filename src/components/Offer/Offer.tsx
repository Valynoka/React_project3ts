import React from "react";
import Search from "../Search";
import './Offer.scss';
import Cards from "../Cards/Cards";
import Accordion from "../../utils/Accordion";
import Faq from "../FAQ";
const welcome_pic =  require("./assets/welcome_pic.png")


const Offer = () => {
	return(
		<div className={'offer'}>
			<div className={'offer__wrapper'}>
				<h1 className={'offer__title'}>Games</h1>
				<div className={'offer__banner'}>
					<div className={'offer__info'}>
						<h2 className={'offer__info_title'}>Refer a friends and get $10 off!</h2>
						<p className={'offer__info_text'}>Connect with friends. Refer a friend and unlock your $10 coupon! Offer ends February 27.</p>
						<button className={'offer__info_button'}>Invite a friend</button>
					</div>
					<img className={'offer__subtitle_pic'} src={welcome_pic} alt={'welcome_pic'}/>
				</div>
				<div className={'offer__cards_section'}>
					<div className={'offer__cards_search'}>
						<Search/>
					</div>
					<Cards/>
				</div>
				<Faq/>
			</div>
		</div>
	)
}

export default Offer;
