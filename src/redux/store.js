import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import {moviePageReducer} from './moviePageReducer';


const rootReducer = combineReducers({
    moviePage: moviePageReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));


// const persistedState = loadState();
// export const store = createStore(
//     rootReducer, persistedState, applyMiddleware(thunk)
// );
// store.subscribe(() => {
//     saveState({
//         moviePage: store.getState().moviePage
//     });
// }); // add Local Storage to project
