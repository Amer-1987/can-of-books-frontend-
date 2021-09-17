import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import BookData from './bookData.js';

import { withAuth0 } from '@auth0/auth0-react';
import UpdateForm from './UpdateForm';
import AddForm from './AddForm';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import  './bookData.css';

// import Form from 'react-bootstrap/Form'
// import { Col, Button } from "react-bootstrap";


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookArray: [],
      showFlag: false,
      title: '',
      description: '',
      status: '',
      email: '',
      bookId: '',
      showFlag2: false,
    }
  }


  componentDidMount = () => {
    // const { user } = this.props.auth0;    
    const email = this.props.auth0.user.email;

    // const email = user.email;
    // console.log(email);
    // console.log('555', email);


    axios
      .get(`${process.env.REACT_APP_BACKENDURL}/getBook?email=${email}`)
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


  addBook = (event) => {
    event.preventDefault();
    const email = this.props.auth0.user.email;
    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      email: email,
    }
    axios
      .post(`${process.env.REACT_APP_BACKENDURL}/addBook`, obj)
      .then(result => {
        this.setState({
          bookArray: result.data,
          showFlag2: false,
        })
      })
      .catch(error => {
        console.log(' ERROR in adding new book');
      })
    console.log(obj);

  }

  deleteBook = (id) => {
    console.log(id);
    const email = this.props.auth0.user.email;

    axios
      .delete(`${process.env.REACT_APP_BACKENDURL}/deleteBook/${id}?email=${email}`)
      .then(result => {
        this.setState({
          bookArray: result.data,
        })
      })
      .catch(error => {
        console.log(' ERROR in deleting book');
      })
  }

  handleClose = () => {

    this.setState({
      showFlag: false,

    })
  }

  handleClose2 = () => {

    this.setState({
      showFlag2: false,

    })
  }

  showUpdateForm = (item) => {
    this.setState({
      showFlag: true,
      title: item.title,
      description: item.description,
      status: item.status,
      email: item.email,
      bookId: item._id,

    })
  }
  showAddForm = (item) => {
    this.setState({
      showFlag2: true,
      title: item.title,
      description: item.description,
      status: item.status,
      email: item.email,
      // bookId: item._id,

    })
  }

  updateBook = (event) => {
    event.preventDefault();
    const email = this.props.auth0.user.email;

    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      email: email,

    }
    axios
      .put(`${process.env.REACT_APP_BACKENDURL}/updateBook/${this.state.bookId}`, obj)
      .then(result => {
        this.setState({
          bookArray: result.data,
          showFlag: false,
        })
      })
      .catch(error => {
        console.log(' ERROR in updating book');
      })
    console.log(obj);

  }


  render() {
    return (
      <>

        <Card style={{ width: '14rem' }} >

          <Card.Img className="addBookCard" variant="top" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/add-books-833908.png" />
          <Card.Body>
            <button className="addButton" onClick={() => this.showAddForm(this.state.title)} >Add Book to Collection</button>
          </Card.Body>
        </Card>

        <p>
          This is a collection of my favorite books
        </p>

        <Row Row xs={1} md={3} className="g-4">

          {
            this.state.bookArray.map(item => {
              return (
                <BookData
                  item={item}
                  deleteBook={this.deleteBook}
                  showUpdateForm={this.showUpdateForm}

                />
              )
            })
          }
        </Row>


        <UpdateForm
          show={this.state.showFlag}
          handleClose={this.handleClose}
          updateBook={this.updateBook}
          title={this.state.title}
          description={this.state.description}
          status={this.state.status}
          email={this.state.email}
        />

        <AddForm
          show2={this.state.showFlag2}
          handleClose2={this.handleClose2}
          addBook={this.addBook}
          title={this.state.title}
          description={this.state.description}
          status={this.state.status}
          email={this.state.email}
        />

      </>
    )
  }

}
export default withAuth0(MyFavoriteBooks);
