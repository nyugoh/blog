import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, convertToRaw} from 'draft-js';
import { Button } from 'semantic-ui-react';

class MyEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {editorState: EditorState.createEmpty()};
		this.onChange = (editorState) => {
			this.setState({editorState});
		}
	}

	submit = () => {
		console.log(convertToRaw(this.state.editorState))
	};
	render() {
		return (
			<div>
				<Editor editorState={this.state.editorState} onChange={this.onChange} />
				<Button onClick={this.submit}>Save</Button>
			</div>
		);
	}
}

export default MyEditor;
