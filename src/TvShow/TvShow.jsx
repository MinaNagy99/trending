import React, { useContext } from 'react'
import { MediaContext } from '../Context/MediaContext'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import MediaItem from '../MediaItem/MediaItem'

export default function People() {
  let{trendingTv}= useContext(MediaContext);
  
  return <>
      {/* <Helmet>
                <meta charSet="utf-8" />
                <title>TV Show</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet> */}
   <div className="row py-5 ">
    <div className="col-md-4  d-flex justify-content-center flex-column">
      <div className="brd w-25 mb-3"></div>
      <h2 className='h4'>Trending Tv Show <br />To Watch Right Now</h2>
      <p className='py-2 text-muted'>Watched Tv Show To Watch Right Now</p>
      <div className="brd w-100 mt-3"></div>

    </div> 
    {trendingTv.map((item , index)=> <MediaItem key={index} item={item}/>)}


 
  </div>
  </>
}