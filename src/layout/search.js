import AUsearchBox from "../_auds/layout/searchbox";
import React from "react";

import GetData from "./../helper/getData";

/**
 * The Searchbox component
 */
const Searchbox = ({ _relativeURL, _ID, _pages, _parseYaml }) => {
	const data = GetData({ yaml: _parseYaml, object: true });
	const suggestions = Object.values(data).map((m) => m.name).filter(n => n).sort();

	return (
		<>
			<AUsearchBox
				id="s1"
				label="Search for a component"
				btnText="Search"
				responsive
				inputProps={{
					defaultValue: _pages[_ID].searchvalue && _pages[_ID].searchvalue,
					placeholder: "e.g. body",
					name: "s",
					list: "search-suggestions",
				}}
				btnProps={{
					as: "secondary",
					type: "submit",
				}}
				action={`${_relativeURL("/components/search/", _ID)}/`}
				data-search-control
				method="get"
			/>
			<datalist id="search-suggestions">
				{suggestions.map((value) => (
					<option value={value} />
				))}
			</datalist>
		</>
	);
};

export default Searchbox;
