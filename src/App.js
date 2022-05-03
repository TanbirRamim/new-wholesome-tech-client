import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import Items from "./pages/Items/Items";
import CardDetails from "./pages/CardDetail/CardDetails";
import ManageInventory from "./pages/ManageInventory/ManageInventory";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/items" element={<Items></Items>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/cardDetails/:id"
          element={<CardDetails></CardDetails>}
        ></Route>
        <Route
          path="/manageInventory"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
