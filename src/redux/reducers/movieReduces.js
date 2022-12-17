import { ALLMOVIES } from "../types/movieTypes";

const initState = { movies: [], pageCount: 0 };

export const movieReducers = (state = initState, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return { movies: action.data , pageCount:action.pages };
    default:
      return state;
  }
};

