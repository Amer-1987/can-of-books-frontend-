import React from 'react';
import Header from './Header';
import Footer from './Footer';

// import IsLoadingAndError from './IsLoadingAndError';

import Profile from './Profile';
import Module from './Module';
import MyFavoriteBooks from './BestBooks'
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;

    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
          <Header />

          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}

              {isAuthenticated ? <MyFavoriteBooks />
                : <Login />}

             

            </Route>


            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route path="/Profile">
              <Profile />

            </Route>



          </Switch>
          <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
