import React from 'react';
import DataStore  from '../../store/DataStore/DataStore';
import './Cards.scss';
import { observer } from "mobx-react-lite";


const Cards = () => {
	const { cards, setNewCard } = DataStore;
	return(
		<ul className={'cards'}>
			<div className={'cards__button_wrapper'}>
				<button className={'cards__button'} type={'button'}onClick={() => setNewCard()}>Добавить</button>
			</div>
			{cards.map((item)=>(
				<li className={'cards__wrapper'}>
					<img src={item.picture} className={'cards__pic'}/>
					<div className={'cards__teg'}>{item.teg}</div>
					<h3 className={'cards__title'}>{item.title}</h3>
					<div className={'cards__rating'}>{item.rating}</div>
					<div className={'cards__description'}>{item.description}</div>
					<div className={'card__price'}>{item.price}</div>
					<div className={'card__sale'}>{item.sale}</div>
				</li>
			))}
		</ul>
	)
}

export default observer(Cards);
