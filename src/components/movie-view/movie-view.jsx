
import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


export const MovieView = ({ movies }) => {
    const { movieId } = useParams();
    const movie = movies.find((m) => m._id === movieId);
    // const storedUser = JSON.parse(localStorage.getItem("user"));
    // const token = localStorage.getItem("token");

    // const addFavourite = (movieId) => {
    //     if (!token) return;

    //     const url = `https://myflix-api-1234.herokuapp.com/users/${storedUser.Username}/movies/${movieId}`;
    //     const requestOptions = {
    //         method: "POST",
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     };

    //     fetch(url, requestOptions)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //         })
    //         .catch((e) => {
    //             alert("Something has gone wrong");
    //         });
    // };

    return (
        <Container>
            <Row>
                <Card bg="dark" text="light">
                    <Card.Body>
                        <Card.Img variant="top" className="w-100" src={movie.ImageURL}/>
                        <Card.Title className=" fw-bold mt-3">{movie.Title}</Card.Title>
                        <Card.Text className="fw-light">{movie.Description}</Card.Text>
                        <Card.Text className="fw-bolder mb-1">Genre: </Card.Text>
                        <Card.Text className="fw-light mt-1">{movie.Genre.Name} </Card.Text>
                        <Card.Text className="fw-bolder mb-1">Definition of Genre: </Card.Text>
                        <Card.Text className="fw-light mt-1">{movie.Genre.Description}</Card.Text>
                        <Card.Text className="fw-bolder mb-1">Director: </Card.Text>
                        <Card.Text className="fw-light mt-1">{movie.Director.Name}</Card.Text>
                        <Card.Text className="fw-bolder mb-1">IMDb Rating: </Card.Text>
                        <Card.Text className="fw-light mt-1">{movie.Rating}</Card.Text>
                        {/* <Button 
                            className="fav-btn"
                            size="sm"
                            variant="secondary"
                            onClick={addFavourite(movie._id)}
                            >
                            Add to Favourites
                        </Button> */}
                        <Link to={`/`}>
                            <Button className="back-button" variant="primary" size="sm">Back</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
 };
 
            
      
   