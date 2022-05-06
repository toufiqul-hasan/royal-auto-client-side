import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Components/About/About";
import AddItem from "./Components/AddItem/AddItem";
import Login from "./Components/Auth/Login/Login";
import RequireAuth from "./Components/Auth/RequireAuth/RequireAuth";
import ResetPassword from "./Components/Auth/ResetPassword/ResetPassword";
import Signup from "./Components/Auth/Signup/Signup";
import Blogs from "./Components/Blogs/Blogs";
import CarDetail from "./Components/CarDetail/CarDetail";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";
import MyItem from "./Components/MyItem/MyItem";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItem />
            </RequireAuth>
          }
        />
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <CarDetail />
            </RequireAuth>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;