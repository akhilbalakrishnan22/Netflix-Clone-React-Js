import './Row.css'
import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants';


function Row({ title, url, isLarge }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url);
            setMovies(response.data.results);
            return response;
        }
        fetchData();
    }, [url])
    // console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map((obj) => (
                        <img className={`row__poster ${isLarge && "row__posterLarge"}`} key={obj.id} src={`${imageUrl}${isLarge ? obj.poster_path : obj.backdrop_path}`} alt={obj.name} />
                    ))
                }
            </div>
        </div>
    )
}

export default Row
