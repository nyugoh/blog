import React from 'react';

const Footer = props =>{
	return (<div>
		<div className="ui horizontal divider">_</div>
		<div className="ui column grid home-footer">
			<div className="ui row">
				<div className="ui column">
					<p>
						<span className="ui left aligned">Joe Nyugoh &copy; {new Date().getFullYear()}</span>
					</p>
				</div>
			</div>
		</div>
	</div>);
};

export default Footer;
