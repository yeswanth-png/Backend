import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./shoppingfolder/container/Header";
import MainPage from "./shoppingfolder/pages/MainPage";
import Signin from "./shoppingfolder/container/Signin";
import Signup from "./shoppingfolder/container/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
