import React from "react";
import { Link } from "react-router-dom";

const UnitOne = () => {
  return (
    <>
      <button className="rounded bg-teal-400">
        <Link to="/hub" className="text-xl text-fuchsia-700">
          Back to portal home-page
        </Link>
      </button>
      <h3 className="text-center p-8 text-4xl text-fuchsia-700">Unit 1</h3>
      <ul className="flex flex-col space-y-36 text-center  p-4">
        <li>
          <Link
            to="urbanization"
            className="text-blue-600 dark:text-blue-500 hover:underline text-2xl"
          >
            Urbanization
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 dark:text-blue-500 hover:underline text-2xl"
            to="peri-urban"
          >
            Peri-urban areas
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 dark:text-blue-500 hover:underline text-2xl"
            to="case-studies"
          >
            Case Studies
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 dark:text-blue-500 hover:underline text-2xl"
            to="context-culture-1"
          >
            Role of context and culture in understanding urbanization and
            peri-urban areas
          </Link>
        </li>
      </ul>
    </>
  );
};

export default UnitOne;
