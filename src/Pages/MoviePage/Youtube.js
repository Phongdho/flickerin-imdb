import React from 'react'
import "./MoviePage.css";
import { useState, useEffect } from 'react';

const Youtube = ({ movieDetail }) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [movieTrailer, setMovieTrailer] = useState("");

    useEffect(() => {
        const fetchYoutubeId = async () => {
            const id = movieDetail.id
            if (movieTrailer !== undefined) {
                const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
                const resp = await fetch(url);
                const json = await resp.json()
                setMovieTrailer(json)
            };
        }
        fetchYoutubeId()
    })

    return (
        <div style={{ width: '853'}}>
            {
                movieTrailer.results !== undefined && <iframe
                    src={`https://www.youtube.com/embed/${movieTrailer.results[0].key}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    className="video__btn"
                />
            }
        </div>
    )
}

export default Youtube