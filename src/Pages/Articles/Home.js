import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Bloglist from "../../components/Bloglist";

class Home extends Component {
	componentWillMount() {
		document.title = "Joe Nyugoh";
	}
	render() {
		const blogs = this.props.blogs;
		return (
			<div>
				<Navbar/>
				<div className={'ui container'}>
				<Bloglist blogs={blogs}/>
				</div>
				<Link to={'/admin/blogs'}><span style={{color: '#fff'}}>///</span></Link>
				<Footer/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
 blogs: state.blogs
});

export default connect(mapStateToProps)(Home);
