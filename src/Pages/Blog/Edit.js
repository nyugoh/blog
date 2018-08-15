import React, {Component} from 'react';
import { connect } from 'react-redux';
import Edit from '../../forms/EditBlog';

class EditBlog extends Component {
    render() {
        let blogs = this.props.blogs;
        let id  = this.props.match.params.id;
        let post = {}
        if(blogs) {
            let posts = this.props.blogs.filter( (blog, index) => {
                if (blog._id == id)
                    return blog;
            });
            post = posts[0];
        }
        return (<div>
            <h2>Edit blog</h2>
            <Edit post={post} id={id}/>
        </div>);
    }
}

const mapPropsToState = state => ({
        blogs: state.blogs
    });

export default connect(mapPropsToState)(EditBlog);