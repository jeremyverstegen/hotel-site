import React from 'react';
import './HeroPage.css';
import { Button } from 'reactstrap';



const HeroPage = () => {
    return (
        <div className='hero-image'>
            <div className='hero-text'>
                <h1>Find Your Next Adventure</h1>
            </div>
            <div className='btn'>
            <Button>Enter</Button>
            </div>
        </div>
    )
}

export default HeroPage;