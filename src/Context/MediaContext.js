import axios from "axios";
import { createContext, useEffect, useState } from "react";
    


export let MediaContext = createContext('');

 function MediaContextProvider(props) {
    const [trendingMovies , setTrendingMovies] = useState([])
    const [trendingTv , setTrendingTv] = useState([])
    const [trendingPeople , setTrendingPeople] = useState([])
  
  
    async function getTrinding(mediaType , callback) {
    let{data}= await axios(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=d3d0599a3811a92b3e7ed0e9d060904c`)
    callback(data.results);
  }
  useEffect(()=>{
    getTrinding('movie' ,setTrendingMovies)
    getTrinding('tv' ,setTrendingTv)
    getTrinding('person' ,setTrendingPeople)
  
  },[getTrinding]) 
    return <MediaContext.Provider value={{trendingMovies,trendingTv,trendingPeople}}>
            {props.children}
    </MediaContext.Provider>
}
export default MediaContextProvider;