import React from 'react'
import { Link } from 'react-router-dom'
export default function MediaItem({item , type}) {
  return<>

 <div className="col-md-2">
  {!item.media_type?     
    <div className="movie position-relative">
 {item.poster_path?      <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+item.poster_path}  alt="" />:      <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+item.profile_path}  alt="" />}
        <h3 className='h6 py-2'>{item.title} {item.name}</h3>
          {item.vote_average?        <div className="vote p-2 text-white">{item.vote_average?.toFixed(1)}</div>:''}
    </div>
  :    <Link to={`/ItemDetails/${item.id}/${item.media_type}`}>
    <div className="movie position-relative">
 {item.poster_path?      <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+item.poster_path}  alt="" />:      <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+item.profile_path}  alt="" />}
        <h3 className='h6 py-2'>{item.title} {item.name}</h3>
          {item.vote_average?        <div className="vote p-2 text-white">{item.vote_average?.toFixed(1)}</div>:''}
    </div>
  </Link>}
  
  </div>
   


  
  
  </>
}
