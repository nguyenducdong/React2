import React from 'react'
import {connect} from 'react-redux'
import * as action from '../../redux/actions'
import {Link} from 'react-router-dom'
import Payments from '../payments/Payments'

class Header extends React.Component {


    renderContent(){
        console.log(this.props.auth.user)
        switch(this.props.auth.user){
            case null:
                return;
            case false:
                return <li><a href='/auth/google'>SignIn With Google</a></li>;
            default:
                return [
                    <li key="1"><Payments/></li>,
                    <li key="2" style={{ margin: '0 10px' }}>
                        {`Credits: ${this.props.auth.user.credits}`}
                    </li>,
                    <li key="3"><a href="/api/logout">Logout</a></li>
                ]
        }
    }

    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/servey': '/'} className="left brand-logo">Logo</Link>
                    
                    <ul className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header)