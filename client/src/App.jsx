import React from "react";
import { ToastContainer } from "react-toastify";
import { Account, Home, Portfolio, SignUp } from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/signup" Component={SignUp}></Route>
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
