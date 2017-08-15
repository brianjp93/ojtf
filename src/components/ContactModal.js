import React, {Component} from 'react';

class ContactForm extends Component {
    render() {
        return (
            <div>
                <div id={this.props.trigger} className="modal modal-fixed-footer">
                    <form action="">
                        <div className="modal-content">
                            <h4>Contact Us</h4>
                            <p>Feel free to send an email and we'll get back to you ASAP!</p>
                            <div className="divider" style={{marginBottom:10}}></div>
                            <div className="row">
                                <div className="col m6 s12">
                                    <div className="input-field">
                                        <i className="material-icons prefix">email</i>
                                        <input type="email" className="validate" id="email_input"/>
                                        <label htmlFor="email_input">email</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <div className="input-field">
                                        <i className="material-icons prefix">message</i>
                                        <textarea name="email-body" id="email-body" cols="30" rows="50" className="materialize-textarea"></textarea>
                                        <label htmlFor="email-body">message</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Send Email</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactForm;