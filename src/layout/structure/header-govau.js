import AUlinkList          from '../../_auds/layout/link-list';

import PropTypes           from 'prop-types';
import React, { Fragment } from 'react';

/**
 * The headergovau component
 */
const HeaderGovAU = ({ publisher, publisher_url, right_title, right_content }) => (
	<div className="headergovau">
		<div className="container-fluid">
			<div className="row headergovau__bar">
				<div className="col-md-12">
					<button
						className="headergovau__button js-header-accordion au-accordion--closed"
						aria-controls="headergovau-accordion"
						aria-expanded="false"
						onClick="return AU.accordion.Toggle( this )"
					>
						<span className="headergovau__text">
							<span className="headergovau__title">Australian Government&nbsp;</span>
							<span className="headergovau__official">official website</span>
						</span>
					</button>
					<a href={ publisher_url } className="headergovau__publisher">
						{ publisher }
					</a>
				</div>
			</div>

			<div
				id="headergovau-accordion"
				className="headergovau__content row au-accordion--closed au-accordion__body"
				aria-hidden="false"
				>
				<div className="au-accordion__body-wrapper">
					<div className="col-sm-6">
						<div className="headergovau__icon-content icon--secure">
							<p className="headergovau__content__title">{ right_title }</p>
							<p>{ right_content }</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

HeaderGovAU.propTypes = {
	/**
	 * publisher: designsystemau.org
	 */
	publisher: PropTypes.string.isRequired,

	/**
	 * publisher_url: https://designsystemau.org
	 */
	publisher_url: PropTypes.string.isRequired,

	/**
	 * right_title: This site is also protected by SSL
	 */
	right_title: PropTypes.string.isRequired,

	/**
	 * right_content: Lorem ipsum dolor sit amet, vix civibus deserunt te, sit eu nulla discere consulatu, ei graeci consectetuer has.
	 */
	right_content: PropTypes.string.isRequired,
};

HeaderGovAU.defaultProps = {};

export default HeaderGovAU;
