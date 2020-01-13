import React from "react";
import { useIsLoggedIn } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
  const isLoggedIn = useIsLoggedIn();
  console.log(isLoggedIn, "navcontroller.js log");
  return isLoggedIn ? <MainNavigation /> : <AuthNavigation />;
  //return <MainNavigation />;
};
