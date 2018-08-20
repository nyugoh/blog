import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, TextArea, Message } from 'semantic-ui-react';
import { edit } from '../../actions/blog';


class EditBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            doneEditing: false,
            error: false
        };
    };

    componentWillMount() {
        let id  = this.props.match.params.id;
        let blog = this.props.blogs.filter(blog => blog._id == id)[0]
        this.setState({ post: {...blog}})
    };

    edit = post =>{
		this.props.edit(post).then(res => {
            this.setState({ doneEditing: true });
        }).catch(error => {
            this.setState({ error: true });
        });
	};

	handleChange = e => { this.setState({ ...this.state, [e.target.name]: e.target.value }); };

    render() {
        const { post, error, doneEditing } = this.state;
        return (<div>
            <h2>Write content</h2>
            <WritePost blog={post} edit={this.edit}/>
            {doneEditing &&  <Message
                icon='inbox'
                positive
                header='Edit successful'
                content='All went well'
            />}
            {error &&  <Message
                 icon='inbox'
                 negative
                header='Error editing'
                content='Fix error...!!'
            />}
        </div>);
    }
}

const mapPropsToState = state => ({
        blogs: state.blogs
});

export default connect(mapPropsToState, { edit })(EditBlog);

class WritePost extends Component {
    constructor(props) {
		super(props);
        this.state = { ...props.blog };
	};
	
	edit = () =>{
		this.props.edit(this.state);
		this.setState({});
	};

	handleChange = e => { this.setState({ ...this.state, [e.target.name]: e.target.value }); };

    render () {
        const blog = this.state;
        return (
			<div>
				<Form onSubmit={this.edit}>
                    <TextArea
						autoHeight
						fluid={'true'}
						name={'content'}
						placeholder={'Blog content'}
						style={{minHeight: 250}}
						value={blog.content}
						onChange={this.handleChange}/>
                        <br/><br/>
                    <Form.Button social={'twitter'}>SAVE</Form.Button>      
                </Form>
            </div>
        )
    }
}