import React, { Component } from "react";
import { Container, Form, Button, Card, Col } from "react-bootstrap";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            contact: ''
        };
    }

    handleChange = (key, value) => {
        this.setState({ [key]: value });
    };
    onSubmit = (e) => {
        e.preventDefault();

    };
    render() {
        console.log(this.state)
        return (
            <Container>
                <Card style={styles.card} className="bg-dark text-white">
                    <p style={styles.heading}>Signup</p>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label style={styles.setFontFamily}>First Name</Form.Label>
                                <Form.Control style={styles.setFontFamily} onChange={(e) => this.handleChange('firstName', e.target.value)} required type="text" placeholder="Enter your firstname" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label style={styles.setFontFamily}>Last Name</Form.Label>
                                <Form.Control style={styles.setFontFamily} onChange={(e) => this.handleChange('lastName', e.target.value)} required type="text" placeholder="Enter your lastname" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={styles.setFontFamily}>Email address</Form.Label>
                            <Form.Control style={styles.setFontFamily} onChange={(e) => this.handleChange('email', e.target.value)} type="email" placeholder="Enter email" />
                            <Form.Text style={styles.setFontFamily} className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={styles.setFontFamily}>Password</Form.Label>
                            <Form.Control style={styles.setFontFamily} onChange={(e) => this.handleChange('password', e.target.value)} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicChecbox">
                            <Form.Check style={styles.setFontFamily} type="checkbox" label="Stay login" />
                        </Form.Group>
                        <Button onClick={this.onSubmit} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card>
            </Container>
        );
    };
};

const styles = {
    card: {
        width: '70%',
        height: '80vh',
        margin: '0 auto',
        padding: '40px',
        position: 'absolute',
        top: '10%',
        left: '15%',
    },
    heading: {
        color: '#fff',
        fontSize: '40px',
        textAlign: 'center',
        fontFamily: 'sans-serif'
    },
    setFontFamily: {
        fontFamily: 'sans-serif'
    }
}

export default Signup;
