import React, { Component } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

class UserRegistry extends Component {
  constructor() {
    super();
    this.state = {
      value: "one"
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { value } = this.state;
    return (
      <Container>
        <Card style={styles.card} className="bg-dark text-white">
          <p style={styles.heading}>Login</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={styles.setFontFamily}>Email address</Form.Label>
              <Form.Control style={styles.setFontFamily} type="email" placeholder="Enter email" />
              <Form.Text style={styles.setFontFamily} className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label style={styles.setFontFamily}>Password</Form.Label>
              <Form.Control style={styles.setFontFamily} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check style={styles.setFontFamily} type="checkbox" label="Stay login" />
            </Form.Group>
            <Button variant="primary" type="submit">
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
    height: '50vh',
    margin: '0 auto',
    padding: '70px',
    position: 'absolute',
    top: '15%',
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

export default UserRegistry;
