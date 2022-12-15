export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
           <div>
                <img src={movie.imageURL} />
            </div>
            <div>
                <span>Title:</span>
                <span>{movie.title}</span>
            </div>
            <div>
                <span>Description:</span>
                <span>{movie.description}</span>
            </div>
            <div>
                <span>Director:</span>
                <span>{director.name}</span>
            </div>
            <div>
                <span>Genre:</span>
                <span>{genre.name}</span>
            </div>
            <div>
                <span>Rating:</span>
                <span>{movie.rating}</span>
            </div>
          <button onClick={onBackClick}>Back</button>
        </div>
      );
    };