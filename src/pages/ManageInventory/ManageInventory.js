import React from "react";
import useItems from "../UseItems/UseItems";
import { ImBin } from "react-icons/im";
import { Table } from "react-bootstrap";
const ManageInventory = () => {
  const [items, setItems] = useItems();

  const handleDelete = (id) => {
    const permission = window.confirm("You sure, you want to delete this?");
    if (permission) {
      const url = `http://localhost:5000/cardDetails/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);

          setItems(remaining);
          const confirmation = alert("Item Deleted");
        });
    }
  };
  return (
    <div
      className="container 
     "
    >
      {items.map((item) => (
        <Table
          responsive="sm"
          striped
          bordered
          hover
          variant="dark"
          key={item._id}
        >
          <thead>
            <tr>
              <th>Product name</th>
              <th>ID</th>
              <th>Supplier Name</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item._id}</td>
              <td>{item.supplier_name}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => handleDelete(item._id)}>
                  <ImBin></ImBin>
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}
    </div>
  );
};

export default ManageInventory;
