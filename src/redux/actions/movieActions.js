import axios from "axios";
import { ALLMOVIES, MovieApi } from "../types/movieTypes";

export const getAllMovie = () => {
  return async (dispatch) => {
    const response = await axios.get(MovieApi);
    dispatch({
      type: ALLMOVIES,
      data: response.data.results,
      pages: response.data.total_pages,
    });
  };
};

export const searchMovie = (word) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=b0d3631a60b6a0e15c08a794f144dda5&language=en-US&query=${word}`
    );
    dispatch({
      type: ALLMOVIES,
      data: response.data.results,
      pages: response.data.total_pages,
    });
  };
};
export const getPages = (page) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=b0d3631a60b6a0e15c08a794f144dda5&language=en-US&page=${page}`
    );
    dispatch({
      type: ALLMOVIES,
      data: response.data.results,
      pages: response.data.total_pages,
    });
  };
};
