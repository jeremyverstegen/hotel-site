import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class Reservation extends Component {
    render() {
        return (
            <div className='container'>
                <h2>Find Your Perfect Getaway</h2>
                <div className='row'>
                    <div className='col'>
                        <Form>
                            <FormGroup>
                                <Label for='destination' size='lg'>Find your destination</Label>
                                <Input type='text' name='text' id='text' placeholder='Where do you want to go?'/>
                            </FormGroup>
                        </Form>
                    </div>
                    <div className='col'>
                        
                    </div>
                    <div className='col'>
                        
                    </div>
                </div>   
            </div>
        )
    }
}

export default Reservation;
