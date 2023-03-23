import React, { createContext } from "react";
import { userName, age } from "../data/user";
export const UserContext = createContext();
export default function UserCotextProvider(props) {
  // const userName = "Waqar";
  // const userAge = 20;
  return (
    <>
      <UserContext.Provider value={{ userName, age }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
}
