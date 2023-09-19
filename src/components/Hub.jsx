import React from "react";
import { Link } from "react-router-dom";

const Hub = () => {
  return (
    <>
      <ul className="flex flex-col">
        <li className="ml-96 p-4">
          <Link
            to="/intro"
            className="text-2xl text-fuchsia-700 hover:underline"
          >
            Introduction
          </Link>
          <ul className="list-disc p-5">
            <li>
              Use of the mentee tool to test the different understandings and
              perception
            </li>
          </ul>
        </li>
        <li className="ml-96 p-4">
          <Link
            to="/unit-1"
            className="text-2xl text-fuchsia-700 hover:underline"
          >
            Unit 1
          </Link>
          <ul className="list-disc p-5">
            <li>Urbanization</li>
            <li>Peri-urban areas</li>
            <li>Case Studies</li>
            <li>
              Role of context and culture in understanding urbanization and
              peri-urban areas
            </li>
          </ul>
        </li>
        <li className="ml-96 p-4">
          <Link
            to="/unit-2"
            className="text-2xl text-fuchsia-700 hover:underline"
          >
            Unit 2
          </Link>
          <ul className="list-disc p-5">
            <li>Image interpretation tools review</li>
            <li>Role of context and culture in image interpretation</li>
          </ul>
        </li>
        <li className="ml-96 p-4">
          <Link
            to="/unit-3"
            className="text-2xl text-fuchsia-700 hover:underline"
          >
            Unit 3
          </Link>
          <ul>
            <li>
              <h3 className="text-xl p-2">Groundtruthing</h3>
              <ul className="list-disc p-4">
                <li>Techniques and methods</li>
                <li>Considerations in groundtruthing</li>
                <li>Role of context and culture in groundtruthing</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Hub;
