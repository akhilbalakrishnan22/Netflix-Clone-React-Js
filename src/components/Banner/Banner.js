import './Banner.css'
import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'
import { trending } from '../../urls'

function Banner() {
    // Decalaring state movie and default value is an empty array.
    const [movie, setMovie] = useState([]);

    // Runs code after React has updated the DOM.
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(trending);
            // console.log(response.data.results);
            setMovie(response.data.results[
                Math.floor(Math.random() * response.data.results.length - 1)
            ]);
        }
        fetchData();
    }, [])
    // console.log(movie);

    // This function reduces the description text if its length greater than "n" and puts "..." in the last.
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + " . . ." : str;
    }
    return (
        <header className="banner" style={{
            backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner__fadeBottom"></div>
        </header >
    )
}

export default Banner
