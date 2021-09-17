import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import './Profile.css'

class Profile extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
    <div >
    {isAuthenticated && <div className="amerData"> {user.name}</div>}
    {isAuthenticated && <div className="amerData"> contact us : {user.email}</div>}
    {/* {isAuthenticated && <div className='data'> {user.picture}</div>} */}
    {isAuthenticated && <img className="amerImg" src="https://lh3.googleusercontent.com/a/AATXAJwEfydiTcx6mT6OLelZ3l-J_RrQRYXUPbSq9Xir=s96-c" alt='img' />}
    </div>
    )
  }
}

export default withAuth0(Profile);