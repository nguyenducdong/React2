import React, { Component } from 'react';
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'
import { 
    doRequestSignInUser,
    doToggleClose,
    doToggleOpen
 } from '../redux/actions/action'

class SignInWith extends Component {

    render() {
    const responseGoogle = (res) => {
        let postData = {
            name: res.w3.ig,
            provider: 'google',
            email: res.w3.U3,
            provider_id: res.El,
            token: res.Zi.access_token,
            provider_pic: res.w3.Paa
        }
        console.log(postData)
        // build our user data
        this.props.SignInUser(postData)
        this.props.toggleClose()
    }

        return ( 
            <div>
                <div data-behavior="overlay" className={this.props.modalMode === true ? 'overlay overlay-hugeinc open' : 'overlay overlay-hugeinc'}>
        <button onClick={this.props.toggleClose} data-behavior="close-overlay" type="button" className="overlay-close"><span className="glyphicon glyphicon-remove"></span></button>
        <nav>
            <h2 className="grayed-heading center">Sign In</h2>
            <ul className="omniauth-button-group">

                <li className="omniauth-button google">
                    <GoogleLogin className="button google"
                    clientId="852711490906-g9c7v6j17ieov6816ui2tlancvh1vk0s.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle} >
                        <i className="fa fa-google"></i><span> SignIn with Google</span>
                    </GoogleLogin>
                </li>

            </ul>
        </nav>
    </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        modalMode: state.common.modalMode
    }
}

const mapDispatchToProp = dispatch => {
    return {
        SignInUser: (user_data) => dispatch(doRequestSignInUser(user_data)),
        toggleClose: () => dispatch(doToggleClose()),
        toggleOpen: () => dispatch(doToggleOpen())
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(SignInWith);
