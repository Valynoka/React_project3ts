import React from "react";
import DataStore from "../../store/DataStore";
import {observer} from "mobx-react-lite";
import './Search.scss';

type SearchProps = {
	search: string,
	placeholder?: string,
};

const Search: React.FC<SearchProps> = (props) => {
	const { placeholder = 'Search' } = props;
	const { searchValue,  setFilterBySearch} = DataStore;

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setFilterBySearch(e.target.value)
	}
	return(
		<div className={'search'}>
			<label className={'search__label'}>Search for games
				<input
					className={'search__input'}
					type={'text'}
					placeholder={placeholder}
					value={searchValue}
					onChange={handleChange}
				/>
			</label>
		</div>

	)
}

export default observer(Search);
