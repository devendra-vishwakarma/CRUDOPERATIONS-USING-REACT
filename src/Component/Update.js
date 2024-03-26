import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Update() {

  const [data, setData] = useState({});
  const { id } = useParams();
  const [value, setValues] = useState({ name: "", username: "", subject: "", date: new Date().toLocaleDateString });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/users/" + id)
      .then(res => {
        setData(res.data);
        setValues(res.data); // Set initial values with fetched data
      })
      .catch(err => console.log(err));
  }, [])

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put("http://localhost:3000/users/" + id, value)
      .then(res => {
        console.log(res);
        navigate("/");
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-item-center bh-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update User_Info</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              value={value.name}
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
              value={value.username}
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
              value={value.subject}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <button type="submit" className="btn btn-success">
            Update
          </button>
          <Link to={"/"} className='btn btn-primary m-5'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Update;
