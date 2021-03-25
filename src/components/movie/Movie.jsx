import React from 'react';
import './Movie.css'

export const Movie = ({movie}) => {

    return (
        <div className={'movie'}>
            {<div>
                <img src={movie.img} width={'200px'} height={'200px'}/>
            </div>
            }
            {movie.name}
            {movie.year}
        </div>
    );
};

