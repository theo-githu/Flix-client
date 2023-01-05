
import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap"

import './movie-view.scss';

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Card.Text>{movie.Genre.Name}</Card.Text>
                    <Card.Text>{movie.Genre.Description}</Card.Text>
                    <Card.Text>{movie.Director.Name}</Card.Text>
                    <Card.Text>{movie.Rating}</Card.Text>
                    <button onClick={onBackClick} className="button">Back</button>
                </Card.Body>
            </Card>
        </Container>
    );
 };
        // <div>
           {/* <div>
                <img src={movie.ImageURL} />
            </div> */}
            {/* <div>
                <span>Title:</span>
                <span>{movie.Title}</span>
            </div> */}
            {/* <div>
                <span>Description:</span>
                <span>{movie.Description}</span>
            </div> */}
            {/* <div>
                <span>Genre:</span>
                <span>{movie.Genre.Name}</span>
                <span>{movie.Genre.Description}</span>
            </div> */}
            {/* <div>
                <span>Director:</span>
                <span>{movie.Director.Name}</span>
                <span>{movie.Director.Bio}</span>
            </div> */}

            // <div>
            //     <span>Rating:</span>
            //     <span>{movie.Rating}</span>
            // </div>
          
        // </div>
   