import React from 'react';

const Footer = props =>{
	return (<div styles={{marginTop: "30"}}>
		<div className="ui divider"></div>
		<div className="ui container">
			<div className="ui text footer blog-description">
			<p>
				<span className="ui left aligned">Joe Nyugoh &copy; {new Date().getFullYear()}</span>
			</p>
			<p>Making computers your slave.</p>
			</div>
		</div>
	</div>);
};

export default Footer;
