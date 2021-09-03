import PropTypes from 'prop-types';
import React from 'react';


/**
 * The page component
 */
const Page = ({
	_ID,
	header,
	pagetitle,
	main,
	footer
}) => {

	const headContent = `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta http-equiv="x-ua-compatible" content="ie=edge">

<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png">
<link rel="manifest" href="/assets/favicons/site.webmanifest">
<link rel="shortcut icon" href="/assets/favicons/favicon.ico">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="theme-color" content="#ffffff">
<meta name="robots" content="index, follow">
<meta name="author" content="Design System AU">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Australian Government Design System">
<meta name="twitter:description" content="Inclusive design, open-source code and shared insights">
<meta name="twitter:name" content="Australian Government Design System">
<meta name="twitter:image" content="https://docs.designsystemau.org/assets/favicons/designsystemau-og-img.png">
<meta property="og:type" content="website">
<meta property="og:title" content="${ pagetitle } - Australian Government Design System">
<meta property="og:site_name" content="Australian Government Design System">
<meta property="og:description" content="Inclusive design, open-source code and shared insights">
<meta property="og:image" content="https://docs.designsystemau.org/assets/favicons">
<meta property="og:url" content="https://docs.designsystemau.org">

<title>${ pagetitle } - Australian Government Design System</title>

<base href="##url##">

<link rel="stylesheet" href="/assets/css/style.css">

<!--[if lte IE 9]>
	<script src="/assets/js/html5shiv.js"></script>
	<script src="/assets/js/respond.js"></script>
<![endif]-->

<script src="/assets/js/header.js"></script>`;

	return (
		<html>
		<head dangerouslySetInnerHTML={{ __html: headContent }} />

		<body className="au-grid">
			{ header }
			<div className="page-wrapper">
				<div className="content-wrapper">
					<div className="tier">
						<main tabIndex="-1" id="content" className="au-body container-fluid">
							<div className="row">
								<div className="col-md-12">
									<h1 className={ _ID === '404' ? 'sronly' : '' }>{ pagetitle }</h1>
									{ main }
								</div>
							</div>
						</main>
					</div>
				</div>
				{ footer }
			</div>
			<script src="/assets/js/footer.js" />

			<!-- Global site tag (gtag.js) - Google Analytics -->
			<script async src="https://www.googletagmanager.com/gtag/js?id=G-MHDT7K286L"/>
			<script>
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments)}
				gtag('js', new Date());

				gtag('config', 'G-MHDT7K286L');
			</script>
		</body>
		</html>
	);
}


Page.propTypes = {
	/**
	 * pagetitle: Homepage
	 */
	pagetitle: PropTypes.string.isRequired,

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
