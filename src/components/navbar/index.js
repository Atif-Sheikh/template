import React from 'react';
import '../../App.css';
import '../../css/creative.css';
import '../../css/creative.min.css';
import '../../scss/_global.scss';
import '../../scss/_masthead.scss';
import '../../scss/_navbar.scss';
import '../../scss/_portfolio.scss';
import '../../scss/_variables.scss';
import '../../scss/creative.scss';

export default class Navbar extends React.Component {
    render() {
        const { scroll } = this.props;
        return (
            <nav className={scroll > 100 ? 'navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-scrolled' : "navbar navbar-expand-lg navbar-light fixed-top py-3"} id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}