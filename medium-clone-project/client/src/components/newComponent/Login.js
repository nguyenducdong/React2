import React from 'react';
import {connect} from 'react-redux'
import {toggleClose,SignInUser, toggleOpen} from '../../redux/actions/action'
import './style_login.css'
import GoogleLogin from 'react-google-login'

const mapStateToProps = state => {
    return {
        modalMode: state.common.modalMode
    }
}

const mapDispatchToProps = {
    toggleClose,
    SignInUser,
    toggleOpen
}

class Login extends React.Component {
    render(){

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
                <div className={this.props.modalMode===true ? "overlay overlay-hugeinc open" : "overlay overlay-hugeinc"}>
                    <button onClick={this.props.toggleClose} className="overlay-close"><i class="fa fa-times" aria-hidden="true"></i></button>

                    <nav>
                        <h2 className="grayed-heading center">Sign In</h2>
                        <ul className="center">
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
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

