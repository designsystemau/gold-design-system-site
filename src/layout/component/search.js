import AUheading from '../../_auds/layout/headings';
import React from 'react';
import PropTypes from 'prop-types';

import AUcard from '../card';

import GetData from './../../helper/getData';

const MakeSearchIndex = (_parseYaml) => {
	const data = GetData({ yaml: _parseYaml, object: true });
	return Object.values(data)
		.filter((m) => m.name)
		.map((module) => ({
			ID: module.ID,
			name: module.name,
			// version: module.version,
			// contributors: module.contributors,
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
				style={{ display: 'none' }}
				data-search-index
				dangerouslySetInnerHTML={{ __html: JSON.stringify(searchData) }}
			/>
			<div data-search-results></div>

			<template data-result-list>
				<section className="searchpage__section released">
					<h2 className="searchpage__section__headline au-display-md">
						<span data-title>###TITLE###</span>
						<span className="searchpage__section__headline__found" data-count />
					</h2>
					<ul className="searchpage__section__listing au-card-list au-card-list--matchheight row" />
				</section>
			</template>

			<template data-result-list-item>
				<li className="col-xs-6 col-sm-3">
					<AUcard
						rows={[
							{
								type: 'svg',
								title: '###NAME###',
								svg: '###SVG###',
								description: '###DESCRIPTION###',
								fullwidth: true,
							},
							{ type: 'heading', headingSize: '3', text: '###NAME###' },
						]}
						link="###URL###"
						appearance="shadow"
					/>
				</li>
			</template>

			<template data-result-table>
				<section className="searchpage__section released">
					<h2 className="searchpage__section__headline au-display-md">
						<span data-title>###TITLE###</span>
						<span className="searchpage__section__headline__found" data-count />
					</h2>
					<div className="au-responsive-table component-table">
						<table>
							<caption
								className="au-responsive-table__caption"
								data-description
							>
								###DESCRIPTION###
							</caption>
							<thead>
								<tr className="au-responsive-table__header">
									<th scope="col">Title</th>
								</tr>
							</thead>
							<tbody></tbody>
						</table>
					</div>
				</section>
			</template>

			<template data-result-table-row>
				<tr className="au-responsive-table__body">
					<td scope="col">
						<a href="###URL###">###NAME###</a>
					</td>
				</tr>
			</template>

			<template data-no-results>
				<section className="searchpage__section released">
					<h2 className="searchpage__section__headline au-display-md">
						Sorry, we couldn't find anything matching{' '}
						<span data-search-term>###SEARCH_TERM###</span>.
					</h2>
				</section>
			</template>

			<template data-error>
				<section className="searchpage__section released">
					<h2 className="searchpage__section__headline au-display-md">
						Sorry, there was a problem running your search.
					</h2>
				</section>
			</template>

			<script src="/assets/js/fuse.min.js" type="text/javascript"></script>
			<script src="/assets/js/search.js" type="text/javascript"></script>
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
