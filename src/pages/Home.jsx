import React from "react";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import Balance from "../components/Balance";
import Claim from "../components/Claim";
import Navigations from "../components/Navigations";

const Home = () => {
  return (
    <div>
      <Header />
      <UserProfile />
      <Balance />
      <Claim />
      <Navigations />
    </div>
  );
};

export default Home;
