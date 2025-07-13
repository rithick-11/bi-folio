import React from "react";
import { ToastContainer } from "react-toastify";
import { Account, Forgotpass, Home, Login, Portfolio, RestPass, SignUp } from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/signup" Component={SignUp}></Route>
        <Route exact path="/login" Component={Login}></Route>
        <Route exact path="/forgot-password" Component={Forgotpass}></Route>
        <Route exact path="/reset-password" Component={RestPass}></Route>
        <Route exact path="/portfolio" Component={Portfolio}></Route>
        <Route exact path="/account" Component={Account}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
