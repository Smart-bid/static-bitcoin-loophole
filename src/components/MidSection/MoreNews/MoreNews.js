import React, {Component} from 'react'
import bitimg from './img/bitimg.jpg'
import bitimg2 from './img/bitimg2.jpg'
import {withRouter} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import ModalForm from "../../TopSection/Regform/ModalForm";

export default class MoreNews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: {
                bitimg,
                bitimg2
            },
            showModal: false
        }
    }

    onHide = () => this.setState({ showModal: false });
    handleShow = () => this.setState({ showModal: true });

    render() {
        let languageManager = this.props.languageManager();

        return (
            <div className="MoreNews">
                <Modal show={this.state.showModal} onHide={this.onHide}>
                    <ModalForm validateParams={this.props.validateParams} form={this.props.form} pageHandler={this.props.pageHandler} countryCode={this.props.countryCode} languageManager={this.props.languageManager} handleStep={this.props.handleStep} handleForward={this.props.handleForward} handleSubmit={this.props.handleSubmit} step={this.props.step} location={this.props.location}/>
                </Modal>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>{languageManager.more_news_title}</h2>
                        </div>
                        {
                            languageManager.more_news_description.slice(0, 2).map((item, index) => {
                                return (
                                    <div className="col-lg-6 col-md-6 more-news_description" key={index}>
                                        <img src={this.state.images[item.img]} alt=""/>
                                        <h3 className="more-news_text">{item.title}</h3>
                                        <p className="more-news_text">{item.description}</p>
                                        <button onClick={this.handleShow} className="link">{item.link}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}