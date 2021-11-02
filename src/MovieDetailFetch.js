import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetailFetch = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const resp = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      const json = await resp.json();
      setMovieDetail(json);
    };
    fetchMovieDetail();
  }, [id]);
};

export default MovieDetailFetch;
