import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Banner from "../../components/Banner";
import BlogPost from "../../components/BlogPost";
import Footer from "../../components/Footer";
import FooterNav from "../../components/FooterNav";
import Navbar from "../../components/Navbar";
import Bloglist from "../../components/Bloglist";

class Home extends Component {
	render() {
		const blogs = this.props.blogs;
		return (
			<div className={'ui container'}>
				<Navbar/>
				<Banner/>
				<div className="ui horizontal divider"><Icon name={'crosshairs'} circular loading/></div>
				<Bloglist blogs={blogs}/>
				<footer>
					<FooterNav/>
					<Footer/>
				</footer>
			</div>
		);
	}
}

const mapStateToProps = state => ({
 blogs: state.blogs
});

export default connect(mapStateToProps)(Home);
