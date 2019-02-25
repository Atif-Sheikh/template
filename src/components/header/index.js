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

function getHTML(id, txt) {
    document.getElementById(id).innerHTML = txt; 
};

export default function({ data }) {
    return (
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end">
                        <h1 className="text-uppercase text-white font-weight-bold"> {data.title} </h1>
                        <hr className="divider my-4" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 font-weight-light mb-5" id="headerPara">{data.content && getHTML('headerPara', data.content)}</p>
                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                    </div>
                </div>
            </div>
        </header>
    );
};