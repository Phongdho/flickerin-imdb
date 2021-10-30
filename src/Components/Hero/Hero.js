import React, { useEffect, useState } from "react";
import "./Hero.css";
import urlRequest from "../../FetchApi";

const truncateString = (string, limit) => {
    if (string?.length > limit) {
        return string.substring(0, limit) + "..."; //limit characters of movie overview
    } else {
        return string;
    }
};

const Hero = () => {
    const [randomMovie, setRandomMovie] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetch(urlRequest.getTrending);
            const result = await data.json();
            setRandomMovie(result.results[Math.floor(Math.random() * result.results.length - 1)]);
            }
        getData();
    }, []); //no dependencies
    return (
        <header 
            className="mast-head"
            style={{
                objectFit: "contain",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                height: "80vh"
            }}
        >
            <div className="mast-body">
                <h2 className="mast-title">
                    {randomMovie?.title || randomMovie?.original_title || randomMovie?.name}
                </h2>
                <span className="mass-button">
                    <button className="btn play-btn">Play this title</button>
                    <button className="btn info-btn">More Information</button>
                </span>
                <h5 className="mast-overview">
                    {truncateString(randomMovie?.overview, 150)}
                </h5>
            </div>
        </header>
    );
};

export default Hero;