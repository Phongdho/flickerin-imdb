import React from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "./MovieList.css";
import 'swiper/swiper-bundle.min.css';
import { useHistory } from 'react-router-dom';

const MovieList = ({ trending, tvShows, actionMovies, dramaMovies, animationMovies, setMovieClicked }) => {
    const history = useHistory();
    const handleMovieClick = (element) => {
        setMovieClicked(element);
        history.push(`/movie/${element.id}`);
    };

    return (
        <div className="MovieList">
            <h1 id="trending" className="section-title" style={{marginTop:"2rem"}}>What's trending</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                slidesPerGroup={5}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    "clickable": true
                  }}
                navigation={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {trending && trending.map((item) => {
                    return (
                        <SwiperSlide onClick={() => { handleMovieClick(item); }} key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/original${item?.poster_path}`} alt="Show Poster" className="show-poster"></img>
                        </SwiperSlide>
                    );
                })}
            </Swiper >
            <br />
            <h1 id="tv" className="section-title">Adventure</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                slidesPerGroup={5}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    "clickable": true
                  }}
                navigation={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {tvShows && tvShows.map((item) => {
                    return (
                        <SwiperSlide onClick={() => { handleMovieClick(item); }} key={item.id}>
                            <img src={`https:image.tmdb.org/t/p/original${item?.poster_path}`} alt="Show Poster" className="show-poster"></img>
                        </SwiperSlide>
                    );
                })}
            </Swiper >
            <br />
            <h1 id="actions" className="section-title">Action</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                slidesPerGroup={5}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    "clickable": true
                  }}
                navigation={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {actionMovies && actionMovies.map((item) => {
                    return (
                        <SwiperSlide onClick={() => { handleMovieClick(item); }} key={item.id}>
                            <img src={`https:image.tmdb.org/t/p/original${item?.poster_path}`} alt="Show Poster" className="show-poster"></img>
                        </SwiperSlide>
                    );
                })}
            </Swiper >
            <br />
            <h1 id="drama" className="section-title">Drama</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                slidesPerGroup={5}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    "clickable": true
                  }}
                navigation={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {dramaMovies && dramaMovies.map((item) => {
                    return (
                        <SwiperSlide onClick={() => { handleMovieClick(item); }} key={item.id}>
                            <img src={`https:image.tmdb.org/t/p/original${item?.poster_path}`} alt="Show Poster" className="show-poster"></img>
                        </SwiperSlide>
                    );
                })}
            </Swiper >
            <br />
            <h1 id="animation" className="section-title">Animations</h1>
            <Swiper
                style={{marginBottom: "2rem"}}
                spaceBetween={10}
                slidesPerView={5}
                slidesPerGroup={5}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    "clickable": true
                  }}
                navigation={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {animationMovies && animationMovies.map((item) => {
                    return (
                        <SwiperSlide onClick={() => { handleMovieClick(item); }} key={item.id}>
                            <img src={`https:image.tmdb.org/t/p/original${item?.poster_path}`} alt="Show Poster" className="show-poster"></img>
                        </SwiperSlide>
                    );
                })}
            </Swiper >
            <br />
        </div>
    );
};
SwiperCore.use([Navigation, Pagination, A11y]);
export default MovieList;
