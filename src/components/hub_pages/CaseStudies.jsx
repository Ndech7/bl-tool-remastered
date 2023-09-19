import React from "react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  return (
    <div className="scroll-smooth">
      <button className="rounded bg-indigo-400">
        <Link to="/unit-1">Back to Unit 1</Link>
      </button>
      <h2 className="text-3xl p-2">
        <i>1.3</i> <b>CASE STUDIES</b>
      </h2>
      <p className="px-2">
        Analyzing case studies provides real-world examples of urbanization and
        peri-urban dynamics. Case studies help us understand the various
        factors, including social, economic, and environmental, that influence
        urbanization. Some of the case studies used in this project are Ruaka
        and Kitengela. Ruaka and Kitengela towns are described as peri-urban
        areas because they have experienced rapid transformation from rural to
        urban characteristics due to factors like population growth, increased
        economic activities, and urban expansion.
      </p>
      <h3 className="text-2xl text-purple-800 p-2">Characteristics</h3>
      <ul className=" p-4">
        <li className="flex flex-col">
          <b>Population Growth: </b>Peri-urban areas typically experience
          significant population growth as people move from rural areas to seek
          better economic opportunities in urban centers. This can result in
          unplanned and rapid urbanization.
        </li>
        <li className="flex flex-col">
          <b>Infrastructure Development: </b>As the population grows and
          urbanization progresses, there is an increased demand for
          infrastructure development. This includes roads, water supply,
          sanitation, and electricity. Peri-urban areas like Ruaka often witness
          ongoing infrastructure projects to meet these demands.
        </li>
        <li className="flex flex-col">
          <b>Mixed Land Use: </b>Ruaka may have a mix of agricultural and
          residential land uses. You might find farms and rural settlements
          alongside newly developed urban infrastructure.
        </li>
        <li className="flex flex-col">
          <b>Housing:</b>The housing in peri-urban areas can vary widely,
          ranging from traditional rural homes to more modern urban-style
          apartments and houses. There may also be informal settlements or slums
          in some areas.
        </li>
        <li className="flex flex-col">
          <b>Economic Activities: </b>Peri-urban areas are often hubs for
          various economic activities. In Ruaka, you might find a mix of
          agriculture, small-scale industries, and services catering to the
          growing population.
        </li>
        <li className="flex flex-col">
          <b>Environmental Challenges: </b>Rapid urbanization in peri-urban
          areas can pose environmental challenges, such as deforestation,
          pollution, and the loss of agricultural land.
        </li>
        <li className="flex flex-col">
          <b>Environmental Interface: </b>These areas often serve as a buffer
          between urban and rural environments, impacting ecosystems and natural
          resources.
        </li>
        <li className="flex flex-col">
          <b>Social Diversity: </b>Due to the influx of people from different
          backgrounds, peri-urban areas tend to be socially diverse. You may
          find a mix of cultures and social classes in Ruaka.
        </li>
        <li className="flex flex-col">
          <b>Access to Services: </b>Access to services like healthcare,
          education, and public transportation may be limited and unevenly
          distributed in peri-urban areas. Efforts are often made to improve
          access to these services as the area urbanizes.
        </li>
        <li className="flex flex-col">
          <b>Governance and Planning: </b>TThe transition from rural to urban
          characteristics can be challenging for local governance and planning.
          There is often a need for effective urban planning to manage this
          transformation.
        </li>
      </ul>
      <button className="rounded bg-indigo-400">
        <Link to="/unit-1/context-culture-1">Next</Link>
      </button>
    </div>
  );
};

export default CaseStudies;
