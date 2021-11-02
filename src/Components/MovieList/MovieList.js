import React from "react";
import { useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Modal } from "react-bootstrap";
import "./MovieList.css";
import "swiper/swiper-bundle.min.css";
import DetailModal from "../DetailModal/DetailModal";

import { useHistory } from "react-router-dom";

const MovieList = ({
  trending,
  tvShows,
  actionMovies,
  dramaMovies,
  animationMovies,
  setMovieClicked,
}) => {
  const history = useHistory();
  //   const handleMovieClick = (element) => {
  //     setMovieClicked(element);
  //     history.push(`/movie/${element.id}`);
  //   };

  const [show, setShow] = useState(false);
  const [modalId, setModalId] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    console.log("show call", event.target.id);
    setModalId(event.target.id);
    setShow(true);
  };

  return (
    <div className="MovieList">
      <Modal show={show} closeButton>
        <DetailModal handleClose={handleClose} id={modalId} />
      </Modal>
      <h1 id="trending" className="section-title">
        What's trending
      </h1>

      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {trending &&
          trending.map((item) => {
            return (
              <SwiperSlide
                variant="primary"

                //   onClick={handleShow}
              >
                <img
                  key={item.id}
                  onClick={handleShow}
                  id={item.id}
                  src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                  alt="Show Poster"
                  className="show-poster"
                ></img>
              </SwiperSlide>
            );
          })}
      </Swiper>

      <br />
      <h1 id="tv" className="section-title">
        TV Shows
      </h1>

      {/* <Swiper
        spaceBetween={10}
        slidesPerView={5}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {tvShows &&
          tvShows.map((item) => {
            return (
              <SwiperSlide
                onClick={() => {
                  handleMovieClick(item);
                }}
                key={item.id}
              >
                <img
                  src={`https:image.tmdb.org/t/p/original${item?.poster_path}`}
                  alt="Show Poster"
                  className="show-poster"
                ></img>
              </SwiperSlide>
            );
          })}
      </Swiper>
       */}
      <br />
      <h1 id="actions" className="section-title">
        Action
      </h1>
      {/* 
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {actionMovies &&
          actionMovies.map((item) => {
            return (
              <SwiperSlide
                onClick={() => {
                  handleMovieClick(item);
                }}
                key={item.id}
              >
                <img
                  src={`https:image.tmdb.org/t/p/original${item?.poster_path}`}
                  alt="Show Poster"
                  className="show-poster"
                ></img>
              </SwiperSlide>
            );
          })}
      </Swiper> */}

      <br />
      <h1 id="drama" className="section-title">
        Drama
      </h1>
      {/* 
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {dramaMovies &&
          dramaMovies.map((item) => {
            return (
              <SwiperSlide
                onClick={() => {
                  handleMovieClick(item);
                }}
                key={item.id}
              >
                <img
                  src={`https:image.tmdb.org/t/p/original${item?.poster_path}`}
                  alt="Show Poster"
                  className="show-poster"
                ></img>
              </SwiperSlide>
            );
          })}
      </Swiper>

       */}
      <br />
      <h1 id="animation" className="section-title">
        Animations
      </h1>
      {/* 
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {animationMovies &&
          animationMovies.map((item) => {
            return (
              <SwiperSlide
                onClick={() => {
                  handleMovieClick(item);
                }}
                key={item.id}
              >
                <img
                  src={`https:image.tmdb.org/t/p/original${item?.poster_path}`}
                  alt="Show Poster"
                  className="show-poster"
                ></img>
              </SwiperSlide>
            );
          })}
      </Swiper>

       */}
      <br />
    </div>
  );
};
SwiperCore.use([Navigation, Pagination, A11y]);
export default MovieList;
