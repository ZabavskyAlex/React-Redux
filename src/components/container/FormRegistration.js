import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionChangeEmail, actionChangeFirstName, actionChangeLastName} from '../../actions'
import {store} from "../../store/store";
import { Redirect } from 'react-router'

class FormRegistration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {redirect: false};

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(evt) {
        let value = evt.target.value;
        if(evt.target.name === "firstName")
            this.props.changeFirstName(value);
        else if(evt.target.name === "lastName")
            this.props.changeLastName(value);
        else if(evt.target.name === "email")
            this.props.changeEmail(value);
    }

    handleSubmit() {
        this.setState({redirect: true});
    }

    closeModalStartGame(){
        document.getElementById('modal_start_game').classList.toggle('modal_open');
    }

    render() {
        if(this.state.redirect)
            return <Redirect to="/game"/>;
        else {
            return (
                <Fragment>
                    <div className="modal_start_game" id="modal_start_game">
                        <header><p>Player profile</p><span onClick={this.closeModalStartGame} className="btn_close">Х</span></header>
                        <section>
                            <form onSubmit={this.handleSubmit} className="player" id="form_start_game">
                                <label htmlFor="firstName"><p>First name</p></label>
                                <input type="text" onChange={this.onChange} placeholder="your first name *" name="firstName" required/>
                                <label htmlFor="lastName"><p>Last name</p></label>
                                <input type="text" onChange={this.onChange} placeholder="your last name *" name="lastName" required/>
                                <label  htmlFor="postEmail"><p>Email</p></label>
                                <input onChange={this.onChange} type="email" placeholder="your email *" name="email" required/>
                                <p><input type="submit"  className="submit"   defaultValue="Start"/></p>
                            </form>
                        </section>
                    </div>
                </Fragment>
            );
        }
    }
}


const putActionsToProps = (dispatch) => {
    return{
        changeFirstName: bindActionCreators(actionChangeFirstName, dispatch),
        changeLastName: bindActionCreators(actionChangeLastName, dispatch),
        changeEmail: bindActionCreators(actionChangeEmail, dispatch)
    };
};

const WrapperFormRegistration = connect(null, putActionsToProps)(FormRegistration);

export default WrapperFormRegistration;