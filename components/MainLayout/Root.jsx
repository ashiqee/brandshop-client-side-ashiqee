import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar />

      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
