import React from "react";
import { Link } from "react-router-dom";

const Urbanization = () => {
  return (
    <div className="scroll-smooth">
      <button className="rounded bg-indigo-400">
        <Link to="/unit-1">Back to Unit 1</Link>
      </button>
      <h2 className="text-3xl p-2">
        <i>1.1</i> <b>Urbanization</b>
      </h2>
      <p className="px-2">
        Urbanization refers to the mass movement of populations from rural to
        urban settings and the consequent physical changes to urban settings.
        Urban areas are the heart of technological development and economic
        growth of many nations.
      </p>
      <h3 className="text-2xl text-purple-800 p-2">Causes of urbanization</h3>
      <ul className=" p-4">
        <li className="flex flex-col">
          <b>Industrialization: </b>The growth of industries in urban areas
          attracts rural populations seeking better economic prospects.
        </li>
        <li className="flex flex-col">
          <b>Rural-Urban Migration: </b>People move from rural to urban areas in
          search of better living conditions, education, healthcare, and
          employment
        </li>
        <li className="flex flex-col">
          <b>Natural Population Growth: </b>Urban areas often experience higher
          birth rates and lower mortality rates, leading to population growth.
        </li>
      </ul>
      <h3 className="text-2xl text-purple-800 p-2">
        Characteristics of urban areas
      </h3>
      <ul className=" p-4">
        <li>Dense populations</li>
        <li>Advanced infrastructure</li>
        <li>Diverse economic opportunities</li>
      </ul>
      <h3 className="text-2xl text-purple-800 p-2">
        Challenges of urbanization
      </h3>
      <ul className=" p-4">
        <li className="flex flex-col">
          <b>Infrastructure Strain: </b>Rapid urbanization can overwhelm
          existing infrastructure, leading to issues like traffic congestion,
          inadequate housing, and insufficient public services.
        </li>
        <li className="flex flex-col">
          <b>Housing Shortages: </b>The demand for housing often outstrips the
          supply, resulting in informal settlements and slums.
        </li>
        <li className="flex flex-col">
          <b>Environmental Impact: </b>Urban areas are major sources of
          pollution and can contribute to habitat loss, deforestation, and
          climate change.
        </li>
        <li className="flex flex-col">
          <b>Social Issues: </b>Urbanization can exacerbate social inequalities,
          leading to issues like poverty, crime, and inadequate access to
          healthcare and education.
        </li>
      </ul>
      <h3 className="text-2xl text-purple-800 p-2">Positive Aspects</h3>
      <ul className=" p-4">
        <li className="flex flex-col">
          <b>Economic Growth: </b>Cities are hubs of economic activity,
          attracting businesses and creating job opportunities.
        </li>
        <li className="flex flex-col">
          <b>Cultural Diversity: </b>Urban areas tend to be more diverse,
          fostering cultural exchange and innovation.
        </li>
        <li className="flex flex-col">
          <b>Access to Services: </b>Cities often provide better access to
          healthcare, education, and cultural amenities.
        </li>
      </ul>
      <div className="p-4">
        <h3 className="text-2xl text-purple-800">Sustainable Urbanization</h3>
        <p>
          A focus on sustainable urbanization aims to minimize environmental
          impact, reduce social inequalities, and promote economic growth in
          cities through initiatives like green building practices, public
          transportation, and efficient waste management.
        </p>
      </div>
      <div className="p-4">
        <h3 className="text-2xl text-purple-800">Global Trends</h3>
        <p>
          Urbanization is a global phenomenon. In 2021, over half of the world's
          population lived in urban areas, a trend expected to continue.
        </p>
      </div>
      <button className="rounded bg-indigo-400">
        <Link to="/unit-1/peri-urban">Next</Link>
      </button>
    </div>
  );
};

export default Urbanization;
