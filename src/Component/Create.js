import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function Create() {
  
  const [value, setValues] = useState({ name: "", username: "", subject: "", date: new Date().toString() });

  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(res => setValues({...value,id:res.data.length}))
      .catch(err => { console.log(err); })
  }, [])

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/users", value).then(res => {
      console.log(res);
      navigate("/");
    }).catch(err => {
      console.log(err);
    });
  }



  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-item-center bh-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              onChange={e => setValues({ ...value, name: e.target.value })}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              UserName
            </label>
            <input
              onChange={e => setValues({ ...value, username: e.target.value })}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Subject
            </label>
            <input
              onChange={e => setValues({ ...value, subject: e.target.value })}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Date
            </label>
            <input
              onChange={e => setValues({ ...value, date: e.target.value })}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Link className='btn btn-primary m-5'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create