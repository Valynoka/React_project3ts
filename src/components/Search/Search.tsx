import React from "react";

const Search = () => {
	return(
		<label className={'search__label'}>Search for games
			<input
				className={'search__input'}
				type={'text'}
				placeholder={'Search'}
			/>
		</label>
	)
}

export default Search;
