import PropTypes from "prop-types";
import React from "react";

/**
 * The page component
 */
const Page = ({
	_ID,
	_relativeURL,
	title,
	header,
	main,
	footer
}) => (
 <html>
	<head>
		<title>{ title }</title>
		<link rel="shortcut icon" type="image/x-icon" href={ _relativeURL( '/src/assets/img/favicon.ico', _ID ) } />
		<link rel="stylesheet" href={ _relativeURL( '/src/assets/css/style.css', _ID ) } />
		<script src={ _relativeURL( '/src/assets/js/header.js', _ID ) } />
	</head>
	<body>

		<div className="uikit-body uikit-grid">
			{ header }
			<main>
				<div className="container">
					<div className="row">
						<div className="grids col-md-12">
							{ main }
						</div>
					</div>
				</div>
			</main>
			{ footer }
		</div>

		<script src={ _relativeURL( '/src/assets/js/footer.js', _ID ) } />
	</body>
 </html>
);

Page.propTypes = {
	/**
	 * title: Homepage
	 */
	title: PropTypes.string.isRequired,

	/**
	 * header: (partials)(2)
	 */
	header: PropTypes.node.isRequired,

	/**
	 * main: (partials)(4)
	 */
	main: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};


Page.defaultProps = {};


export default Page;