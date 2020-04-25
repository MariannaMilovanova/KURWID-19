/*contact us*/

import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';

export default class Footer extends PureComponent {
	render() {
		return (
			<div className="Footer">
				<p>
					© 2020 Team KURWID-19
					<a href="/"> Contact Us </a>
					<Link className="btn-success btn-lg" to={'/about-us'}> Request Professional Estimation</Link>
				</p>
			</div>
		);
	  }
}
