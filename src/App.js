import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import BlTool from "./components/BL-Tool";
import Hub from "./components/Hub";
import Introduction from "./components/hub_pages/Introduction";
import UnitOne from "./components/hub_pages/Unit_1";
import Urbanization from "./components/hub_pages/Urbanization";
import PeriUrban from "./components/hub_pages/PeriUrban";
import CaseStudies from "./components/hub_pages/CaseStudies";
import ContextCulture1 from "./components/hub_pages/ContextCulture1";
import UnitTwo from "./components/hub_pages/Unit_2";
import UnitThree from "./components/hub_pages/Unit_3";
import GroundTruthing from "./components/hub_pages/GroundTruthing";
import Considerations from "./components/hub_pages/Considerations";
import ContextCulture3 from "./components/hub_pages/ContextCulture3";
import UnitTwoOne from "./components/hub_pages/Unit_2_1";
import ContextCultureTwo from "./components/hub_pages/ContextCulture2";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="bg-sky-600 nav text-white">
          <div className="flex">
            <img
              className="px-1 uon_logo"
              src={require("./assets/new_logos/Screenshot 2023-09-11 152153.png")}
              alt="none"
            />

            <img
              className="px-1 uon_logo"
              src={require("./assets/new_logos/Hochschule-Karlsruhe-Emblem (1).png")}
              alt="none"
            />
            <img
              className=" px-1 uon_logo"
              src={require("./assets/new_logos/pretoria (1).png")}
              alt="none"
            />
            <img
              className="px-1 uon_logo"
              src={require("./assets/new_logos/BWS LOGO 1.png")}
              alt="none"
            />
          </div>
          <Link className="link" to="/">
            Overview
          </Link>
          <Link className="link" to="/hub">
            Learning Portal
          </Link>
          <Link className="link" to="/bl-tool">
            BL-Tool
          </Link>
        </div>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hub/*" element={<Hub />} />
          <Route path="/bl-tool" element={<BlTool />} />
          <Route path="/intro" element={<Introduction />} />
          <Route path="/unit-1" element={<UnitOne />} />
          <Route path="/unit-1/urbanization" element={<Urbanization />} />
          <Route path="/unit-1/peri-urban" element={<PeriUrban />} />
          <Route path="/unit-1/case-studies" element={<CaseStudies />} />
          <Route
            path="/unit-1/context-culture-1"
            element={<ContextCulture1 />}
          />
          <Route path="/unit-2" element={<UnitTwo />} />
          <Route path="/unit-2/image-interpretation" element={<UnitTwoOne />} />
          <Route
            path="/unit-2/context-culture-2"
            element={<ContextCultureTwo />}
          />
          <Route path="/unit-3" element={<UnitThree />} />
          <Route path="/unit-3/groundtruthing" element={<GroundTruthing />} />
          <Route
            path="/unit-3/considerations-in-groundtruthing"
            element={<Considerations />}
          />
          <Route
            path="/unit-3/role-of-context-and-culture-in-groundtruthing"
            element={<ContextCulture3 />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
