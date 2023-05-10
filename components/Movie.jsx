import React from 'react';
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL= `https://image.tmdb.org/t/p/w1280/`;
/*{title, poster_path, vote_average}*/
export default function Movie(props) {
    const navigate = useNavigate();

    const onclickMovieItem = () =>{
        navigate(`/movies/${props.title}`,
        {state:props});
    }
    return(
        <div className='movie-container' onClick={onclickMovieItem}>
            <img src={IMG_BASE_URL+props.poster_path} alt='영화포스터' />
            <div className='movie-info'>
                <h4>{props.title}</h4>
                <span>{props.vote_average}</span>

            </div>
        </div>
    )
}