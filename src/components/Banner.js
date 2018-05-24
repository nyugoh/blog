import React from 'react';
import { Image, Header } from 'semantic-ui-react';

const avatar = 'https://www.emberjs.com/images/tomsters/chicago-tomster-ccd89463.png';

const Banner = props =>{
	return (
		<header id={'banner'} className={'ui centered two column grid'}>
			<div className="ui row">
				<div className="ui column center aligned">
					<Image src={avatar} circular centered style={avatarStyles}/>
				</div>
			</div>
			<div className="ui row">
				<div className="ui column center aligned">
					<Header as={'h1'} style={authorStyles}>Joe Nyugoh</Header>
				</div>
			</div>
		</header>
	);
};

const avatarStyles = {
	width: 115,
	height: 115
};

const authorStyles = {
	fontSize: "4rem",
	letterSpacing: "-2px",
	margin: "1.5rem 0 1rem",
	textIndent: "-3px",
	marginTop: "-10px"
};

export default Banner;
