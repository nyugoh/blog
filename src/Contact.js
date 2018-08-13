import React, {Component} from 'react';
import { Grid, Icon, Card, Form, Button, Message, Image } from 'semantic-ui-react';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import { send } from './actions/blog';
import { connect } from 'react-redux';

class Contact extends Component {
    constructor(props) {
		super(props);
		this.state = {
            data: {},
            loading: false,
            sent: false,
			error: ''
		};
    };
    
    componentDidMount() {
        document.title = 'Contact me';
        let script = document.createElement('script');
        script.text = "new GitHubCalendar('.calender', 'nyugoh')";
        document.body.appendChild(script);
    };

	submit = () => {
        this.setState({ loading: true });
        this.props.send(this.state.data).then( () =>{
            this.setState({ loading: false });
            this.setState({ sent: true })
        }).catch( error => {
            this.setState({ loading: false });
            this.setState({ error: 'Message not sent' });
        });    
    };

	handleChange = e => { this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } }); };

	render() {
        const extra = (
            <div>
                <p><a href='https://github.com/nyugoh' target='_blank' rel="noopener noreferrer">
                <Icon name='github' />
                56 Repositories
                </a></p>
                <p><a href='https://nyugoh.github.io' target='_blank' rel="noopener noreferrer">
                <Icon name='globe' />
                Portfolio
                </a></p>
            </div>
          )
		return (
			<div>
				<Navbar/>
                <div className="ui container">
                <h2>Contact me</h2>
                <div className="ui divider"/>
                    <Grid stackable='true'>
                        <Grid.Row style={{marginBottom:30}}>
                            <Grid.Column width={12} className={'blog-description'}>
                            <div>
                            <div style={{marginBottom: 20, paddingLeft: 5}}>
                                <Image alt=':fist:' src="https://pic.sopili.net/pub/emoji/twitter/2/72x72/1f44a.png" width='20' height='20' avatar/>
                                <span className='lead text'>Hey, hey, thanks for stopping by. I would like to hear from you, either to just say <img src="https://pic.sopili.net/pub/emoji/twitter/2/72x72/1f44b.png" width='20' height='20' alt=''/>
                                , or hire my services for your project or help you fix bugs. I will get back to you ASAP.</span>
                            </div>
                            <Form onSubmit={this.submit} loading={this.state.loading}>
                                <Form.Group widths='equal'>
                                    <Form.Input 
                                        fluid
                                        required
                                        label='Your name'
                                        onChange={this.handleChange}
                                        name={'name'}
                                        placeholder='Jane Doe' />
                                    <Form.Input 
                                        fluid
                                        required
                                        name={'email'}
                                        label='Email'
                                        onChange={this.handleChange}
                                        placeholder='janedoe@gmail.com' />
                                </Form.Group>
                                <Form.Input 
                                        fluid
                                        required
                                        name={'subject'}
                                        label='Subject'
                                        onChange={this.handleChange}
                                        placeholder='I would like to hire your services' />
                                <Form.TextArea 
                                    required
                                    rows='8'
                                    label='Message'
                                    name={'message'}
                                    onChange={this.handleChange}
                                    placeholder='Your message here ...' />
                                
                                <Form.Button color='orange' size='large' className='ui basic' floated='right'>Send <Icon name='send'/></Form.Button>
                                <div className='clearfix' style={{ marginTop:80, clear: 'both'}}>
                                    {!!this.state.error && <Message
                                        negative
                                        header='Fatal error occurred'
                                        content='Error sending your message'/>}
                                    {this.state.sent && <Message
                                        positive
                                        header='Message sent successfully'
                                        content='I will get back to you really soon.'/>}
                                </div>
                            </Form>
                            <div className="ui divider"/>
                            <h3>Let's connect on social media</h3>
                                <div stackable='true' className='clearfix' style={{textAlign: 'center', marginTop:30, marginBottom: 60, clear: 'both'}}>
                                    <Button color='facebook' href='https://www.facebook.com/joe.nyugoh' target='_blank' rel="noopener noreferrer">
                                    <Icon name='facebook' /> Facebook
                                    </Button>
                                    <Button color='twitter' href='https://twitter.com/joenyugoh' target='_blank' rel="noopener noreferrer">
                                    <Icon name='twitter' /> Twitter
                                    </Button>
                                    <Button color='google plus' href='https://plus.google.com/u/0/+JOENYUGOH' target='_blank' rel="noopener noreferrer">
                                    <Icon name='google plus' /> Google Plus
                                    </Button>
                                    <Button color='linkedin' href='https://www.linkedin.com/in/joe-nyugoh-854b80a1/' target='_blank' rel="noopener noreferrer">
                                    <Icon name='linkedin' /> LinkedIn
                                    </Button>
                                    <Button color='instagram' href='https://www.instagram.com/nyugohjoe/' target='_blank' rel="noopener noreferrer">
                                    <Icon name='instagram' /> Instagram
                                    </Button>
                                    <Button color='youtube' href='https://www.youtube.com/channel/UCsseZBg1zu7VwXWgS24MuCQ' target='_blank' rel="noopener noreferrer">
                                    <Icon name='youtube' /> YouTube
                                    </Button>
                                </div>
                                <div className="ui divider"/>
                                <div style={{marginTop: 20, marginBotton: 20}}>
                                    <h3>Github stats</h3>
                                    {/* <Image rounded fluid className='image' src="http://ghchart.rshah.org/ff7f50/nyugoh" alt="nyugoh's Github chart" /> */}
                                    <div className='calender'>
                                        loading ...
                                    </div>
                                </div>
                               
                            </div>    
                            </Grid.Column>
                            <Grid.Column width={4}>
                            <Card
                                image='https://avatars3.githubusercontent.com/u/23398917?s=460&v=4'
                                header='Joe Nyugoh'
                                meta='Software Developer'
                                description='Joe Nyugoh is a hacker futurist developer based in Nairobi, Kenya. I enjoy making things for humanity.'
                                extra={extra}
                            />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                <Footer/>
			</div>
		);
	}
}

export default connect(null, { send })(Contact)
