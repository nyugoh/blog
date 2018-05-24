import React, {Component} from 'react';
import { Header, Image } from 'semantic-ui-react';

class Article extends Component {
	render() {
		const { article } = this.props;
		return (
			<article>
				<Header as={'h3'}>{article.title}</Header>
				<section className={'articleImage'}>
					<Image src={article.imageUrl}/>
					<p><i>{article.imageCaption}</i></p>
				</section>
				<section>{article.content}</section>
			</article>
		);
	}
}

export default Article;
