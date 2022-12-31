




import React, { useContext } from 'react'
import { MediaContext } from '../Context/MediaContext'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';
export default function TvShow() {
  let{trendingPeople}= useContext(MediaContext);
  
  return <>
      {/* <Helmet>
                <meta charSet="utf-8" />
                <title>People</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet> */}
   <div className="row py-5 ">
    <div className="col-md-4  d-flex justify-content-center flex-column">
      <div className="brd w-25 mb-3"></div>
      <h2 className='h4'>Trending People <br />To Watch Right Now</h2>
      <p className='py-2 text-muted'>Watched People To Watch Right Now</p>
      <div className="brd w-100 mt-3"></div>

    </div> 
    {trendingPeople.filter((person)=>person.profile_path !==null ).map((item , index)=>
          <div key={index} className="col-md-2">
          <Link to={`/itemdetails/${item.id}/${item.media_type}`}>
        <div className="movie position-relative">
     {item.poster_path?      <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+item.poster_path}  alt="" />:      <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+item.profile_path}  alt="" />}
            <h3 className='h6 py-2'>{item.title} {item.name}</h3>
              {item.vote_average?        <div className="vote p-2 text-white">{item.vote_average?.toFixed(1)}</div>:''}
        </div>
      </Link>
      </div>

    
    )}

 
  </div>
  </>
}
