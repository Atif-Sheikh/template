import React from 'react';
import { Form, Col, Button, Jumbotron, FormText } from 'react-bootstrap';
import { connect } from "react-redux";
import fbIcon from '../../icons/brands/facebook.svg';
import linkedinIcon from '../../icons/brands/linkedin.svg';
import instIcon from '../../icons/brands/instagram.svg';
import lineIcon from '../../icons/brands/line.svg';
import skypeIcon from '../../icons/brands/skype.svg';
import viberIcon from '../../icons/brands/viber.svg';
import ProjectActions from '../../store/actions/projectActions';
class ContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        };
    };
    onChangeText = (key, value) => {
        this.setState({ [key]: value });
    };
    SubmitForm = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, message } = this.state;
        if (firstName && lastName && email && message) {
            this.props.sendEmailMessage({ firstName, lastName, email, message });
        }
        // else {
        //     alert('Please submit all the details');
        // }
    }
    render() {
        return (
            <Jumbotron style={styles.mainContainer}>
                <div style={styles.row}>
                    <div style={styles.collumn1}>
                        <Form style={{ width: '90%' }}>
                            <FormText style={styles.heading}>CONTACT FORM</FormText>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label style={styles.allFonts}>YOUR FIRST NAME*</Form.Label>
                                    <Form.Control style={styles.allFonts} onChange={(e) => this.onChangeText('firstName', e.target.value)} required type="text" placeholder="Enter your firstname" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label style={styles.allFonts}>ENTER YOUR LASTNAME*</Form.Label>
                                    <Form.Control style={styles.allFonts} onChange={(e) => this.onChangeText('lastName', e.target.value)} required type="text" placeholder="Enter your lastname" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label style={styles.allFonts}>ENTER YOUR EMAIL*</Form.Label>
                                <Form.Control style={styles.allFonts} onChange={(e) => this.onChangeText('email', e.target.value)} required placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={styles.allFonts}>YOUR MESSAGE FOR US*</Form.Label>
                                <Form.Control style={styles.allFonts} onChange={(e) => this.onChangeText('message', e.target.value)} required placeholder='ENTER YOUR MESSAGE' as="textarea" rows="3" />
                            </Form.Group>

                            <Button onClick={this.SubmitForm} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div style={styles.collumn}>
                        <p style={styles.paragrph}>
                            ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.
                                <br></br>
                            <br></br>
                            discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        <div style={styles.fontSection}>
                                <img style={styles.icons} src={fbIcon} alt='Facebook' />
                                <img style={styles.icons} src={linkedinIcon} alt='Linkedin' />
                                <img style={styles.icons} src={instIcon} alt='Instagram' />
                                <img style={styles.icons} src={lineIcon} alt='Line' />
                                <img style={styles.icons} src={skypeIcon} alt='Skype' />
                                <img style={styles.icons} src={viberIcon} alt='Viber' />
                            </div>
                        </p>
                    </div>
                </div>
            </Jumbotron>
        );
    };
};

const styles = {
    heading: {
        margin: '40px 0 40px 0',
        fontSize: '17px',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: 'grey'
    },
    mainContainer: {
        minHeight: '95vh',
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    collumn: {
        display: 'flex',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    collumn1: {
        display: 'flex',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    allFonts: {
        fontFamily: 'sans-serif',
        color: 'grey'
    },
    paragrph: {
        fontFamily: 'sans-serif',
        color: 'grey',
        paddingTop: '30px',
        maxWidth: '80%'
    },
    fontSection: {
        paddingTop: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '35%',
    },
    icons: {
        marginRight: '10px',
        cursor: 'pointer',
        color: 'purple',
        width: 20
    }
};

const mapStateToProps = state => {
    return {
      isLoading: state.projectReducer.sendEmailLoading,
      
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        sendEmailMessage: (data) => dispatch(ProjectActions.sendEmailMessage(data)),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactForm);