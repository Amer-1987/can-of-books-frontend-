import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

class bookData extends React.Component {
  render() {
    return (
      <>

        <Carousel>
          {
            this.props.Book.map(item =>
              <Carousel.Item interval={1500}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <h3>{item.status}</h3>
                  <h4>{item.email}</h4>
             

              </Carousel.Item>
            )}

        </Carousel>
      </>
    )
  }
}
export default bookData;