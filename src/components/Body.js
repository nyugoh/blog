import React, {Component} from 'react';

class PostBody extends Component {
	render() {
		return (
			<div className={'blog-body'}>
				<p>As I was building out some model entities in a Spring application I'm working on, I began to build out the front-end piece (in Angular 2) to view some of the data and when I would query this specific entity over its RESTful endpoint I kept getting a CORS error. The reason this was odd to me was because all my other endpoints were working and they all flow through the same filter that provides the appropriate CORS headers.</p>
				<p>I decided to switch over to Postman and see if it would give different results since it was just hitting the URL rather than going through JavaScript. When I did this, my application threw up all over my screen and I was left with the following clue:</p>
				<h3>CORS settings</h3>
				<p>What this told me was that there was something in my models that couldn't be serialized by Jackson. And clearly these "somethings" were Hibernate related. After doing some googling I found this Q&A on Stackoverflow so I applied the following to my app's configuration:</p>
				<code data-gist-id="edbda6f48444e6b682eae15c032a472b" data-gist-hide-line-numbers="true"/>
				<h3>Using emojis in your git commit message</h3>
				<p>I decided to switch over to Postman and see if it would give different results since it was just hitting the URL rather than going through JavaScript. When I did this, my application threw up all over my screen and I was left with the following clue:</p>
				<code data-gist-id="28845e6a8f11010621e7b897f8eccb35"/>
			</div>
		);
	}
}

export default PostBody;
