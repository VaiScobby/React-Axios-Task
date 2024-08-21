import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = ({ id }) => {
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState({
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
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get(`https://66507a9cec9b4a4a60323ad2.mockapi.io/api/users/${id}`)
      .then((res) => setUpdateData(res.data))
      .catch((error) => console.log(error));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleDeepChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((preData) => ({
      ...preData,

      address: {
        ...preData.address,
        [name]: value,
      },
    }));
  };
  const handleDeepsChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((preData) => ({
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
      .put(
        `https://66507a9cec9b4a4a60323ad2.mockapi.io/api/users/${id}`,
        updateData
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    navigate("/user");
  };

  return (
    <div className=" text-center m-5">
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            <b>Id:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="id"
              className="form-control"
              value={updateData.id}
              onChange={handleChange}
            />
          </label>
        </p>

        <p>
          <label>
           <b>Name:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="name"
              className="form-control"
              value={updateData.name}
              onChange={handleChange}
            />
          </label>
        </p>

        <p>
          <label>
           <b>User Name:</b>&nbsp;
            <input
              type="text"
              name="username"
              className="form-control"
              value={updateData.username}
              onChange={handleChange}
            />
          </label>
        </p>

        <p>
          <label>
            <b>Email:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="email"
              className="form-control"
              value={updateData.email}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            <b>Address:</b>&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="suite"
              className="form-control"
              value={updateData.address.suite}
              onChange={handleDeepChange}
            />
          </label>
        </p>
        <p>
          <label>
            <b>Street:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="street"
              className="form-control"
              value={updateData.address.street}
              onChange={handleDeepChange}
            />
          </label>
        </p>
        <p>
          <label>
            <b>City:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="city"
              className="form-control"
              value={updateData.address.city}
              onChange={handleDeepChange}
            />
          </label>
        </p>
        
        <p>
          <label>
            <b>Zipcode:</b>&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="zipcode"
              className="form-control"
              value={updateData.address.zipcode}
              onChange={handleDeepChange}
            />
          </label>
        </p>
        <p>
          <label>
           <b>Company:</b> &nbsp;&nbsp;
            <input
              type="text"
              name="name"
              className="form-control"
              value={updateData.company.name}
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
              value={updateData.company.catchPhrase}
              onChange={handleDeepsChange}
            />
          </label>
        </p>
        <p>
          <label>
           <b>Bs:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="bs"
              className="form-control"
              value={updateData.company.bs}
              onChange={handleDeepsChange}
            />
          </label>
        </p>
        <div>
          <label>
            <b>Phone:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="phone"
              className="form-control"
              value={updateData.phone}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
           <b>Website:</b>&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="website"
              className="form-control"
              value={updateData.website}
              onChange={handleChange}
            />
          </label>
        </div>
        <p>
          <button className="btn btn-info m-5 text-white" type="submit">
            Update
          </button>
        </p>
      </form>
    </div>
  );
};

export default Update;