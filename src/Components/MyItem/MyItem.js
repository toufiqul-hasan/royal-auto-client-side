import React, { useEffect, useState } from "react";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import MyItems from "../MyItems/MyItems";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
      const url = `https://thawing-retreat-14463.herokuapp.com/mycar?email=${email}`;
      try {
        const { data } = await axios.get(url);
        setCar(data);
        setLoading(false);
      } 
      catch (error) {
        console.log(error.message);
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
          <div className="products">
            {car.map((car) => (
              <MyItems
                key={car._id}
                car={car}
                reload={reload}
                setReload={setReload}
              ></MyItems>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MyItem;