import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '@restart/ui/esm/Button';
import Form from 'react-bootstrap/Form';

class AddForm extends Component {

    add=(event)=>{
        this.props.addBook(event)
    }
    render() {
        return (

            <>
                <Modal show={this.props.show2} onHide={this.props.handleClose2} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={this.add} >

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title of Book</Form.Label>
                                <Form.Control type="text" name="title"  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description"  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label>status</Form.Label>
                                <Form.Control type="text" name="status" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="text" name="email" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Add
                            </Button>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>


            </>
        );
    }

}


export default AddForm;