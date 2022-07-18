import React, { Component } from 'react';
import { Card, FormGroup, Label, FormText } from 'reactstrap';
import { DatePicker } from 'reactstrap-date-picker';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
import './home.css';
import SearchBar from './SearchBar';

class Home extends Component {
  render() {
    return(
      <div>
        <MDBCarousel fade>
          <MDBCarouselInner>
            <MDBCarouselItem className='active'>
              <MDBCarouselElement className='hero-image1' />
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement className='hero-image2' />
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement className='hero-image3' />
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
        <div className='container'>
          <h2>
            Find Your Next Adventure
          </h2>
            <div className='row'>
              <div className='col-6'>
                <MDBInput label='Search Destinations' size='lg' id='search' type='text' />
                <MDBBtn className='btn' outline color='dark'>Search</MDBBtn>
              </div>
            </div> 
          <div className='row'>
            <div className='col'>
              <Card>
                <img className='img_thumb1 card-img-top' alt='patio' />
              </Card>
              <br></br>
              <Card>
                <img className='img_thumb3 card-img-top' alt='food' />
              </Card>
            </div>
            <div className='col'>
              <Card>
                <img className='img_thumb2 card-img-top' alt='lobby' />
              </Card>
            </div>
          </div> 
        </div>
      </div>
    );
  };
};

export default Home;
