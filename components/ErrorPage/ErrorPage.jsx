import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen  bg-cover hero bg-[url('https://cdn.dribbble.com/users/363634/screenshots/3906117/error-404-page-lava.gif')]">
      <div>
        {" "}
        <h2 className="md:text-7xl  text-2xl bg-base-400 text-center font-extrabold">
          {" "}
          404 <br /> Page Not Found
        </h2>
      </div>
      <Link to="/" className="btn bg-blue-600 relative top-28 text-white">
        Back To Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
