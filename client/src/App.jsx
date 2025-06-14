import React from "react";
import { Account, Portfolio } from "./pages";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Portfolio}></Route>
        <Route exact path="/portfolio" Component={Portfolio}></Route>
        <Route exact path="/account" Component={Account}></Route>
      </Routes>
    </>
  );
};

export default App;
