import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom'
import GetSimilar from '../GetSimilar/GetSimilar';

export default function ItemDetails() {
  const [itemDetails, setItemDetails] = useState([])
  let { id, media_type} = useParams();


  async function getItemDetails(id, media_type) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=d3d0599a3811a92b3e7ed0e9d060904c`)
    setItemDetails(data);



  }
  useEffect(() => {
    getItemDetails(id, media_type)
  }, [])


  return <>

    {/* <Helmet>
      <meta charSet="utf-8" />
      <title>{itemDetails.title}</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet> */}
    <div className="row mt-5">
      <div className="col-md-3 ">
        
        {itemDetails.poster_path ? <img className='w-100' src={`https://image.tmdb.org/t/p/w500/` + itemDetails.poster_path} alt="" /> : <img className='w-100' src={`https://image.tmdb.org/t/p/w500/` + itemDetails.profile_path} alt="" />}
      </div>
      {itemDetails.vote_average ? <div className="col-md-9 p-5">
        <h2 className='mb-5 fw-bolder  border-danger'>{itemDetails.title}{itemDetails.name}</h2>

        <p className='text-muted tagline'>{itemDetails.tagline}</p>
        <div className="genr d-flex my-5">
        {itemDetails.genres.map((gen,index)=>
        <p key={index} className='gen'>{gen.name}</p>)}
        </div>
        <p>vote Count :{itemDetails.vote_count} </p>
        <p>popularity : {itemDetails.popularity}</p>
        <p>release Date : {itemDetails.release_date}</p>
        <p className='text-muted py-5'>{itemDetails.overview}</p>
      </div> :
        <div className="col-md-9">
          <p className='h3'>Name : <span className='text-info'> {itemDetails.name}</span></p>
          {itemDetails.biography?          <p className='text-muted mt-5'> <span className='text-white fs-5'>biography :</span> {itemDetails.biography}</p>
:''}
          <p className='my-5'>birthday : <span className='text-muted '>{itemDetails.birthday}</span></p>
          <p className='my-5'>popularity : <span className='text-muted '>{itemDetails.popularity}</span></p>
          <p className='my-5'>place_of_birth
            : <span className='text-muted '>{itemDetails.place_of_birth
            }</span></p>


        </div>




      }


    </div>
    {!itemDetails.profile_path?    <GetSimilar id={id} media_type={media_type}/>
:''}
  </>
}
