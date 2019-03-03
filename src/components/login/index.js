import React, { Component } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import AuthActions from "../../store/actions/authActions";

class UserRegistry extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true
    };
  }

  handleChange = (key, value) => {
    const { email, password } = this.state;
    this.setState({ [key]: value });
    if (email && password) {
      this.setState({ disabled: false });
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.history.push('/');
      this.props.getData(nextProps.token);
    }
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email.trim() && password.trim()) {
      this.props.signIn({ email, password });
    }
  };
  render() {
    return (
      <Container>
        <Card style={styles.card} className="bg-dark text-white">
          <p style={styles.heading}>Login</p>
          <Form>
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
            {
              this.props.err &&
              <Form.Text style={styles.error}>
                {this.props.err}
              </Form.Text>
            }
            {
              this.props.isLoading ? <CircularProgress />
                :
                <Button onClick={this.onSubmit} disabled={this.state.disabled} variant="primary" type="submit">
                  Submit
                </Button>
            }
          </Form>
        </Card>
      </Container>
    );
  };
};

const styles = {
  card: {
    width: '70%',
    height: '70vh',
    margin: '0 auto',
    padding: '40px',
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
  },
  error: {
    fontFamily: 'sans-serif',
    fontSize: '15px',
    color: '#cc6e6e',
    paddingBottom: '12px'
  }
}

const mapStateToProps = state => {
  return {
    err: state.authReducer.loginError,
    isLoading: state.authReducer.loginLoading,
    token: state.authReducer.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: (obj) => dispatch(AuthActions.login(obj)),
    getData: (token) => dispatch(AuthActions.getData(token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserRegistry);
