import React, {Component} from 'react';
import {Button, Container, Form} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
           <Container style={{ width: '500px' }}>
               <h1 className="text-center"> Contact me</h1>
               <Form>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Email address</Form.Label>
                       <Form.Control type="email" placeholder="Enter email" />
                       <Form.Text className="text-muted">
                           We'll never share your email with anyone else.
                       </Form.Text>
                   </Form.Group>

                   <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>Example textarea</Form.Label>
                       <Form.Control as="textarea" placeholder="Enter yor message" rows="3"/>
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicCheckbox">
                       <Form.Check type="checkbox" label="Check me out" />
                   </Form.Group>
                   <Button variant="primary" type="submit">
                       Submit
                   </Button>
               </Form>
           </Container>
        );
    }
}

export default Contacts;
