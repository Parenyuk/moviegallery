import React, {useEffect} from 'react';
import './App.css';
import {FavoriteList} from './components/favoriteList/FavoriteList';
import {useDispatch, useSelector} from 'react-redux';
import {setMoviesTC} from './redux/moviePageReducer';
import {Movie} from './components/movie/Movie';
import  './App.css';
import Header from './components/header/Header';
import {Favorite} from './components/Favorite';


function App() {

    const dispatch = useDispatch();

    const movies = useSelector(state => state.moviePage.moviesArray);

    // const moviesArray = movies?.map((movie, i) => {
    //     return (
    //         <div key={movie.id}>
    //             <Movie movie={movie} />
    //             <Favorite/>
    //         </div>
    //
    //     )
    // })

    const moviesArray = movies?.map((movie, i) => {
        return {
            ...movie, star: false
        }
    })

    useEffect(() => {
        dispatch(setMoviesTC())
    }, [])


    return (
        <div className={'app'}>
            <Header/>
            <div className={'mainBlock'} >
                <div className={'moviesArray'} >
                    {moviesArray}
                </div>
                <div className={'favoriteList'}>
                    <FavoriteList/>
                </div>
            </div>
        </div>
    );
}

export default App;
