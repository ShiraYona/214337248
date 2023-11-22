import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Date from "./Dateevent";



const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Date/>}></Route>
    </Routes>
  );
};

export default AppRoutes;