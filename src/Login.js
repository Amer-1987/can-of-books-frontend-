import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
import './LoginButton.css';
import LoginButton from './LoginButton';
import Header from './Header'


class Login extends React.Component {
  render() {
    return (
      <>
      <Header/>
 <LoginButton/>
        {/* <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Log In</Card.Title>
            <Card.Text>
              Click Below to Log In
            </Card.Text>
           
            TODO: add a `LoginButton` component here that will log the user in with Auth0
          </Card.Body>
        </Card> */}
      </>
    )
  }
}

export default Login;
