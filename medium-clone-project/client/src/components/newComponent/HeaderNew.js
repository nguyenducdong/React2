import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as constant from '../../constants/constant_action_type'
import {toggleOpen} from '../../redux/actions/action'
import './headerNew.css'

class HeaderNew extends Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-default">
                    <div className="container-fluid col-md-10 col-md-offset-1">
                        <div className="navbar-header">
                            <a className="navbar-brand" id="logo" href="/">
                                <img alt="Stories" src="/img/stories-logo.svg" height="40"/>
                            </a>
                        </div>
                        <ul className="nav navbar-nav filter-links">
                            <li><a className="" href="/">Top stories</a></li>
                        </ul>
                        <div className="folding-nav">
                            <ul className="nav navbar-nav navbar-right">
                                {this.props.isAuth ? <li className="new-post-button"><a className="button" data-behavior="trigger-overlay" href="/editor">Write a story</a></li> : ''}
                                {this.props.isAuth ? '' : <li className="sign-in-button" onClick={this.props.openSignInWith}><a className="button green-border-button" href="#">Sign in / Sign up</a></li>}
                            </ul>
                        </div>

                    </div>

                </nav>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.authUser.user,
        isAuth: state.authUser.isAuth
    }
}

const mapDispatchToProps = {
    openSignInWith: toggleOpen
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderNew)
