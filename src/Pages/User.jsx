import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User = ({ setId }) => {
  const [users, setUsers] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async (id) => {
    await axios.get("https://66507a9cec9b4a4a60323ad2.mockapi.io/api/users/")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  };
  const handleEdit = (id) => {
    setId(id);
    navigate(`/update/${id}`);
  };
  const handleDelete = async (id) => {
    await axios.delete(`https://66507a9cec9b4a4a60323ad2.mockapi.io/api/users/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
            <th scope="col" colSpan={3}>
              Action
            </th>
          </tr>
        </thead>
        <tbody className=" table table-success">
          {users.map((ele, index) => {
            return (
              <tr key={index}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
                <td>
                  {ele.address.suite}
                  <br />,
                  {ele.address.street}
                  <br />,
                  {ele.address.city}
                  <br />,
                  {ele.address.zipcode}
                </td>
                <td>{ele.phone}</td>
                <td>{ele.website}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      handleEdit(ele.id);
                    }}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(ele.id);
                    }}
                  >
                    Delete
                  </button> 
                  </td>
                  <td>
                  <button className="btn btn-primary" onClick={()=>{navigate('/create')}}>Create</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;