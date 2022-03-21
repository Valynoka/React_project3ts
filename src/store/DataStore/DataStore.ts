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
	question: QuestionSectionDataTypes[] = QuestionSectionData;
	card: CardsDataTypes = this.resetCards();


	resetCards() {
		return{
			id: Math.max(0, Math.max(...this.cards.map(({id}) => id))) + 1,
			type: 'cardsData',
			picture: FarCry,
			teg: "ActionRPG",
			title: "Game",
			rating: "rating",
			description: "description",
			price: "1200",
			sale: "50%"
		}
	}


	constructor (){
		makeAutoObservable(this,{
			setNewCard: action.bound,

		});
	}

	setNewCard(){
		this.cards.unshift(this.card);
		this.card = this.resetCards()
	}
}

export default new DataStore();
