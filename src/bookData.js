import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


class bookData extends React.Component {

  render() {
    return (
      <>
        <button onClick={() => this.props.addBook} >Add Book</button>

        <Card style={{ width: '18rem' }}>
          <Card.Body>


            <>
              <Card.Text>

                <h1>{this.props.item.title}</h1>
                <p>{this.props.item.description}</p>
                <h3>{this.props.item.status}</h3>
                <h6>{this.props.item.email}</h6>
              </Card.Text>

              <button onClick={() => this.props.deleteBook(this.props.item._id)} >Delete</button>
              <button onClick={() => this.props.showUpdateForm(this.props.item)} >update</button>

            </>

          </Card.Body>
        </Card>



        {/* { <Carousel>
          {
            this.props.Book.map(item =>
              <Carousel.Item interval={1500}>
               <h1>{this.props.item.title}</h1>
                    <p>{this.props.item.description}</p>
                    <h3>{this.props.item.status}</h3>
                    <h4>{this.props.item.email}</h4>


              </Carousel.Item>
            )}

        </Carousel> } */}
      </>
    )
  }
}
export default bookData;