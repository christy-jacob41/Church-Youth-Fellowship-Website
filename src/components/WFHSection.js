import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './WFHSection.css';

function WFHSection() {
  return (
    <div className='wfhsection-container'>
      <video src='/videos/WFH - Game Plan.mp4' autoPlay loop muted />
      <div className='wfhsection-btns'>
        <Link to='/wfhpage'><Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Watch Worship From Home <i className='far fa-play-circle' />
        </Button>
        </Link>
        <a href="https://mtcd.org/?page_id=8635">
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Watch Church Service <i className='far fa-play-circle' />
        </Button>
        </a>
      </div>
    </div>
  );
}

export default WFHSection;