import React from 'react';
import star from './../../assets/images/star.svg';
import './FavoriteList.css'


export const FavoriteList = () => {
    return (
        <div>
            <div className={'favoriteList'}>
                <div className={'star'} >
                    <img src={star} width={'60px'} height={'60px'} />
                </div>
                <h2 className={'header'}>
                    Favorite List
                </h2>
            </div>

        </div>
    );
};

