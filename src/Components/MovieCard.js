import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Card className='card' style={{ width: '18rem'}} > 
      <Card.Img className='image' variant="top" src={posterURL} style={{ width: '18rem' }}/>
      <Card.Body>
        <Card.Title className='title'style={{ width: '13rem' }}><h3>{title}</h3></Card.Title>
        <Card.Text className='description' style={{ width: '13rem' }}>{description}</Card.Text>
        <Card.Text className='rating' style={{ width: '13rem' }}>{`Rating: ${rating}`} </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;