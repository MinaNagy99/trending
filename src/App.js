import { createHashRouter, RouterProvider  } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import People from './People/People';
import Error from './Error/Error';

import TvShow from './TvShow/TvShow';
import Register from './Register/Register';
import Login from './Login/Login';
import { useEffect, useState } from 'react';
import Profile from './Profile/Profile';
import About from './About/About';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import ItemDetails from './ItemDetails/ItemDetails';
import MediaContextProvider from './Context/MediaContext';
import {Offline} from 'react-detect-offline'

function App() {
  useEffect(()=>{
    if(localStorage.getItem('userToken') !== null)
    {
      saveUserData();
    }
  },[])



  const [userData , setUserData] = useState(null)
  function saveUserData() {
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  }




  let routers= createHashRouter([
    {path : '/' , element : <Layout userData={userData} setUserData={setUserData}/>  ,children:[
      {index:true , element : <ProtectedRoute><Home/></ProtectedRoute> },
      {path : 'movies' , element : <ProtectedRoute><Movies/></ProtectedRoute>},
      {path : 'people' , element : <ProtectedRoute><People/></ProtectedRoute>},
      {path : 'about' , element : <ProtectedRoute><About/></ProtectedRoute>},
      {path : 'Get-Trending' , element : <ProtectedRoute><Home/></ProtectedRoute>},

      {path : 'profile' , element : <ProtectedRoute><Profile userData={userData}/></ProtectedRoute>},
      {path : 'itemdetails/:id/:media_type' , element : <ProtectedRoute><ItemDetails/></ProtectedRoute>},

      {path : 'tvshow' , element : <ProtectedRoute><TvShow/></ProtectedRoute>},

      { path:'register' , element : <Register/>},
      {path : 'login' , element : <Login saveUserData={saveUserData}/>},
      { path:'*' , element : <Error/>},


    ]}
  ])
  return <>
   <div>
    <Offline><div className='offline'>you are offline </div></Offline>
  </div>
  <MediaContextProvider>

<RouterProvider  router={routers}/>

  </MediaContextProvider>
 </>
  
}

export default App;
