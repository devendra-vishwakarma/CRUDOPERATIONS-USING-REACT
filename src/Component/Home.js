// The command json-server --watch db.json is used to run a local JSON server. Here's what each part of the command does:
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import Read from './Read';
function Home() {
    const [data, setData] = useState([])

    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then(res => setData(res.data))
            .catch(err => { console.log(err); })
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm("would you like to delete the record")
        if (confirm) {
            axios.delete("http://localhost:3000/users/"+id)
                .then(res => {
                    navigate("/");
                }).catch(err => {
                    console.log(err);
                })
        }
    }
    return (
        <div className='d-flex text-center flex-column align-item-center justify-content-center bg-light vh-100'>
            <h1>List of user</h1>
            <div style={{ marginLeft: "15rem" }} className=' w-75 rounded bg-white border shadow p-4'>
                <div className='d-flex mt-5 justify-content-end' style={{ width: "5rem" }}><Link to={"/create"} className='btn btn-success'> Add+</Link></div>
                <table className='table mt-5'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Subject</th>
                            <th>Date</th>
                            <th>Edit</th>
                            <th>Update</th>
                            <th>Read</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((datas, item) => <tr key={datas.id}>
                            <td>{datas.id}</td>
                            <td>{item+1}</td>
                            <td>{datas.name}</td>
                            <td>{datas.username}</td>
                            <td>{datas.subject}</td>
                            <td>{datas.date}</td>

                            <td><Link className=' btn btn-success rounded-circle' to={`/read/${datas.id}`}>Edit</Link></td>
                            <td><Link className=' btn btn-primary rounded-circle' to={`/update/${datas.id}`}>Update</Link></td>
                            <td><Link className=' btn btn-info rounded-circle' to={`/read/${datas.id}`}>Read</Link></td>
                            <td><button className=' btn btn-danger rounded-circle' onClick={e => handleDelete(datas.id)
                            }>Delete</button></td>

                            {/* <td className='btn btn-success'style={{marginRight:"2rem"}}>Edit</td>
                            <td className='btn btn-danger'style={{marginRight:"2rem"}}>Update</td>
                            <td className='btn btn-info'style={{marginRight:"2rem"}}>Read</td> */}
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )


}

export default Home