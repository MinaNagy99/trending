import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login({saveUserData}) {
console.log(saveUserData)
  const navigate = useNavigate()
  const [user , setuser] = useState({

  email:'',
  password:''

  })
  const [error , setError] = useState('');
  const [errorList , setErrorList] = useState([])
  const [isLoading , setISLoading] = useState(false)
  function getUserData(eventinfo) {
    let myUser = {...user};
    myUser[eventinfo.target.name] = eventinfo.target.value;
    

    setuser(myUser);

    
  }

  async function sedDataToApi() {
    let{data} = await  axios.post('https://route-movies-api.vercel.app/signin' , user);
    if (data.message == 'success') {
      setISLoading(false)
      localStorage.setItem('userToken' , data.token)
      saveUserData()
      navigate('/')
      
    }
    else{
      setISLoading(false)
      setError(data.message)

    }


  }

  function submit(e) {
    setISLoading(true)
    e.preventDefault();
    let validation =  validateLoginForm();
    if(validation.error){
      setISLoading(false);
      setErrorList(validation.error.details);
    }
    else{
    sedDataToApi();
    }
  }

  function validateLoginForm(){
    let scheme =  Joi.object({

      email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}),

      password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
      



    })
    return( scheme.validate(user , {abortEarly : false}))
  }
 

  return <>
  {errorList.map((err ,index)=>{
    if (err.context.label === 'password') {
     return <div key={index} className="alert alert-danger">password invalid</div>
    }
    else{
     return <div key={index} className="alert alert-danger">{err.message}</div>
    }
  })}
  <form onSubmit={submit} className='mt-5'>
    {error.length>0?     <div className="alert alert-danger">{error}</div> :''}

    <label htmlFor="age">email</label>
    <input onChange={getUserData}  type="email" className='form-control my-input mb-3' name='email' />
    <label htmlFor="password">password</label>
    <input onChange={getUserData}  type="password" className='form-control my-input mb-3' name='password' />
    <button type='submit' className='btn btn-info my-4'>{isLoading ==true?<i className='fas fa-spinner fa-spin '></i> : 'Login'}</button>
  </form>
  
  </>
}
