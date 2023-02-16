import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {

        }
    }
});

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {

        }
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer,
    }
});

const startingState = store.getState();
console.log(JSON.stringify(startingState));

store.dispatch({
    type: 'song/addSong',
    payload: 'New Song!!!'
});

store.dispatch({
    type: 'movie/addMovie',
    payload: 'And a new Movie'
});

const finalState = store.getState();
console.log(JSON.stringify(finalState));