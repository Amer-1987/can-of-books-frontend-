import React from 'react';
import Header from './Header';
import Footer from './Footer';

import IsLoadingAndError from './IsLoadingAndError';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import BestBooks from './BestBooks';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <LoginButton />
          <LogoutButton />



          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              <BestBooks />

            </Route>


            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route  path="/Profile">
            <Profile/>
               
              </Route>

          </Switch>
          <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default App;
