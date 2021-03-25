import {movieGalleryApi} from '../api/api';

export const SET_MOVIES_ARRAY = 'MOVIE_PAGE_REDUCER/SET_MOVIES_ARRAY';



const initialState = {
   moviesArray: [],

}

const newState = initialState.moviesArray?.map(item => {
    return {...item, star: false}
})



export const moviePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES_ARRAY: {
            return {...state, moviesArray:  action.moviesArray}
        }

        default:
            return state

    }
}


export const actions ={
    setMoviesArray: (moviesArray) => {
        return ({type: SET_MOVIES_ARRAY, moviesArray })
    },


}

//thunk

export const setMoviesTC = () => async (dispatch ) => {
    let result = await movieGalleryApi.setMovies()
    try {
        console.log(result.data)
        dispatch(actions.setMoviesArray(result.data))
    }
    catch (e) {

    }
}
