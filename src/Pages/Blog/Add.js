import React, {Component} from 'react';
import Editor from "./Draft";
// require('medium-editor');

class AddBlog extends Component {
	constructor(props) {
		super(props);
	};

	componentDidMount() {
		// new MediumEditor('.editable');
	};

	render() {
		return (
			<div>
				<h3>Add blog form goes here</h3>
				{/*<p className="editable">Lorem MediumEditor also supports textarea. If you provide a textarea element, the script will create a new div with contentEditable=true, hide the textarea and link the textarea value to the div HTML content.MediumEditor also supports textarea. If you provide a textarea element, the script will create a new div with contentEditable=true, hide the textarea and link the textarea value to the div HTML content.MediumEditor also supports textarea. If you provide a textarea element, the script will create a new div with contentEditable=true, hide the textarea and link the textarea value to the div HTML content.</p>*/}
				<Editor/>
			</div>
		);
	}
}

export default AddBlog;
