import { Route, Routes } from "react-router";
import { Home } from "../Components/Home/Home";

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
  };