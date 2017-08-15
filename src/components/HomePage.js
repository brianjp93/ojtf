import React, {Component} from 'react';
import Footer from './Footer';
import ContactModal from './ContactModal';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.initializeParallax = this.initializeParallax.bind(this);
        this.initializeModal = this.initializeModal.bind(this);
    }
    componentDidMount() {
        this.initializeParallax();
        this.initializeModal();
    }
    initializeParallax() {
        window.$('.parallax').parallax();
    }
    initializeModal() {
        window.$('.modal').modal();
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className='homepage-header'>
                        Ojai Junior Tennis Foundation
                    </h1>
                </div>
                <div className="parallax-container" style={{height:400}}>
                    <div className="parallax">
                        <img src="/images/tennis-courts.jpg" alt=""/>
                    </div>
                </div>
                <div className="container">
                    <div className="row" style={{marginTop:15}}>
                        <div className="col l4">
                            <div className="card grey lighten-4">
                                <div className="card-content">
                                    <div className="center-align">
                                        <div className="card-title">Objectives</div>
                                        <div className="divider"></div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia
                                            deserunt mollit anim id est laborum
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col l4">
                            <div className="card grey lighten-4">
                                <div className="card-content">
                                    <div className="center-align">
                                        <div className="card-title">Info</div>
                                        <div className="divider"></div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia
                                            deserunt mollit anim id est laborum
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col l4">
                            <div className="card grey lighten-4">
                                <div className="card-content">
                                    <div className="center-align">
                                        <div className="card-title">
                                            Contact{' '}
                                            <span className='contact-button'>
                                                <a href="#contact-form" className="btn-floating waves-effect waves-light modal-trigger"><i className="material-icons">email</i></a>
                                                
                                            </span>
                                        </div>
                                        <div className="divider"></div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia
                                            deserunt mollit anim id est laborum
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="parallax-container">
                    <div className="parallax">
                        <img src="/images/tennis2.jpg" alt=""/>
                    </div>
                </div>

                <ContactModal trigger='contact-form' />

                <Footer />
            </div>
        )
    }
}


export default HomePage;