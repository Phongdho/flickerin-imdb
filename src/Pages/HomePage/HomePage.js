import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import Hero from '../../Components/Hero/Hero';
import MovieList from '../../Components/MovieList/MovieList';
import NavBar from '../../Components/NavBar/NavBar';
import urlRequest from '../../FetchApi';
import "./HomePage.css";

const HomePage = () => {
    const [trending, setTrending] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [dramaMovies, setDramaMovies] = useState([]);
    const [animationMovies, setAnimationMovies] = useState([]);
    const [movieClicked, setMovieClicked] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data1 = await fetch(urlRequest.getTrending);
            const movieList1 = await data1.json();
            setTrending(movieList1.results);

            const data2 = await fetch(urlRequest.getTV);
            const movieList2 = await data2.json();
            setTvShows(movieList2.results);

            const data3 = await fetch(urlRequest.getActions);
            const movieList3 = await data3.json();
            setActionMovies(movieList3.results);

            const data4 = await fetch(urlRequest.getDrama);
            const movieList4 = await data4.json();
            setDramaMovies(movieList4.results);

            const data5 = await fetch(urlRequest.getAnimation);
            const movieList5 = await data5.json();
            setAnimationMovies(movieList5.results);
        };
        getData();
    }, []);

    return (
        <div className="HomePage">
            <NavBar />
            <Hero />
            <MovieList 
                trending={trending}
                tvShows={tvShows} 
                actionMovies={actionMovies} 
                dramaMovies={dramaMovies}
                animationMovies={animationMovies}
                setMovieClicked={setMovieClicked}
            />
        </div> 
    );
};

export default HomePage;
