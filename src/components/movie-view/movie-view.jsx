
import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap"

// import './movie-view.scss';

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={movie.ImageURL}/>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Card.Text>Genre: {movie.Genre.Name} </Card.Text>
                    <Card.Text>Definition of Genre: {movie.Genre.Description}</Card.Text>
                    <Card.Text>Director: {movie.Director.Name}</Card.Text>
                    <Card.Text>Imdb Rating: {movie.Rating}</Card.Text>
                    <Button onClick={onBackClick} variant="primary" size="sm">Back</Button>
                </Card.Body>
            </Card>
        </Container>
    );
 };
 
            
      
   