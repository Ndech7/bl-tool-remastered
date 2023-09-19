import React from "react";
import { Link } from "react-router-dom";

const PeriUrban = () => {
  return (
    <div className="scroll-smooth">
      <button className="rounded bg-indigo-400">
        <Link to="/unit-1">Back to Unit 1</Link>
      </button>
      <h2 className="text-3xl p-2">
        <i>1.2.</i> <b>PERI-URBAN AREAS</b>
      </h2>
      <p className="px-2">
        Peri-urban areas, often referred to as transitional zones that lie on
        the outskirts of cities and urban centers. These areas are characterized
        by their proximity to urban areas while retaining some rural or
        semi-rural characteristics.
      </p>
      <h3 className="text-2xl text-purple-800 p-2">Characteristics</h3>
      <ul className=" p-4">
        <li className="flex flex-col">
          <b>Variable Land Use: </b>You may find a blend of agricultural land,
          residential neighborhoods, industrial zones, and commercial
          developments.
        </li>
        <li className="flex flex-col">
          <b>Population Diversity: </b>A diverse population, including urban
          migrants, farmers, and residents with varying socio-economic
          backgrounds.
        </li>
        <li className="flex flex-col">
          <b>Infrastructure Transition: </b>Infrastructure can vary from
          well-developed urban facilities to basic rural services.
        </li>
        <li className="flex flex-col">
          <b>Environmental Interface: </b>These areas often serve as a buffer
          between urban and rural environments, impacting ecosystems and natural
          resources.
        </li>
      </ul>
      <h3 className="text-2xl text-purple-800 p-2">
        Drivers of Peri-Urbanization
      </h3>
      <ul className=" p-4">
        <li className="flex flex-col">
          <b>Urban Expansion: </b>As cities expand, they encroach upon nearby
          rural areas, transforming them into peri-urban zones.
        </li>
        <li className="flex flex-col">
          <b>Population Growth: </b>The influx of people from rural areas and
          urban centers seeking housing and economic opportunities.
        </li>
        <li className="flex flex-col">
          <b>Transportation Networks: </b>Improved transportation links make
          these areas accessible to urban workers and businesses.
        </li>
        <li className="flex flex-col">
          <b>Land Speculation:</b>Investors may buy land in peri-urban areas
          with the expectation of its future development and appreciation in
          value.
        </li>
      </ul>
      <h3 className="text-2xl text-purple-800 p-2">Challenges</h3>
      <ul className=" p-4">
        <li className="flex flex-col">
          <b>Infrastructure Gaps:</b>Inadequate public services, such as water
          supply, sanitation, and waste management.
        </li>
        <li className="flex flex-col">
          <b>Land Use Conflicts: </b>Conflicts may arise between agricultural
          and urban land uses.
        </li>
        <li className="flex flex-col">
          <b>Environmental Degradation:</b>Unplanned urbanization can lead to
          deforestation, pollution, and loss of agricultural land.
        </li>
        <li className="flex flex-col">
          <b>Housing Informality: </b>Informal settlements and slums can emerge
          due to rapid population growth and insufficient housing options.
        </li>
        <li className="flex flex-col">
          <b>Gentrification: </b>Higher-income residents moving into peri-urban
          areas may drive up property prices and displace existing communities.
        </li>
      </ul>
      <h3 className="text-2xl text-purple-800 p-2">Planning and Management</h3>
      <ul className=" p-4">
        <li className="flex flex-col">
          <b>Land Use Planning:</b>Zoning regulations and land-use plans to
          guide development.
        </li>
        <li className="flex flex-col">
          <b>Infrastructure Investment: </b>Expanding services to meet the needs
          of growing populations.
        </li>
        <li className="flex flex-col">
          <b>Environmental Conservation: </b>Strategies to protect natural
          resources and ecosystems.
        </li>
        <li className="flex flex-col">
          <b>Community Engagement: </b>Involving local communities in
          decision-making and development.
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
      <button className="rounded bg-indigo-400">
        <Link to="/unit-1/case-studies">Next</Link>
      </button>
    </div>
  );
};

export default PeriUrban;
