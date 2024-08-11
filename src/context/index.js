import  { createContext, useState } from "react";

export const MyBooleanContext = createContext({
  isToggled: false,
  setIsToggled: () => {},
});

export const MyBooleanProvider = ({ children }) => {
  const width = window.innerWidth <= 1100;
  let [isToggled, setIsToggled] = useState(width ? true : false);
  let toggle = () => setIsToggled(!isToggled);
  return (
    <MyBooleanContext.Provider value={{ isToggled, toggle }}>
      {children}
    </MyBooleanContext.Provider>
  );
};
