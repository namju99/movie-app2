import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IMG_BASE_URL } from '../components/Movie';

export default function MovieDetail() {
    const {title} = useParams();
    const {state} = useLocation();
    console.log(title);
    console.log(state);
  return (
    <div style={{display:'flex'}} className='page-container' 
    >
        <img style={{width:'300px', height:'450px'}} src={IMG_BASE_URL+state.poster_path} alt="포스터" />

        <div style={{fontSize:'32px'}}>{title}</div>
    </div>

  )
}
