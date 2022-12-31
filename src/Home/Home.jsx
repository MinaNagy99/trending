import { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { MediaContext } from '../Context/MediaContext'
import MediaItem from '../MediaItem/MediaItem'

           

export default function Home() {
  let{trendingMovies,trendingTv,trendingPeople}= useContext(MediaContext)
  return <>
      {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet> */}
  <div className="row py-5 ">
    <div className="col-md-4  d-flex justify-content-center flex-column">
      <div className="brd w-25 mb-3"></div>
      <h2 className='h4'>Trending Movies <br />To Watch Right Now</h2>
      <p className='py-2 text-muted'>Watched Movies To Watch Right Now</p>
      <div className="brd w-100 mt-3"></div>

    </div> 
    {trendingMovies.filter((item)=>item.poster_path!==null).slice(0,10).map((item , index)=> <MediaItem key={index} item={item}/>)}
   
  </div>
  <div className="row py-5 ">
    <div className="col-md-4  d-flex justify-content-center flex-column">
      <div className="brd w-25 mb-3"></div>
      <h2 className='h4'>Trending Tv <br />To Watch Right Now</h2>
      <p className='py-2 text-muted'>Watched Tv To Watch Right Now</p>
      <div className="brd w-100 mt-3"></div>

    </div> 
    {trendingTv.slice(0,10).map((item , index)=> <MediaItem key={index} item={item}/>)}
   
  </div>
 
  <div className="row py-5 ">
    <div className="col-md-4  d-flex justify-content-center flex-column">
      <div className="brd w-25 mb-3"></div>
      <h2 className='h4'>Trending People <br />To Watch Right Now</h2>
      <p className='py-2 text-muted'>Watched People To Watch Right Now</p>
      <div className="brd w-100 mt-3"></div>

    </div> 
    {trendingPeople.filter((person)=>person.profile_path !==null ).map((item , index)=> <MediaItem key={index} item={item}/>)}
   
  </div>

  
  </>
}
