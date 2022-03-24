import React from 'react';
import DataStore  from '../../store/DataStore/DataStore';
import './Cards.scss';
import { observer } from "mobx-react-lite";


const Cards = () => {
	const { filteredCards, setNewCard } = DataStore;
	return(
		<ul className={'cards'}>
			<div className={'cards__container'}>
				<div className={'cards__button_wrapper'}>
					<button className={'cards__button'} type={'button'} onClick={() => setNewCard()}>
						<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.8 7.3C10.8 6.85817 10.4418 6.5 10 6.5C9.55817 6.5 9.2 6.85817 9.2 7.3H10.8ZM9.2 13.7C9.2 14.1418 9.55817 14.5 10 14.5C10.4418 14.5 10.8 14.1418 10.8 13.7H9.2ZM6.8 9.7C6.35817 9.7 6 10.0582 6 10.5C6 10.9418 6.35817 11.3 6.8 11.3V9.7ZM13.2 11.3C13.6418 11.3 14 10.9418 14 10.5C14 10.0582 13.6418 9.7 13.2 9.7V11.3ZM17.2 10.5C17.2 14.4765 13.9765 17.7 10 17.7V19.3C14.8601 19.3 18.8 15.3601 18.8 10.5H17.2ZM10 17.7C6.02355 17.7 2.8 14.4765 2.8 10.5H1.2C1.2 15.3601 5.13989 19.3 10 19.3V17.7ZM2.8 10.5C2.8 6.52355 6.02355 3.3 10 3.3V1.7C5.13989 1.7 1.2 5.63989 1.2 10.5H2.8ZM10 3.3C13.9765 3.3 17.2 6.52355 17.2 10.5H18.8C18.8 5.63989 14.8601 1.7 10 1.7V3.3ZM9.2 7.3V13.7H10.8V7.3H9.2ZM6.8 11.3H13.2V9.7H6.8V11.3Z" fill="white"/>
						</svg>
						Добавить
					</button>
				</div>
				{filteredCards.map((item)=>(
					<li className={'cards__wrapper'} key={item.id}>
						<img src={item.picture} className={'cards__pic'} alt={'pic'}/>
						<div className={'cards__text_section'}>
							<li className={'cards__teg'}>{item.teg}</li>
							<h3 className={'cards__title'}>{item.title}</h3>
							<div className={'cards__rating'}>{item.rating}</div>
							<div className={'cards__description'}>{item.description}</div>
							<div className={'card__price'}>{item.price}</div>
							<div className={'card__sale'}>{item.sale}</div>
						</div>
					</li>
				))}
			</div>
		</ul>
	)
}

export default observer(Cards);
