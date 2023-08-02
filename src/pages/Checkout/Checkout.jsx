import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import img from "../../assets/images/checkout/checkout.png";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  // console.log(service, user);
  const { _id, price, title, img } = service;

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email || form.email.value;
    const booking = {
      customerName: name,
      email: email,
      date,
      img: img,
      service: title,
      service_id: _id,
      price: price,
    };
    // console.log(booking);

    fetch("https://car-doctor-server-new-kappa.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="mt-40 mb-20   ">
      <PageTitle img={img} title="Check Out" link="Checkout"></PageTitle>
      <h1>Checkout Page: {service.title}</h1>

      <form
        onSubmit={handleBookService}
        className="lg:w-[1140px] mx-auto p-20 bg-[#F3F3F3] border border-black rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="form-control ">
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered md:mr-10"
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              name="date"
              className="input input-bordered md:mr-10"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input input-bordered md:mr-10"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="price"
              placeholder="Due Amount"
              defaultValue={"$" + price}
              className="input input-bordered md:mr-10"
            />
          </div>
          <textarea
            className="textarea textarea-secondary"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
