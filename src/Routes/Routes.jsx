import { Route, Routes } from "react-router";
import { Footer } from "../Components/Footer/Footer";
import { Home } from "../Components/Home/Home";

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Footer/>} />
            </Routes>
        </>
    );
  };