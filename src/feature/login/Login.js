import { Component } from 'react'
import { Row, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { client } from '../../network/PostRequest';


export class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.sendLoginRequest = this.sendLoginRequest.bind(this);
    }

    handleChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    getToken(response){
        console.log(response);
    }

    sendLoginRequest(event) {
        event.preventDefault();
        console.log(this.state);
        let username = this.state.username;
        let password = this.state.password;
        client.post('/user/login', {
            "email":username,
            "password":password
        })
        .then((response) => {
            this.getToken(response);
        });
    }

    render() {
        return <Container >
            <Row className="justify-content-md-center" xs={6} md={4}>
                <Form onSubmit={this.sendLoginRequest}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.username} onChange={this.handleChangeUsername} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else. {this.state.username}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
    }
}