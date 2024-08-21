import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [createData, setCreateData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      suite: "",
      street: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleDeepChange = (e) => {
    const { name, value } = e.target;
    setCreateData((preData) => ({
      ...preData,

      address: {
        ...preData.address,
        [name]: value,
      },
    }));
  };
  const handleDeepsChange = (e) => {
    const { name, value } = e.target;
    setCreateData((preData) => ({
      ...preData,

      company: {
        ...preData.company,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`https://66507a9cec9b4a4a60323ad2.mockapi.io/api/users`, createData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    navigate("/user");
  };

  return ( 
    <div className="text-center m-5">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <b>Id:</b>
            <input
              type="text"
              name="id"
              className="form-control"
              value={createData.id}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            <b>Name:</b>
            <input
              type="text"
              name="name"
              className="form-control"
              value={createData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            <b>User Name:</b>
            <input
              type="text"
              name="username"
              className="form-control"
              value={createData.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
           <b> Email:</b>
            <input
              type="text"
              name="email"
              className="form-control"
              value={createData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <p>
          <label>
            <b>Address:</b>
            <input
              type="text"
              name="suite"
              className="form-control"
              value={createData.address.suite}
              onChange={handleDeepChange}
            />
          </label>
        </p>
        <br />
        <p>
          <label>
            <b>Street:</b>
            <input
              type="text"
              name="street"
              className="form-control"
              value={createData.address.street}
              onChange={handleDeepChange}
            />
          </label>
        </p>

        <br />
        <p>
          <label>
            <b>City:</b>
            <input
              type="text"
              name="city"
              className="form-control"
              value={createData.address.city}
              onChange={handleDeepChange}
            />
          </label>
        </p>
        <br />
        <p>
          <label>
           <b>Zipcode:</b> 
            <input
              type="text"
              name="zipcode"
              className="form-control"
              value={createData.address.zipcode}
              onChange={handleDeepChange}
            />
          </label>
        </p>

        <br />
        <p>
          <label>
           <b>Company:</b> &nbsp;&nbsp;
            <input
              type="text"
              name="name"
              className="form-control"
              value={createData.company.name}
              onChange={handleDeepsChange}
            />
          </label>
        </p>
        <p>
          <label>
           <b> CatchPhrase:</b>&nbsp;
            <input
              type="text"
              name="catchPhrase"
              className="form-control"
              value={createData.company.catchPhrase}
              onChange={handleDeepsChange}
            />
          </label>
        </p>
        <p>
          <label>
           <b>Bs:</b>
            <input
              type="text"
              name="bs"
              className="form-control"
              value={createData.company.bs}
              onChange={handleDeepsChange}
            />
          </label>
        </p>
        <div>
          <label>
            <b>Phone:</b>
            <input
              type="text"
              name="phone"
              className="form-control"
              value={createData.phone}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            <b>Website:</b>
            <input
              type="text"
              name="website"
              className="form-control"
              value={createData.website}
              onChange={handleChange}
            />
          </label>
        </div>
        <p>
          <button className="btn btn-info m-5" type="submit">
            Create
          </button>
        </p>
      </form>
    </div>
  );
};

export default Create;