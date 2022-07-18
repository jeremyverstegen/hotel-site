import React, { Component, useState } from 'react';
import { DatePicker } from 'reactstrap-date-picker';
import { FormGroup, Label, FormText, Form } from 'reactstrap';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: new Date().toISOString()
        }
    }

    handleChange(value, formattedValue) {
        this.setState({
            value: value,
            formattedValue: formattedValue
        })
    }

    componentDidUpdate() {
        const hiddenInputElement = document.getElementById('datepicker');
        console.log(hiddenInputElement.value);
        console.log(hiddenInputElement.getAttribute('data-formattedvalue'))
    }

    render() {
        return (

            <FormGroup>

                <Label>Select Dates</Label>
                <DatePicker id="datepicker" value={this.state.value} onChange={(v, f) => this.handleChange(v, f)} />
            </FormGroup>
        )
    }
}



export default SearchBar;
