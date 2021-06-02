import './Row.css'
import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'


function Row({ title, url, isLarge }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url);
            setMovies(response.data.results);
            return response;
        }
        fetchData();
    }, [url])
    // console.log(movies);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            //https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const getTrailer = (obj) => {
        console.log(obj);
        if (trailerUrl) {
            setTrailerUrl("");
        }
        else {
            movieTrailer(obj?.original_name || obj?.original_title || obj?.title || obj?.name || "")
                .then((response) => {
                    // console.log(response);
                    if (response === null) {
                        alert('Trailer not found');
                    }
                    else {
                        const urlParams = new URLSearchParams(new URL(response).search);

                        //https://www.yoututbe.com/watch?v=XtMhy8QKqU
                        setTrailerUrl(urlParams.get('v'));
                        // console.log(urlParams.get('v'));
                    }
                })
                .catch((error) => console.log(error));
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map((obj) => (
                        <img onClick={() => getTrailer(obj)} className={`row__poster ${isLarge && "row__posterLarge"}`} key={obj.id} src={`${imageUrl}${isLarge ? obj.poster_path : obj.backdrop_path}`} alt={obj.name} />
                    ))
                }
            </div>
            {
                trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
            }
        </div>
    )
}

export default Row
