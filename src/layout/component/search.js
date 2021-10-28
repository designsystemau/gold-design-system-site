import AUheading from "../../_auds/layout/headings";
import React from "react";
import PropTypes from "prop-types";

import GetData from "./../../helper/getData";

const MakeSearchIndex = (_parseYaml) => {
	const data = GetData({ yaml: _parseYaml, object: true });
	return Object.values(data).filter(m => m.name).map((module) => ({
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
					/>
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

			<template data-result-section>
				<section className="searchpage__section released">
					<h2 className="searchpage__section__headline au-display-md">
						Released
						<span
							className="searchpage__section__headline__found"
							data-sr-count
						/>
					</h2>
					<ul className="searchpage__section__listing au-card-list au-card-list--matchheight row" />
				</section>
			</template>

			<template data-search-result-tpl>
				<li className="col-xs-6 col-sm-3">
					<div className="au-card au-body au-card--shadow au-card--clickable">
						<div className="au-responsive-media-img au-card__fullwidth">
							<svg role="img" title="###TITLE###">
								<title>###TITLE###</title>
								<use xlinkHref="###URL###" />
							</svg>
						</div>

						<div className="au-card__inner">
							<h3 className="au-card__title">
								<a className="au-card--clickable__link" href="#">
									Title of article
								</a>
							</h3>
						</div>
					</div>
				</li>
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

// {[
// 	{ type: 'svg', title: '##name##', svg: '##svg##', description: '##description##', fullwidth: true },
// 	{ type: 'heading', headingSize: '3', text: '##name##', }
// ]}
// link="##url##"
// appearance="shadow"
