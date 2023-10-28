import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const PageHeader = ({ toyDetails }) => {
  return (
    <div>
      <div
        className="hero min-h-[20vh] mb-10"
        style={{
          backgroundImage: `url(${toyDetails.productImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60">
          <p></p>
        </div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link>Product</Link>
                </li>
                <li>
                  <Link>{toyDetails.category}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

PageHeader.propTypes = {
  toyDetails: PropTypes.object,
};
