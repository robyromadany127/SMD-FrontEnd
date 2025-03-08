import useBodyClasses from "@/hooks/useBodyClasses";
import { toAbsoluteUrl } from "@/utils";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const Error500Page = () => {
  useBodyClasses("dark:bg-coal-500");

  return (
    <Fragment>
      <div className="h-screen flex flex-col justify-center items-center">
        <span className="badge badge-primary badge-outline mb-3">
          500 Error
        </span>

        <h3 className="text-2.5xl font-semibold text-gray-900 text-center mb-2">
          Internal Server Error
        </h3>

        <div className="text-md text-center text-gray-700 mb-10">
          Server error occurred. Please try again later or &nbsp;
          <a
            // href="https://devs.keenthemes.com"
            className="text-primary font-medium hover:text-primary-active"
          >
            Contact Us
          </a>
          &nbsp; for assistance.
        </div>
      </div>

      <Link to="/dashboard" className="btn btn-primary flex justify-center">
        Back to Home
      </Link>
    </Fragment>
  );
};

export { Error500Page };
