import AUheading from '../../_auds/layout/headings';
import React from 'react';
import PropTypes from 'prop-types';

import GetData from './../../helper/getData';

/**
 * The search component
 *
 * @disable-docs
 */
const Search = ({ headline, link, _parseYaml }) => {

	const searchData = GetData({ yaml: _parseYaml, object: true })

	return (
		<div className="searchpage">
			<div className="searchpage__headline">
				<AUheading className="searchpage__headline__heading" size="lg" level="1">
					{ headline }&nbsp;
					<span className="searchpage__headline__heading__searchstring" data-searchTerm>...</span>
				</AUheading>
				<a className="searchpage__headline__link" href={ link.link }>{ link.text }</a>
			</div>
			<script src="/assets/js/fuse.min.js" type="text/javascript"></script>
			<script src="/assets/js/fe-search.js" type="text/javascript"></script>
			<div data-searchIndex dangerouslySetInnerHTML={{ __html: JSON.stringify(searchData) }} />
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
