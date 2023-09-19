import React from "react";
import { Link } from "react-router-dom";

const UnitThree = () => {
  return (
    <>
      <button className="rounded bg-teal-400">
        <Link to="/hub" className="text-xl text-fuchsia-700">
          Back to portal home-page
        </Link>
      </button>
      <h3 className="text-center p-8 text-4xl text-fuchsia-700">Unit 3</h3>
      <ul className="flex flex-col space-y-36 text-center  p-4">
        <li>
          <Link
            to="groundtruthing"
            className="text-blue-600 dark:text-blue-500 hover:underline text-2xl"
          >
            GroundTruthing - Techniques & Methods
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 dark:text-blue-500 hover:underline text-2xl"
            to="considerations-in-groundtruthing"
          >
            Considerations in Groundtruthing
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 dark:text-blue-500 hover:underline text-2xl"
            to="role-of-context-and-culture-in-groundtruthing"
          >
            Role of context and culture in Groundtruthing
          </Link>
        </li>
      </ul>
    </>
  );
};

export default UnitThree;
