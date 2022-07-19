import React from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { MDBBtn } from "mdb-react-ui-kit";
import './contact.css'

const Contact = () => {
    return (
        <div className='container'>
            <h2>Contact Us</h2>
            <Form>
                <FormGroup>
                    <Label for='name'>Name</Label>
                    <Input type='name' name='name' id='name' />
                </FormGroup>
                <FormGroup>
                    <Label for='phone'>Phone</Label>
                    <Input type='phone' name='phone' id='phone' />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input type='email' name='email' id='email' placeholder='info@jvresorts.com' />
                </FormGroup>
                <FormGroup>
                    <Label for='text'>Send us your feedback</Label>
                    <Input type='textarea' rows='5' name='text' id='text' />
                </FormGroup>
                <MDBBtn className='btn' size='lg' outline color='dark'>Submit</MDBBtn>
            </Form> 
        </div>
    )
}

export default Contact;