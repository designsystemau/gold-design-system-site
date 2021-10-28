import AUheading from "../../_auds/layout/headings";
import React from "react";
import PropTypes from "prop-types";

import GetData from "./../../helper/getData";

const MakeSearchIndex = (_parseYaml) => {
	const data = GetData({ yaml: _parseYaml, object: true });
	return Object.values(data).map((module) => ({
		ID: module.ID,
		name: module.name,
		version: module.version,
		contributors: module.contributors,
		tags: module.tags,
		metatags: module.metatags,
		description: module.description,
		state: module.state,
		url: `../${module.ID}/`,
	}));
};

/**
 * The search component
 *
 * @disable-docs
 */
const Search = ({ headline, link, _parseYaml }) => {
	const searchData = MakeSearchIndex(_parseYaml);

	return (
		<div className="searchpage">
			<div className="searchpage__headline">
				<AUheading
					className="searchpage__headline__heading"
					size="lg"
					level="1"
				>
					{headline}&nbsp;
					<span
						className="searchpage__headline__heading__searchstring"
						data-search-term
					>
						...
					</span>
				</AUheading>
				<a className="searchpage__headline__link" href={link.link}>
					{link.text}
				</a>
			</div>
			<div
				style={{ display: "none" }}
				data-search-index
				dangerouslySetInnerHTML={{ __html: JSON.stringify(searchData) }}
			/>
			<div data-search-results></div>
			<template data-search-result-tpl>
				<div>
					<span data-sr-name style={{ fontWeight: 'bold'}} />
					<span data-sr-version />
				</div>
			</template>

			<script src="/assets/js/fuse.min.js" type="text/javascript"></script>
			<script src="/assets/js/fe-search.js" type="text/javascript"></script>
		</div>
	);
};

Search.propTypes = {
	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};

Search.defaultProps = {};

export default Search;
