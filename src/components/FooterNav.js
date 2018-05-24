import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
const FooterNav = props =>{
	return (<div>
		<div className="ui grid footer-nav padded">
			<div className="eight wide column">
				<Button icon><Icon name={'long arrow left'}/> Previous</Button>
			</div>
			<div className="eight wide column ui right aligned">
				<Button icon>Next <Icon name={'long arrow right'}/></Button>
			</div>
		</div>
	</div>);
};

export default FooterNav;
