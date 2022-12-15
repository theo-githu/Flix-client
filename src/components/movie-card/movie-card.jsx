import PropTypes from "prop-types";

export const MovieCard = ({movie, onMovieClick}) => {
    return ( <div
    onClick={() => {
        onMovieClick(movie);
    }}>
        {movie.title}</div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Genre: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,
        Director: PropTypes.shape({
            Description: PropTypes.string.isRequired
        })
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};