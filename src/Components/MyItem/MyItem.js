import React, { useEffect, useState } from "react";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import MyItems from "../MyItems/MyItems";
import { Spinner } from "react-bootstrap";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [car, setCar] = useState([]);
  const [reload, setReload] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const email = user.email;
    fetch(`https://thawing-retreat-14463.herokuapp.com/mycar?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCar(data);
        setLoading(false);
      });
  }, [user, reload]);

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