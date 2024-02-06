import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  //fetch data from tmdb data and update store from the below customHook
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
        MainContainer
          - VideoBackground
          - VideoTitle
        Secondary Container
          - MovieList * n
            -cards *n
      */}

    </div>
  );
};

export default Browse;
