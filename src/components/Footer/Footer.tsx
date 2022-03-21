import React from 'react';
import {Link} from "react-router-dom";
import './Footer.scss'



const Footer = () => {

	return(
		<div className={'footer'}>
			<div className={'footer__wrapper'}>
				<div className={'footer__top'}>
					<div className={'footer__input_description'}>
						<h4 className={'footer__input_title'}>Join our newsletter</h4>
						<p className={'footer__input_subtitle'}>We’ll send you a nice letter one per week. No spam.</p>
					</div>
					<div className={'footer__input_section'}>
						<input className={'footer__input'}
							   type={'text'}
							   placeholder={'Enter email'}
						/>
						<button className={'footer__button'} type={'button'}>Subscribe</button>
					</div>
				</div>
				<div className={'footer__categories'}>
					<ul className={'footer__categories_list'}>
						<li className={'footer__categories_items'}>
							<h5 className={'footer__categories_title'}>Categories</h5>
							<Link className={'footer__categories_links'} to={'/'}>Strategy</Link>
							<Link className={'footer__categories_links'} to={'/'}>Action</Link>
							<Link className={'footer__categories_links'} to={'/'}>Shooter</Link>
							<Link className={'footer__categories_links'} to={'/'}>Card Game</Link>
							<Link className={'footer__categories_links'} to={'/'}>Simulator</Link>
							<Link className={'footer__categories_links'} to={'/'}>RPG</Link>
							<Link className={'footer__categories_links'} to={'/'}>Multiplayer</Link>
						</li>
						<li className={'footer__categories_items'}>
							<h5 className={'footer__categories_title'}>Company</h5>
							<Link className={'footer__categories_links'} to={'/'}>About us</Link>
							<Link className={'footer__categories_links'} to={'/'}>Careers</Link>
							<Link className={'footer__categories_links'} to={'/'}>Press</Link>
							<Link className={'footer__categories_links'} to={'/'}>News</Link>
							<Link className={'footer__categories_links'} to={'/'}>Contact</Link>
						</li>
						<li className={'footer__categories_items'}>
							<h5 className={'footer__categories_title'}>Legal</h5>
							<Link className={'footer__categories_links'} to={'/'}>Terms</Link>
							<Link className={'footer__categories_links'} to={'/'}>Privacy</Link>
							<Link className={'footer__categories_links'} to={'/'}>Cookies</Link>
							<Link className={'footer__categories_links'} to={'/'}>Licenses</Link>
							<Link className={'footer__categories_links'} to={'/'}>Settings</Link>
						</li>
						<li className={'footer__categories_items'}>
							<h5 className={'footer__categories_title'}>Legal</h5>
							<a href={'/'} className={'footer__categories_links'}>Twitter</a>
							<a href={'/'} className={'footer__categories_links'}>Facebook</a>
							<a href={'/'} className={'footer__categories_links'}>Dribbble</a>
							<a href={'/'} className={'footer__categories_links'}>GitHub</a>
						</li>
					</ul>
				</div>
				<p>Copyright © GameVendor, 2022</p>
			</div>
		</div>
	)
};

export default Footer;
