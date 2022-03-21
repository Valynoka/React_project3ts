import React from 'react';
import DataStore from "../../store/DataStore";
import Accordion from "../../utils/Accordion";
import './Fqa.scss'

const Faq = () => {
	const { question } = DataStore;
	return(
		<div className={'faq'}>
			<h3 className={'faq__title'}>
				Frequently asked questions
			</h3>
			<p className={'faq__subtitle'}>
				Everything you need to know about the games.
			</p>
			<ul>
				{question.map((item) => (
					<Accordion id={0} question={item.question} answer={item.answer}/>
				))}
			</ul>
		</div>
	)
};

export default Faq;
