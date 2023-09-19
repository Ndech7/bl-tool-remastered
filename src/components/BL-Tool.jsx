import React, { useEffect, useRef } from "react";
import "./blTool.css";
import L from "leaflet";

const BlTool = () => {
  // const [map, setMap] = useState(null);
  const map_container_ref = useRef(null);

  // load map on component mount
  useEffect(() => {
    const map_instance = displayMap();

    // clean up
    return () => {
      if (map_instance._loaded) {
        map_instance.remove();
      }
    };
  }, []);

  // display the map
  const displayMap = () => {
    const id = map_container_ref.current.id;
    const lat = -1.33;
    const lon = 36.87;
    const zoom = 11;
    const tile = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attribution = "&copy: OpenStreetMap";

    const map = L.map(id).setView([lat, lon], zoom);
    let osm = L.tileLayer(tile, {
      attribution: attribution,
    });

    let esri_WorldImagery = L.tileLayer(
      "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
      }
    ).addTo(map);

    let basemaps = {
      OSM: osm,
      "ESRI World Imagery": esri_WorldImagery,
    };

    // display points
    const url = "http://localhost:8000/api/";
    diplayPoints();
    async function diplayPoints() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        L.geoJSON(data.sites, {
          onEachFeature: (feature, layer) => {
            if (feature.properties.photo) {
              layer.bindPopup(
                `<div>
                    <h4>${feature.properties.name}</h4>
                    <p>
                      <b>Locality: </b>
                      ${feature.properties.area_name}
                    </p>
                    <p>
                      <b>Photo Orientation: </b>
                      ${feature.properties.orientation}
                    </p>
                    <p>
                      <b>Land-Use Class: </b>
                      ${feature.properties.landuse_class}
                    </p>
                  </div>`
              );
            }
          },
        }).addTo(map);
      } catch (error) {
        console.error("Error fetching Data:", error);
      }
    }
    L.control.layers(basemaps, null).addTo(map);
    return map;
  };

  return (
    <>
      <div className="instructions">
        <h4>Instructions</h4>
        <ul>
          <li>
            On the map top right corner, Select sensor - Modis, Landsat,
            Sentinel, Planet
          </li>
          <br />
          <li>
            Analyze imagery and try to ascertain the land use/land cover of the
            area
          </li>
          <br />
          <li>
            Click on the placemarks to compare your analysis to the photos taken
          </li>
          <br />
          <li>Repeat steps with the other sensors</li>
        </ul>
      </div>
      <div id="map_container" ref={map_container_ref}></div>
    </>
  );
};

export default BlTool;
