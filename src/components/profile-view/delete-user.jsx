
import React, {useEffect, useState} from "react";
import { Row, Col, Button } from "react-bootstrap";

export const DeleteUser = ({ storedToken, storedUser }) => {
    const handleDeregister = () => {
        const userWarning = confirm (`Please be aware that once your account is deleted, all information will be lost. Do you wish to continue?`);

        userWarning === false 
        ? alert('Part of the ship, part of the crew!')
        : fetch (`https://myflix-api-1234.herokuapp.com/users/${storedUser.Username}`, {
            method: 'DELETE',
            headers: { 
                Authorization: `Bearer ${storedToken}`,
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (response.ok) {
                alert('User profile successfully deleted.');
                localStorage.clear();
                window.location.reload();
            } else {
                alert('Something went wrong! Please try again.');
            }
        })    
        .catch((e) => console.log(e));
    };

    return (
        <Col>
            <div>
                <Button 
                onClick={() => handleDeregister(storedUser._id)}
                className = 'button-delete mt-3'
                type = 'submit'
                variant = 'danger'
                >
                    Delete Profile
                </Button>
            </div>
        </Col>
    );
};


