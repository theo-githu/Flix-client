
import React from 'react'; 

import {UpdateUser} from './update-user';
import {FavouriteMovies} from './favourite-movies';
import {UserInfo} from './user-info';
import {DeleteUser} from './delete-user';

export const ProfileView = ({ movies }) => {
    const storedToken = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));

    return (
        <>
        <UserInfo user={storedUser} />
        <UpdateUser storedToken={storedToken} storedUser={storedUser} />
        <DeleteUser storedToken={storedToken} storedUser={storedUser} />
        <FavouriteMovies movies={movies} storedUser={storedUser} />
        </>
    );
};
