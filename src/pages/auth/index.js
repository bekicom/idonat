import { Route, Routes } from "react-router-dom";
import Login from "./Login";



function Auth() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default Auth;
