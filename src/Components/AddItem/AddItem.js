import React from "react";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const AddItem = () => {
  const [user] = useAuthState(auth);

  const handleAddItem = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const img = event.target.img.value;
    const quantity = parseInt(event.target.quantity.value);
    const supplier = event.target.supplier.value;

    const info = { email, name, price, description, img, quantity, supplier };

    fetch("https://thawing-retreat-14463.herokuapp.com/car", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Product has been added successfully!");
        event.target.reset();
      });
  };

  return (
    <div className="login-container mt-3 mb-5">
      <div className="title">ADD ITEM</div>
      <form className="login-form" onSubmit={handleAddItem}>
        <input
          name="email"
          type="email"
          value={user?.email}
          placeholder="Your Email"
          required
          readOnly
          disabled
        />
        <input name="name" type="text" placeholder="Product Name" required />
        <input name="price" type="text" placeholder="Price" required />
        <textarea
          name="description"
          type="text"
          placeholder="Description"
          required
        />
        <input name="img" type="text" placeholder="Image URL" required />
        <input name="quantity" type="text" placeholder="Quantity" required />
        <input name="supplier" type="text" placeholder="Supplier" required />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddItem;