import React, {Component} from 'react';
import marked from 'marked';
import Discuss from "./Comments";

class PostBody extends Component {
	constructor(props){
		super(props);
		marked.setOptions({
			gfm: true,
			tables: true,
			breaks: false,
			pedantic: false,
			sanitize: true,
			smartLists: true,
			smartypants: false
		});
	};

	componentWillMount() {
		document.title = this.props.blog.title;
	};

	render() {
		const html = marked(this.props.blog.content);
		return (
			<div className={'blog-body'}>
				<code data-gist-id="edbda6f48444e6b682eae15c032a472b" data-gist-hide-line-numbers="true"/>
				<section>
					<div dangerouslySetInnerHTML={{__html: html}} />
				</section>
				<Discuss blog={this.props.blog}/>
			</div>
		);
	}
}

export default PostBody;
