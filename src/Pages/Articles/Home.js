import React, {Component} from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';
import Banner from "../../components/Banner";
import BlogPost from "../../components/BlogPost";

class Home extends Component {
	render() {
		return (
			<div className={'ui container'}>
				<Banner/>
				<div className="ui horizontal divider"><Icon name={'crosshairs'} circular loading/></div>
				<main>
					<BlogPost/>
					<BlogPost/>
					<BlogPost/>
					<BlogPost/>
				</main>
				<footer>

				</footer>
			</div>
		);
	}
}

export default Home;
