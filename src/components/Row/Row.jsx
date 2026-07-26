import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from 'axios'


import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original"


const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] =  useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await axios.get(fetchUrl)
            setMovies(response.data.results)
           
        };
       
        fetchData()
    },[fetchUrl])
    console.log("Movies" , movies)

    
const handleClick = (movie) => {
    if (trailerUrl) {
        setTrailerUrl("");
        return;
    }

    movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
            if (!url) return;

            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
};
    
 return (
    <div className="row">
        <h2>{title}</h2>

        <div className="row-posters">
            {movies.map((movie) => (
                <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row-poster ${isLargeRow ? "row-posterLarge" : ""}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name || movie.title}
                />
            ))}
        </div>

        {trailerUrl && (
            <YouTube
                videoId={trailerUrl}
                opts={{
                    height: "390",
                    width: "100%",
                    playerVars: {
                        autoplay: 1,
                    },
                }}
            />
        )}
    </div>
);
}

export default Row
