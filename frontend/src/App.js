import "./App.css";
import "./bootstrap.min.css";
import Header from "./component/Header/Header";
import AdminHeader from "./component/Header/AdminHeader"
import LandPage from "./component/screen/screen";
import Login from "./component/Login/Login";
import Signup from "./component/signup/signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./component/products/product";
import AdminLogin from "./component/adminLogin/adminLogin";
import AdminHome from "./component/AdminHome/AdminHome";
import EditUser from "./component/EditUser/EditUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Header />, <LandPage />]} />
          <Route path="/login" element={[<Header />, <Login title="USER" />]} />
          <Route path="/signup" element={[<Header />, <Signup />]} />
          <Route path="/products" element={[<Header />, <Products />]} />
          <Route path="/admin" element={[<AdminLogin />]} />
          <Route path="/adminHome" element={[<AdminHeader/>,<AdminHome />]} />
          <Route path="/edituser/:userId" element={[<AdminHeader/>,<EditUser />]} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
