import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '@restart/ui/esm/Button';
import Form from 'react-bootstrap/Form';

class UpdateForm extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateBook} >

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title of Book</Form.Label>
                                <Form.Control type="text" name="title" defaultValue={this.props.title}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description"  defaultValue={this.props.description}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label>status</Form.Label>
                                <Form.Control type="text" name="status"  defaultValue={this.props.status}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="text" name="email"  defaultValue={this.props.email}/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Update
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

export default UpdateForm;