import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import './reservation.css'

class Reservation extends Component {
    render() {
        return (
            <div className='container'>
                <h2>Find Your Perfect Getaway</h2>
                <div className='row'>
                    <div className='col'>
                        <Form>
                            <FormGroup>
                                <Label for='destination' size='sm'>Find your destination</Label>
                                <Input type='text' name='destination' id='destination' placeholder='Where do you want to go?'/>
                            </FormGroup>
                            <FormGroup>
                                <Label for='destination' size='sm'>Special Rates</Label>
                                <Input type='select' name='rates' id='rates'>
                                    <option>None</option>
                                    <option>Employee</option>
                                    <option>Government & Military</option>
                                    <option>Senior Discount</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </div>
                    <div className='col'>
                        <Form>
                            <FormGroup>
                                <Label for='destination' size='sm'>Dates</Label>
                                <Input type='date' name='dates' id='dates' placeholder='Select Dates'/>
                            </FormGroup>
                            <FormGroup>
                                <Label for='destination' size='sm'>Brands</Label>
                                <Input type='select' name='brands' id='brands' />
                            </FormGroup>
                        </Form>
                    </div>
                    <div className='col'>
                        <Form>
                            <FormGroup>
                                <Label for='destination' size='sm'># of Guests</Label>
                                <Input type='select' name='guests' id='rooms/guests'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                </Input>
                            </FormGroup>
                            <MDBBtn className='btn' size='lg' outline color='dark'>Submit</MDBBtn>
                        </Form>
                    </div>
                </div>   
            </div>
        )
    }
}

export default Reservation;
