import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://blooming-eyrie-86596.herokuapp.com/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((output) => {
        console.log(output);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Add item here</h2>
      <form className=" d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Product name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          placeholder="Supplier name"
          {...register("supplier_name")}
        />
        <input
          className="mb-2"
          placeholder="price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Image link"
          type="text"
          {...register("image")}
        />
        <textarea
          className="mb-2"
          placeholder="short description"
          name="comment"
          form="form"
          {...register("short_description")}
        ></textarea>
        <input type="Submit" value="Add Item" />
      </form>
    </div>
  );
}
