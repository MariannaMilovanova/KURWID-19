/*contact us*/

import React, {PureComponent} from 'react';
import './Footer.scss';

export default class Footer extends PureComponent {
	render() {
		return (
			<div className="Footer">
				<p>
					© 2020 Team CURWID-19
					<a href="/">Contact Us</a> 
				</p>
			</div>
		);
	  }
}