import React, { Component } from "react";
import { Modal, Carousel } from "react-bootstrap";

const moves = (from, to, ...a) =>
    from === to ? a : (a.splice(to, 0, ...a.splice(from, 1)), a);

export default class ImageModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
    };

    componentWillReceiveProps(nextProps) {
        const { images, imageindex } = nextProps;
        if (imageindex) {
            var shuffled = moves(imageindex - 1, 0, ...images);
            this.setState({ images: shuffled });
        } else {
            this.setState({ images: images });
        }
    };

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
    };
};