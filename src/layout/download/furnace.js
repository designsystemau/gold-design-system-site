import { AUradio } from '../../_auds/layout/control-input';
import GetData from './../../helper/getData';
import CodeSnippet from './../code-snippet';

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

/**
 * Print a list of depenedcies
 */
const DependencyList = ({ dependencies, MODULES }) => {

	const dependencyNames = [];

	Object.keys( MODULES ).map( ( module ) => {
		dependencies.map( ( dependency ) => {
			if ( MODULES[ module ].ID === dependency ) {
				dependencyNames.push( MODULES[ module ].name );
			}
		})
	})

	return (
		<Fragment>
			{
				dependencyNames.length > 0
					? `Dependencies: ${ dependencyNames.join(', ') }`
					: null
			}
		</Fragment>
	);
};



/**
 * The Furnace component
 */
const Furnace = ({ components, _ID, _body, _parseYaml, _relativeURL }) => {
	const MODULES = GetData({
		filter: ( key, COMPONENTS ) => COMPONENTS[ key ].state === 'published',
		yaml: _parseYaml,
	});

	return (
		<div className="au-grid">
			<form id="furnace" className="row furnace" method="POST" action="https://furnace.designsystemau.org">

				<div className="col-xs-12 col-sm-8">
					<div className="furnace__panel">
						<h2 className="furnace__title">Select components</h2>
						<button type="button" className="au-btn au-btn--primary furnace__selectall">Select all</button>
						<button type="reset" className="js-furnace-clear furnace__clear au-btn au-btn--secondary">Clear selections</button>
					</div>
					<fieldset className="au-fieldset">
						<legend className="sronly">Components</legend>

						<ul className="furnace__component-list">
							{
								Object.keys( MODULES )
									.map( ( module, i ) => (
										<li className="furnace__component" key={ i }>
											<label className="furnace__component__label">
												<span className="furnace__component__control">
													<input
														type="checkbox"
														name="components"
														className="au-control-input__input js-furnace-selector"
														value={ MODULES[ module ].ID }
														required={ MODULES[ module ].required }
														defaultChecked={ MODULES[ module ].required }
														disabled={ MODULES[ module ].required }
														readOnly={ MODULES[ module ].required }
													/>
													<span className="au-control-input__text">
														<span className="sronly">Add</span>
															{ MODULES[ module ].name }
															{
																MODULES[ module ].required
																	? ' (required)'
																	: ''
															}
														<div>
															{
																MODULES[module].dependencies.length > 0 &&
																<span className="furnace__component__dependencies">
																	<DependencyList dependencies={ MODULES[ module ].dependencies } MODULES={ MODULES } />
																</span>

															}
																<a className="furnace__component__documentation" href={ _relativeURL( `/components/${ MODULES[ module ].ID }`, _ID ) }>
																	<span className="sronly">{ MODULES[ module ].name }</span>
																	Documentation
																</a>
														</div>
													</span>
												</span>
											</label>

											<div className="furnace__component__details">
												<svg className="furnace__component__details__img" aria-hidden="true" title={ MODULES[ module ].name }>
													<use xlinkHref={ `/assets/svg/map.svg#${ MODULES[ module ].ID }` } />
												</svg>
											</div>

										</li>
									)
									)
							}
						</ul>

					</fieldset>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-offset-1 col-md-3">

					<h3 className="furnace__title">Your build</h3>

					<h4>Download Zip</h4>

					<div className="furnace__buildbox">
						<div className="furnace__buildbox__wrapper">
							<fieldset className="au-fieldset">
								<legend>Stylesheets</legend>

								<AUradio id="css-minified-radio" label="CSS minified" block name="styleOutput" value="css" defaultChecked />
								<AUradio id="css-modules-radio" label="CSS modules" block name="styleOutput" value="cssModules" />
								<AUradio id="sass-modules-radio" label="SASS modules" block name="styleOutput" value="sassModules" />
							</fieldset>

							<fieldset className="au-fieldset">
								<legend>JavaScript</legend>

								<AUradio label="JavaScript minified" id="js-minified-radio" block name="jsOutput" value="js" defaultChecked />
								<AUradio label="JavaScript modules" id="js-modules-radio" block name="jsOutput" value="jsModules" />
								<AUradio label="React modules" block id="react-modules-radio" name="jsOutput" value="react" />
							</fieldset>
						</div>
						<button type="submit" className="furnace__buildbox__download au-btn au-btn--block icon icon--dark icon--download">Download</button>
					</div>

					<div className="furnace-npm">
						<h4>npm</h4>
						<CodeSnippet aria-live="polite" className="js-furnace-code">npm install --save @gold.au/core</CodeSnippet>
					</div>

				</div>
			</form>
		</div>
	);
};


Furnace.propTypes = {};

Furnace.defaultProps = {};

export default Furnace;
