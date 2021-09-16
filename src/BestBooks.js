import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import BookData from './bookData.js';

import { withAuth0 } from '@auth0/auth0-react';
import UpdateForm from './UpdateForm';
import Module from './Module';

import Form from 'react-bootstrap/Form'
import { Col, Button } from "react-bootstrap";


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
        <form onSubmit={this.addBook}>
          <fieldset>
            <legend>Add Book: </legend>
            <input type='text' name='title' placeholder='Book Name' />
            <input type='text' name='description' placeholder='Description' />
            <input type='text' name='status' placeholder='Status' />
            <input type='text' name='email' placeholder='Email' />
            <button type='submit'>Add</button>

          </fieldset>
        </form>

        {/* <Form onSubmit={this.props.addBook}>
          <fieldset>
            <Col>
              <Form.Label>Title of Book</Form.Label>
              <Form.Control placeholder="First name..." />
            </Col>

            <Col>
              <Form.Label>Description</Form.Label>

              <Form.Control placeholder="Last name..." />
            </Col>

            <Col>
              <Form.Label>E-mail</Form.Label>

              <Form.Control placeholder="Last name..." />
            </Col>

            <Col md>
              <Form.Label>Status</Form.Label>
              <Form.Select aria-label="Floating label select example">
                <option>Open this select menu</option>
                <option value="1">Celestial Book</option>
                <option value="2">published</option>
                <option value="3">stopped</option>


              </Form.Select>

            </Col>

            <Col>
            <Button type='submit'>Add</Button>
            </Col>
          </fieldset>
        </Form> */}


        {/* <Module /> */}

        <p>
          This is a collection of my favorite books
        </p>

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


        <UpdateForm
          show={this.state.showFlag}
          handleClose={this.handleClose}
          updateBook={this.updateBook}
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
