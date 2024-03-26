import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Read() {
  const[data,setData] = useState([]);
  const{id} = useParams();


  useEffect(()=>{
    axios.get("http://localhost:3000/users/"+id).then(res => setData(res.data)).catch(err=>console.log(err));
  },[])

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-item-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Details Of User</h3>
        <div className='mb-2'>
          <stromg>Name:{data.id}</stromg>
        </div>
        <div className='mb-2'>
          <stromg>Name:{data.name}</stromg>
        </div>
        <div className='mb-2'>
          <stromg>Name:{data.username}</stromg>
        </div>
        <div className='mb-2'>
          <stromg>Name:{data.subject}</stromg>
        </div>
        <div className='mb-2'>
          <stromg>Name:{data.date}</stromg>
        </div>
        <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
        <Link to={"/"} className='btn btn-primary ms-3'>Back</Link>
      </div>
    </div>
  )
}

export default Read