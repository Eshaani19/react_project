import {useEffect, useState} from 'react';

import MovieCard from "./MovieCard";
//c8c2e12f

import SearchIcon from "./search.svg";
import './App.css';

//we r using an api to get movie data
const API_URL = 'http://www.omdbapi.com?apikey=c8c2e12f'

const movie1 = {
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    //we pass empty string here bc search is initially empty 

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        //we do .search because we need only the array of movies and thats how the data is stored
        setMovies(data.Search);
    }

    useEffect(() => {
        //we call the function that will fetch our movies
        searchMovies('Spiderman');
    }, [] );

    {/*self closing tag that has to have some properties */}
    return (
        <div className = 'App'>
             <h1> MovieLand </h1>
        <div className='search' >
            <input 
                placeholder = 'Search for movies'
                value = {searchTerm}    //its a static string
                //to change it: i.e allow input
                onChange = {(e) => setSearchTerm(e.target.value)}

            />
            <img 
                src = {SearchIcon}
                alt = "search"
                onClick = {() => searchMovies(searchTerm)}
            />
        </div>
        {
            movies?.length > 0
            ? (
                <div className = "Container" >
                    {/*<MovieCard movie1={movie1} /> */}
                    {/* to show more movies instead of just 1 */}
                    {movies.map((movie) => (
                        <MovieCard movie = {movie} />
                    ))}
                </div>
            ) : (
                <div className = "empty" >
                    <h2> no movies found </h2>
                </div>
            )
        }
        </div>
    );
}

// we have to export all our components to call it from other places.
export default App;  // here we are importing into index.js
