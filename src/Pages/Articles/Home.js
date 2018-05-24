import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Banner from "../../components/Banner";
import BlogPost from "../../components/BlogPost";
import Footer from "../../components/Footer";
import FooterNav from "../../components/FooterNav";

class Home extends Component {
	render() {
		const blogs = this.props.blogs;
		return (
			<div className={'ui container'}>
				<Banner/>
				<div className="ui horizontal divider"><Icon name={'crosshairs'} circular loading/></div>
				<main>
					{blogs.length > 0 && blogs.map( blog => {
						return <BlogPost blog={blog}/>
					})}
				</main>
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
