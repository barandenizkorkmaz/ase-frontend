import { Component } from 'react'
import { Row, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { loadState, saveState } from '../../localstorage/LocalStorage';
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

    getToken(response) {
        console.log(response);
    }

    sendLoginRequest(event) {
        console.log(this.state);
        saveState("login",true);
        console.log(loadState("login"));
        event.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
        client.post('/user/login', {
            "email": username,
            "password": password
        })
            .then((response) => {
                this.getToken(response);
            });
    }

    render() {
        return <Container >
            <Row className="justify-content-md-center mt-5" xs={6} md={2}>
                <Form onSubmit={this.sendLoginRequest}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.username} onChange={this.handleChangeUsername} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword} />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size="lg">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Row>
        </Container>
    }
}