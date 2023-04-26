import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Forms/Login";
import Header from "./component/Header/Header";
import HomePage from "./component/Home/HomePage";
import Register from "./component/Forms/Register";
import Navbar from "./component/Navbar/Navbar";
import AddTransaction from "./component/Transaction/AddTransaction";
import AccountDashboard from "./component/Dashboard/AccountDashboard";
import AccountDetails from "./component/Dashboard/AccountDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route path="/dashboard" element={<AccountDashboard />} />
        <Route
          path="/account-details/:accountID"
          element={<AccountDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
