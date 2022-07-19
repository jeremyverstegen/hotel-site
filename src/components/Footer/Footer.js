import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Connect with us on Social Media:</span>
                </div>
                <div>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-google'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-instagram'></i>
                    </a>
                </div>
            </section>
            <section class="">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fas fa-gem me-3"></i>JV RESORTS
                            </h6>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Our Company</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Guests</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Reservations</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Contact</a>
                            </p>
                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i class="fas fa-home me-3"></i> New York, NY 1000, US</p>
                            <p>
                                <i class="fas fa-envelope me-3"></i>
                                info@JVResorts.com
                            </p>
                            <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>
            <div class="text-center p-4">
                © 2022
                <a class="text-reset fw-bold" href="JVResorts.com">JVResorts.com</a>
            </div>
        </MDBFooter>
    );
};

export default Footer;

