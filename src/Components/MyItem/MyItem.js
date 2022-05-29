import React, { useEffect, useState } from "react";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import MyItems from "../MyItems/MyItems";
import { Spinner } from "react-bootstrap";
import axiosPrivate from "../../api/axiosPrivate";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [car, setCar] = useState([]);
  const [reload, setReload] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const getCars = async () => {
      const email = user.email;
      const url = `https://royal-auto.herokuapp.com/mycar?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setCar(data);
        setLoading(false);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getCars();
  }, [user, reload, navigate]);

  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center my-auto">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <div>
          <div className="title mt-3">MY ITEM</div>
          <div className="container mt-4">
            <Table responsive>
              <thead>
                <tr>
                  <th className="text-center">No.</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Supplier</th>
                  <th className="text-center">Manage</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {car.map((car, index) => (
                  <MyItems
                    key={car._id}
                    index={index}
                    car={car}
                    reload={reload}
                    setReload={setReload}
                  ></MyItems>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
};

export default MyItem;