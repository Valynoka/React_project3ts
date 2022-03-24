import React from 'react';

import { makeAutoObservable, action } from 'mobx';
import {CardsData, HeaderBannerData, QuestionSectionData} from "./DataStoreArrays";
import { HeaderBannerDataTypes, QuestionSectionDataTypes} from './DataStoreTypes'
import {HeaderMenuData} from "./DataStoreArrays";
import {HeaderMenuDataTypes} from "./DataStoreTypes";
import {CardsDataTypes} from  './DataStoreTypes';


const FarCry =  require("./assets/FarCry.png");


class DataStore {
	banner: HeaderBannerDataTypes[] = HeaderBannerData;
	menu: HeaderMenuDataTypes[] = HeaderMenuData;
	cards: CardsDataTypes[] = CardsData;
	filteredCards: CardsDataTypes[] = CardsData;
	question: QuestionSectionDataTypes[] = QuestionSectionData;
	card: CardsDataTypes = this.resetCards();

	searchValue = '';

	resetCards() {
		return{
			id: Math.max(0, Math.max(...this.cards.map(({id}) => id))) + 1,
			type: 'cardsData',
			picture: FarCry,
			teg: "ActionRPG",
			title: "New Game",
			rating: "rating",
			description: "description",
			price: "1200",
			sale: "50%"
		}
	}


	constructor (){
		makeAutoObservable(this,{
			setNewCard: action.bound,
			setFilterBySearch: action.bound,
			// search: observable
		});
	}

	setNewCard(){
		this.filteredCards.unshift(this.card);
		this.card = this.resetCards()
	}


	//Search
	setFilteredGamesBySearch(event: React.ChangeEvent<HTMLInputElement>){
		this.searchValue = event.target.value;
	}
	setFilterBySearch(search: string){
		this.searchValue = search;
		if (search) {
			this.filteredCards = this.cards.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
		} else {
			return this.filteredCards = this.cards
		}
	}
}

export default new DataStore();
