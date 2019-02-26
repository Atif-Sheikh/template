import React, { Component } from "react";
import DirectusSDK from "@directus/sdk-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faLaptopCode,
  faGlobe,
  faHeart,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import Navbar from "../navbar";
import Header from "../header";
import "../../App.css";
import "../../css/creative.css";
import "../../css/creative.min.css";
import "../../scss/_global.scss";
import "../../scss/_masthead.scss";
import "../../scss/_navbar.scss";
import "../../scss/_portfolio.scss";
import "../../scss/_variables.scss";
import "../../scss/creative.scss";
import imgSrc1 from "../../img/portfolio/thumbnails/1.jpg";
import imgSrc2 from "../../img/portfolio/thumbnails/2.jpg";
import imgSrc3 from "../../img/portfolio/thumbnails/3.jpg";
import imgSrc4 from "../../img/portfolio/thumbnails/4.jpg";
import imgSrc5 from "../../img/portfolio/thumbnails/5.jpg";
import imgSrc6 from "../../img/portfolio/thumbnails/6.jpg";
import AuthActions from "../../store/actions/authActions";
import { Modal, Carousel } from "react-bootstrap";

const client = new DirectusSDK();

const moves = (from, to, ...a) =>
  from === to ? a : (a.splice(to, 0, ...a.splice(from, 1)), a);
class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      scroll: 0,
      modalShow: false,
      images: [imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5, imgSrc6],
      ImIndex: null
    };
  }
  async componentWillMount() {
    this.props.getData();
    const savedToken = await window.sessionStorage.getItem("token")
    window.addEventListener('beforeunload', function(event) {
      client.refresh(savedToken)
      .then(({ token }) => {
          window.sessionStorage.setItem("token", token);
      });
    });
  }
  async componentWillReceiveProps (nextProps) {
    if(nextProps.err === 'Expired token' || nextProps.err === 'Reading items from "home" collection was denied'){
      const savedToken = await window.sessionStorage.getItem("token")
      window.addEventListener('beforeunload', function(event) {
        client.refresh(savedToken)
        .then(({ token }) => {
            window.sessionStorage.setItem("token", token);
        });
      });
      nextProps.getData();
    }
    //   window.addEventListener("scroll", function (event) {
    //     console.log(this.scrollY, "EVNET");
    //     this.setState({scroll:this.screenY})
    // });
  }
  componentDidMount() {
    var get = this.handleScrol;
    window.addEventListener("scroll", function(event) {
      get(this.scrollY);
      // this.setState({scroll:this.screenY})
    });
  }

  handleScrol = event => {
    this.setState({
      scroll: event
    });
  };

  getHTML = (id, txt) => {
    document.getElementById(id).innerHTML = txt;
  };

  render() {
    const { data, err, isLoading, isError } = this.props;
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className="App">
        {/* {
          isLoading && <CircularProgress 
            style={{ 
              width: '100px', 
              height: '100px', 
              margin: '0px auto', 
              textAlign: 'center',
              position: 'absolute',
              top: '40%',
              left: '50%'
            }} 
          /> 
        } */}
        <Navbar scroll={this.state.scroll} />
        <Header data={data} />
        <ImageModal
          show={this.state.modalShow}
          onHide={modalClose}
          images={this.state.images}
          imageindex={this.state.ImIndex}
        />
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">We've got what you need!</h2>
                <hr className="divider light my-4" />
                <p className="text-white-50 mb-4">
                  Start Bootstrap has everything you need to get your new
                  website up and running in no time! Choose one of our open
                  source, free to download, and easy to use themes! No strings
                  attached!
                </p>
                <a
                  className="btn btn-light btn-xl js-scroll-trigger"
                  href="#services"
                >
                  Get Started!
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">At Your Service</h2>
            <hr className="divider my-4" />
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <FontAwesomeIcon
                    className="fas fa-4x text-primary mb-4"
                    icon={faGem}
                  />
                  <i className="fas fa-4x fa-gem text-primary mb-4" />
                  <h3 className="h4 mb-2">Sturdy Themes</h3>
                  <p className="text-muted mb-0">
                    Our themes are updated regularly to keep them bug free!
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <FontAwesomeIcon
                    className="fas fa-4x text-primary mb-4"
                    icon={faLaptopCode}
                  />
                  <h3 className="h4 mb-2">Up to Date</h3>
                  <p className="text-muted mb-0">
                    All dependencies are kept current to keep things fresh.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <FontAwesomeIcon
                    className="fas fa-4x text-primary mb-4"
                    icon={faGlobe}
                  />
                  <h3 className="h4 mb-2">Ready to Publish</h3>
                  <p className="text-muted mb-0">
                    You can use this design as is, or you can make changes!
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <FontAwesomeIcon
                    className="fas fa-4x text-primary mb-4"
                    icon={faHeart}
                  />
                  <h3 className="h4 mb-2">Made with Love</h3>
                  <p className="text-muted mb-0">
                    Is it really open source if it's not made with love?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div
                className="col-lg-4 col-sm-6"
                onClick={() => this.setState({ modalShow: true, ImIndex: 1 })}
              >
                <a className="portfolio-box">
                  <img className="img-fluid" src={imgSrc1} alt="Image-full" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-4 col-sm-6"
                onClick={() => this.setState({ modalShow: true, ImIndex: 2 })}
              >
                <a className="portfolio-box">
                  <img className="img-fluid" src={imgSrc2} alt="image-full" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-4 col-sm-6"
                onClick={() => this.setState({ modalShow: true, ImIndex: 3 })}
              >
                <a className="portfolio-box">
                  <img className="img-fluid" src={imgSrc3} alt="image-full" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-4 col-sm-6"
                onClick={() => this.setState({ modalShow: true, ImIndex: 4 })}
              >
                <a className="portfolio-box">
                  <img className="img-fluid" src={imgSrc4} alt="image-full" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-4 col-sm-6"
                onClick={() => this.setState({ modalShow: true, ImIndex: 5 })}
              >
                <a className="portfolio-box">
                  <img className="img-fluid" src={imgSrc5} alt="image-full" />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-4 col-sm-6"
                onClick={() => this.setState({ modalShow: true, ImIndex: 6 })}
              >
                <a className="portfolio-box">
                  <img className="img-fluid" src={imgSrc6} alt="image-full" />
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      Category
                    </div>
                    <div className="project-name">Project Name</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
            <a
              className="btn btn-light btn-xl"
              href="https://startbootstrap.com/themes/creative/"
            >
              Download Now!
            </a>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4" />
                <p className="text-muted mb-5">
                  Ready to start your next project with us? Give us a call or
                  send us an email and we will get back to you as soon as
                  possible!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center">
                {/* <i className="fas fa-phone fa-3x mb-3 text-muted"></i> */}
                <FontAwesomeIcon
                  className="fas fa-3x mb-3 text-muted"
                  icon={faPhone}
                />
                <div>+1 (202) 555-0149</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                {/* <i className="fas fa-envelope fa-3x mb-3 text-muted"></i> */}
                <FontAwesomeIcon
                  className="fas fa-3x mb-3 text-muted"
                  icon={faEnvelope}
                />
                {/* <!-- Make sure to change the email address in anchor text AND the link below! --> */}
                <a className="d-block" href="mailto:contact@yourwebsite.com">
                  contact@yourwebsite.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-light py-5">
          <div className="container">
            <div className="small text-center text-muted">
              Copyright &copy; 2019 - Start Bootstrap
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.authReducer.data,
    isLoading: state.authReducer.isLoading,
    isError: state.authReducer.isError,
    err: state.authReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(AuthActions.getData())
  };
};
class ImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  componentWillReceiveProps(nextProps) {
    const { images, imageindex } = nextProps;
    if (imageindex) {
      var shuffled = moves(imageindex - 1, 0, ...images);
      this.setState({ images: shuffled });
      console.log(shuffled, imageindex);
    } else {
      this.setState({ images: images });
    }
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Carousel>
          {this.state.images.map((image, i) => (
            <Carousel.Item key={i.toString()}>
              <img className="d-block w-100" src={image} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
