import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem'

import { Link } from 'react-router-dom'
export default function GetSimilar({id ,media_type}) {
  const[itemSimilar , setItemSimilar] = useState([])
  async function getSimmilar(id, media_type) {
    let{data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=d3d0599a3811a92b3e7ed0e9d060904c`)
    setItemSimilar(data.results)
  }
  useEffect(()=>{

    getSimmilar(id,media_type)

  },[getSimmilar])
  return<>
<div className="row">
{itemSimilar.map((item , index)=> <MediaItem key={index} item={item}/>)}
{/* {console.log(itemSimilar)} */}
</div>

</>
}


