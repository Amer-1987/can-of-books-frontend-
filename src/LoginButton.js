import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import './LoginButton.css';



function LoginButton() {
  const { isAuthenticated, loginWithRedirect,} = useAuth0();

  return !isAuthenticated && (
    <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="https://img.freepik.com/free-vector/bookshop-background-design_1212-306.jpg?size=338&ext=jpg" />
      <Card.Text>
        Click Below to Log In :
      </Card.Text>
    <Card.Body>
    <button onClick={loginWithRedirect}>Log in</button>
    </Card.Body>
    </Card>
  );
}

export default LoginButton;


