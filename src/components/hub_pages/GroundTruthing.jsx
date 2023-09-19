import React from "react";
import { Link } from "react-router-dom";

const GroundTruthing = () => {
  return (
    <div className="scroll-smooth">
      <button className="rounded bg-indigo-400">
        <Link to="/unit-3">Back to Unit 3</Link>
      </button>
      <h2 className="text-3xl p-2">
        <i>3.1 </i> <b>GROUND TRUTHING</b>
      </h2>
      <p>
        Groundtruthing is the process of validating data or information obtained
        from remote sensing or image interpretation by collecting on-site or
        ground-level data. Data such as satellite or aerial imagery need to be
        validated before being used in analysis such as classification. The
        choice of techniques and methods for ground truthing depends on the
        specific objectives of the remote sensing project, budget constraints
        and the type of data being collected.
      </p>
      <h3 className="text-2xl text-purple-800 p-2">Techniques & Methods</h3>
      <ul>
        <li className="flex flex-col">
          <b className="text-xl pl-4">Field Surveys</b>
          <ul className="list-disc ml-12">
            <li className="flex flex-col">
              <b>Ground Surveys:</b> Personnel visit the study area to collect
              ground-level data. This can include measurements of land cover,
              vegetation, soil properties, and infrastructure.
            </li>
            <li className="flex flex-col">
              <b>Vegetation Sampling: </b> Collecting vegetation samples to
              identify and measure plant species, density, height, and health.
              Techniques like quadrat sampling and transect surveys are often
              used.
            </li>
          </ul>
        </li>
        <li className="flex flex-col">
          <b className="text-xl pl-4">
            GPS and GNSS (Global Navigation Satellite System):
          </b>
          <p className="ml-12">
            Using GPS or GNSS devices to record precise coordinates of specific
            ground features, such as boundary markers, roads, buildings, and
            other points of interest.
          </p>
        </li>
        <li className="flex flex-col">
          <b className="text-xl pl-4">Photographic Documentation:</b>
          <p className="ml-12">
            Capturing high-resolution photographs or videos of the study area to
            document the current conditions. These images can be compared to
            remotely sensed imagery for validation.
          </p>
        </li>
        <li className="flex flex-col">
          <b className="text-xl pl-4">Soil Sampling:</b>
          <p className="ml-12">
            Collecting soil samples at different locations to analyze soil
            properties such as texture, moisture content, pH levels, and
            nutrient concentrations. This information can help validate land
            cover and land use classifications.
          </p>
        </li>
        <li className="flex flex-col">
          <b className="text-xl pl-4">Weather Stations:</b>
          <p className="ml-12">
            Installing weather stations to collect meteorological data,
            including temperature, humidity, precipitation, wind speed, and
            direction. This data can be used to validate climate-related remote
            sensing observations.
          </p>
        </li>
        <li className="flex flex-col">
          <b className="text-xl pl-4">Ground-based Sensors:</b>
          <p className="ml-12">
            Deploying ground-based sensors to monitor specific environmental
            parameters like air quality, water quality, or radiation levels.
            These sensors can provide valuable validation data for remote
            sensing measurements.
          </p>
        </li>
        <li className="flex flex-col">
          <b className="text-xl pl-4">Aerial Photography:</b>
          <p className="ml-12">
            Capturing high-resolution aerial photographs using aircraft or
            drones to supplement satellite or airborne remote sensing data.
            Aerial imagery can offer a more detailed perspective for validation.
          </p>
        </li>
        <li className="flex flex-col">
          <b className="text-xl pl-4">Lidar Surveys:</b>
          <p className="ml-12">
            Using lidar (Light Detection and Ranging) technology to create
            detailed 3D elevation models of the terrain. Lidar data can be used
            to validate elevation and topographic information obtained from
            remote sensing platforms.
          </p>
        </li>
        <li className="flex flex-col">
          <b className="text-xl pl-4">Biological Surveys:</b>
          <p className="ml-12">
            Conducting biological surveys to study wildlife populations,
            including species identification, abundance estimation, and behavior
            observation. This is especially important for projects related to
            biodiversity and habitat mapping.
          </p>
        </li>
        <li className="flex flex-col">
          <b className="text-xl pl-4">Comparative Analysis:</b>
          <p className="ml-12">
            Comparing ground truth data collected during field surveys with
            remotely sensed imagery or data products. Statistical analyses and
            visual assessments are often performed to determine the level of
            agreement or discrepancies.
          </p>
        </li>
        <li className="flex flex-col">
          <b className="text-xl pl-4">Data Sharing and Collaboration:</b>
          <p className="ml-12">
            Collaborating with local experts, institutions, and communities to
            gather ground truth data and local knowledge, which can be
            invaluable for contextualizing and validating remote sensing
            results.
          </p>
        </li>
      </ul>
      <button className="rounded bg-indigo-400">
        <Link to="/unit-3/considerations-in-groundtruthing">Next</Link>
      </button>
    </div>
  );
};

export default GroundTruthing;
