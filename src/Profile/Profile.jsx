import React from 'react'

export default function Profile({userData}) {
    let {first_name , last_name , age , email} = userData



  return (
    <>
    <div className="userProfile d-flex flex-column align-items-center justify-content-center">
        <h4>Name : {first_name} {last_name}</h4>
        <h4>Age : {age}</h4>
        <h4>Email : {email}</h4>
    </div>
    </>
  )
}
