import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { takeEvery, put } from 'redux-saga/effects';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios'
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_DETAILS', getDetails);
}

function* getMovies() {
    try {
        let response = yield axios.get('/api/movies');
        yield put({ type: 'SET_MOVIES', payload: response.data })
    }
    catch (error) {
        console.log('Error in getMovies', error);
    }
}

function* getDetails(action) {
    // console.log('clicked getDetails', action);
    try {
        let response = yield axios.get(`/api/details/${action.payload}`);
        yield put({ type: 'SET_DETAILS', payload: response.data[0] })

        let genres = yield axios.get(`/api/genres/${action.payload}`);
        yield put({ type: 'SET_GENRES', payload: genres.data[0] })
    }
    catch (error) {
        console.log('Error in getDetails', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server


const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const details = (state = 0, action) => {
    // console.log('in details', action.payload);
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}
//reducer to update description
//**LIKELY DO NOT NEED THIS**
// const updateDescription = (state = {}, action) => {
//     switch (action.type) {
//         case 'SET_NEW_DESCRIPTION':
//             return {
//                 ...state,
//                 description : action.payload
//             }
//         default:
//             return state;
//     }
// }


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
