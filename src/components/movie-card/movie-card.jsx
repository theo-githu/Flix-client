import PropTypes from "prop-types";

export const MovieCard = ({movie, onMovieClick}) => {
    return ( <div
    onClick={() => {
        onMovieClick(movie);
    }}>
        {movie.title}</div>
    );
};

// MovieCard.propTypes = {
//     movie: PropTypes.shape({
//         Title: PropTypes.string.isRequired,
//         Description: PropTypes.string.isRequired,
//         ImageURL: PropTypes.string.isRequired,
//         Director: PropTypes.shape({
//             Bio: PropTypes.string.isRequired
//         })
//     }).isRequired,
//     onMovieClick: PropTypes.func.isRequired
// };

// MovieCard.propTypes = {
//     movie: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired
//     }).isRequired,
//     onMovieClick: PropTypes.func.isRequired
// };