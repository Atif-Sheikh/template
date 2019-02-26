import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import store from './store';
import Home from './components/home';
import Login from './components/login';
import ContactForm from './components/contactForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/contact" component={ContactForm} />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;