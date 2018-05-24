import React, {Component} from 'react';
import { Header, Image } from 'semantic-ui-react';
import marked from 'marked';

class Article extends Component {
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
	}
	render() {
		const { article } = this.props;
		const content = marked(article.content);
		return (
			<article>
				<Header as={'h3'}>{article.title}</Header>
				<section className={'articleImage'}>
					{/*<Image src={article.imageUrl}/>*/}
					<p><i>{article.imageCaption}</i></p>
				</section>
				<section>
					<div dangerouslySetInnerHTML={{__html: content}} />
				</section>
			</article>
		);
	}
}

export default Article;
