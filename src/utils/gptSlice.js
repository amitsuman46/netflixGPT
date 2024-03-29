import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null,
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = ! state.showGptSearch;
        },
        addGptMovieResults: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames;
        },
        clearGptStore: (state) => {
            state.movieResults = null;
            state.movieNames = null;
        }
    }
});

export const {toggleGptSearchView, addGptMovieResults,clearGptStore} = gptSlice.actions;
export default gptSlice.reducer;