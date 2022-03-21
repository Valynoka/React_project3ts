import React from "react";
import DataStore from "../../store/DataStore";
import './Header.scss'
import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import HeaderSvgSelector from "../../ui/SvgHeader/HeaderSvgSelector";
import {Link} from "react-router-dom";
import Slider from "../../utils/Slider";



const Header = () => {
	const { menu } = DataStore;

	return (
		<div className={'header'}>
			<div className={'header__offer_banner'}>
				<Slider/>
			</div>
			<div className={'header__wrapper'}>
				<div className={'header__title_layer'}>
					<div className={'header__place_mark'}>
						<HeaderSvgSelector id={'svg'}/>
						<p className={'header__place_mark_text'}>Dublin, Republic of Ireland</p>
					</div>
					<div title={'header__title'}>gamevendor</div>
					<ul className={'header__menu'}>
						<li className={'header__search'}>
							<SearchOutlined/>
						</li>
						<li className={'header__enter'}>
							<UserOutlined/>
						</li>
						<li className={'header__shopping_cart'}>
							<ShoppingCartOutlined/>
						</li>
					</ul>
				</div>
				<nav className={'header__navigation'}>
					<ul className={'navigation__list'}>
						{menu.map ((item) => (
							<li className={'navigation__item'}>
								<Link className={'navigation__link'} to={'/'}>{item.title}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>)
};

export default Header;
