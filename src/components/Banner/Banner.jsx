import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from 'axios'
import api from '../../api/api'

const base_url = "https://image.tmdb.org/t/p/original"

const Banner = ({fetchUrl}) => {
    const [movie, setMovie] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(fetchUrl);

        setMovie(
            response.data.results[
                Math.floor(Math.random() * response.data.results.length)
            ]
        );
    };

    fetchData();
}, [fetchUrl]);
    const truncate = (str ,n )=>{
        return str?.length > n ? str.substr(0, n-1) + "..." : str
    }
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        // backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center"
    }}>
       <div className='banner-contents'>
        <h1 className='banner-title'>
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner-buttone'>
            <button className='banner-button'>Play</button>
            <button className='banner-button'>My List</button>
        </div>
        <h1 className='banner-description'>{truncate(movie?.overview, 150)}</h1>
        </div> 
        <div className='banner-fadeBottom'></div> 
    </header>
  )
}

export default Banner
