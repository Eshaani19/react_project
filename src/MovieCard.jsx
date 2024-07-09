import react from 'react';

//so that we dont have to props everytime, we can use destructuring objects/props
//we put in curly braces and get the smthn passed inside it



const MovieCard = ({ movie }) => {
    return (
        <div className='movie' >
            <div>
                <p>
                    {movie.Year}
                </p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt = {movie.Title} />
            </div>
            <div>
                <span>
                    {movie.Type}
                    <h3> {movie.Title} </h3>
                </span>
            </div>
        </div>
    );
}

export default MovieCard;