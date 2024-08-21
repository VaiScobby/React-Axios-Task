import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://66507a9cec9b4a4a60323ad2.mockapi.io/api/users")
      .then((result) => setUsers(result.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {users.map((element, index) => {
          return (
            <div key={index}>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h4>User Details:</h4>
                    <div className="userdetails">
                      <div>&#x2022; {element.name}</div>
                      <div>&#x2022; {element.username}</div>
                      <div>&#x2022; {element.email}</div>
                    </div>
                    <div>
                      <hr />
                      <b>Address:</b>
                      <br />
                      <div className="address-details">
                      &#x2022; {element.address.street},
                        <br />
                        &#x2022; {element.address.suite},
                        <br />
                        &#x2022; {element.address.city},
                        <br />
                        &#x2022; {element.address.zipcode},

                        <div>&#x2022; {element.phone},</div>

                        <div>&#x2022; {element.website}</div>
                      </div>
                    </div>
                    <hr />
                      <b>Company:</b>

                      <div className="company-details">
                        
                      <h6 className="text-muted">

                      &#x2022; {element.company.name},
                        <br />
                        &#x2022; {element.company.catchPhrase},
                        <br />
                        &#x2022; {element.company.bs}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;