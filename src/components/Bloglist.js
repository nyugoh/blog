import React, {Component} from 'react';
import BlogPost from "./BlogPost";

class Bloglist extends Component {
	render() {
		return (
			<div>
				<main>
					{this.props.blogs.length > 0 && this.props.blogs.map( (blog, index) => {
						if (blog.status === 1)
							return <BlogPost key={index} blog={blog}/>
					})}
				</main>
			</div>
		);
	}
};

export default Bloglist;
