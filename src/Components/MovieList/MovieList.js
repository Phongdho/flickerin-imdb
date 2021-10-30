import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const MovieSlide = ({ trending, tvShows, actionMovies, dramaMovies, animationMovies, setMovieClicked }) => {

    const handleMovieClick = (element) => {
        setMovieClicked(element);
    };
    return (
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        {trending && trending.results.map((item) => {
            return (
                <SwiperSlide onClick={() => {handleMovieClick(item);}} key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`} alt="Show Poster" className="show-poster"></img>
                    <h5 className="show-name">{item?.title || item?.original_title || item?.name}</h5>
                </SwiperSlide>
            );
        })}
        {tvShows && tvShows.results.map((item) => {
            return (
                <SwiperSlide onClick={() => {handleMovieClick(item);}} key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`} alt="Show Poster" className="show-poster"></img>
                    <h5 className="show-name">{item?.title || item?.original_title || item?.name}</h5>
                </SwiperSlide>
            );
        })}
        {actionMovies && actionMovies.results.map((item) => {
            return (
                <SwiperSlide onClick={() => {handleMovieClick(item);}} key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`} alt="Show Poster" className="show-poster"></img>
                    <h5 className="show-name">{item?.title || item?.original_title || item?.name}</h5>
                </SwiperSlide>
            );
        })};
        {dramaMovies && dramaMovies.results.map((item) => {
            return (
                <SwiperSlide onClick={() => {handleMovieClick(item);}} key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`} alt="Show Poster" className="show-poster"></img>
                    <h5 className="show-name">{item?.title || item?.original_title || item?.name}</h5>
                </SwiperSlide>
            );
        })}
        {animationMovies && animationMovies.results.map((item) => {
            return (
                <SwiperSlide onClick={() => {handleMovieClick(item);}} key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`} alt="Show Poster" className="show-poster"></img>
                    <h5 className="show-name">{item?.title || item?.original_title || item?.name}</h5>
                </SwiperSlide>
            );
        })}
    </Swiper>
  );
};

const MovieList = ({ trending, tvShows, actionMovies, dramaMovies, animationMovies, setMovieClicked }) => {
    return (
        <div className="MovieList">
            <h1 id={"trending"}>What's trending</h1>
            <MovieSlide key={"trending"} trending={trending} setMovieClicked={setMovieClicked} />
            <br />
            <h1 id={"tv"}>TV Shows</h1>
            <MovieSlide key={"tv"} tvShows={tvShows} setMovieClicked={setMovieClicked} />
            <br />
            <h1 id={"actions"}>Action</h1>
            <MovieSlide key={"actions"} actionMovies={actionMovies} setMovieClicked={setMovieClicked} />
            <br />
            <h1 id={"drama"}>Drama</h1>
            <MovieSlide key={"drama"} dramaMovies={dramaMovies} setMovieClicked={setMovieClicked} />
            <br />
            <h1 id={"animation"}>Animations</h1>
            <MovieSlide key={"animation"} animationMovies={animationMovies} setMovieClicked={setMovieClicked} />
            <br />
        </div>
    );
};

export default MovieList;
