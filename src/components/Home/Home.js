import React, { Component } from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
import './home.css';

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

              </div>
              <div className='col-4'>
                <MDBInput label='Select Dates' size='lg' id='search' type='text' />
              </div>
              < div className='col-2'>
                <MDBBtn size='lg' outline color='dark'>Search</MDBBtn>
              </div>
            </div> 
          <div className='row'>
            <div className='col'>
              <Card>
                <img className='img_thumb1 card-img-top' alt='patio' />
              </Card>
              <br></br>
              <Card>
                <CardBody>
                  <CardText className="cardText">Find luxury anywhere in the world</CardText>
                  <CardText className="cardText2">Help us guide you to your next destination</CardText>
                </CardBody>
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
