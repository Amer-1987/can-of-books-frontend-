import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <Card style={{ width: '7rem' }}>
     
      <Card.Body>
        <button onClick={() => {
          logout({ returnTo: window.location.origin });
        }}>Log out</button>
      </Card.Body>
    </Card>
  );
}

export default LogoutButton;