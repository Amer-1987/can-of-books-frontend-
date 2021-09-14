import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import BookData from './bookData.js';

import { withAuth0 } from '@auth0/auth0-react';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookArray: [],
    }
  }


  componentDidMount = () => {
    // const { user } = this.props.auth0;    
    // const user = this.props.auth0.user.email;
    const email = this.props.auth0.user.email;

    // const email = user.email;
    // console.log(email);
    // console.log('555', email);


    axios
      .get(`http://localhost:3080/getBook?email=${email}`)
      .then(result => {
        // console.log(result.data);
        this.setState({
          bookArray: result.data,
        })

      })

      .catch(error => {
        console.log('404 ERROR');
      })
  }

  render() {
    return (
      <>
        <h1>My Favorite Books</h1>
        <p>
        This is a collection of my favorite books
        </p>
        {console.log(this.state.bookArray)}

        <BookData Book={this.state.bookArray} />

       
      </>
    )
  }

}
export default withAuth0(MyFavoriteBooks);
