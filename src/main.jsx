import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import ShopNow from "./Pages/ShopNow.jsx";
import FreeWeights from "./Pages/FreeWeights.jsx";
import SignUp from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import ProfilePage from "./Pages/Profile.jsx";
import Dumbell from "./Pages/Product-details/Free-weights/Dumbell.jsx";
import Barbell from "./Pages/Product-details/Free-weights/Barbell.jsx";
import Plates from "./Pages/Product-details/Free-weights/Plates.jsx";
import Bar from "./Pages/Product-details/Free-weights/Bar.jsx";
import Band from "./Pages/Product-details/Free-weights/Band.jsx";
import KettleBell from "./Pages/Product-details/Free-weights/Kettlebell.jsx";
import Balls from "./Pages/Product-details/Free-weights/Balls.jsx";
import WeightBench from "./Pages/Product-details/Free-weights/BenchRack.jsx";
import EquipmentHolder from "./Pages/Product-details/Free-weights/EquipmentHolder.jsx";
import Treadmill from "./Pages/Product-details/Machines/Treadmill.jsx";
import ChestPressMachine from "./Pages/Product-details/Machines/ChestPressMachine.jsx";
import SeatedDipMachine from "./Pages/Product-details/Machines/SeatedDipMachine.jsx";
import LegPressMachine from "./Pages/Product-details/Machines/LegPressMachine.jsx";
import BenchRack from "./Pages/Product-details/Machines/BenchPress.jsx";
import StationaryBicycle from "./Pages/Product-details/Machines/StationaryBicycle.jsx";
import PushUpBar from "./Pages/Product-details/Calisthenics/PushUpBar.jsx";
import PullUpBar from "./Pages/Product-details/Calisthenics/PullUpBar.jsx";
import GymnasticRings from "./Pages/Product-details/Calisthenics/GymnasticRings.jsx";
import Parallettes from "./Pages/Product-details/Calisthenics/Parallettes.jsx";
import AbRoller from "./Pages/Product-details/Calisthenics/AbRoller.jsx";
import IndoorRower from "./Pages/Product-details/Cardio/IndoorRower.jsx";
import AirBike from "./Pages/Product-details/Cardio/AirBike.jsx";
import StairClimber from "./Pages/Product-details/Cardio/StairClimber.jsx";
import WeightTrainingGloves from "./Pages/Product-details/Gears/WeightTrainingGloves.jsx";
import WeightLiftingBelt from "./Pages/Product-details/Gears/WeightLiftingBelt.jsx";
import WristStraps from "./Pages/Product-details/Gears/WristStraps.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/free-weights",
    element: <FreeWeights />,
  },
  {
    path: "/shopnow",
    element: <ShopNow />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/dumbell",
    element: <Dumbell />,
  },
  {
    path: "/barbell",
    element: <Barbell />,
  },
  {
    path: "/plates",
    element: <Plates />,
  },
  {
    path: "/bar",
    element: <Bar />,
  },
  {
    path: "/band",
    element: <Band />,
  },
  {
    path: "/kettlebell",
    element: <KettleBell />
  },
  {
    path: "/balls",
    element: <Balls />
  },
  {
    path: "/weightbench",
    element: <WeightBench />
  },
  {
    path: "/equipment-holder",
    element: <EquipmentHolder />
  },
  {
    path: "/treadmill",
    element: <Treadmill />
  },
  {
    path: "/chest-press-machine",
    element: <ChestPressMachine />
  },
  {
    path: "/seated-dip-machine",
    element: <SeatedDipMachine />
  },
  {
    path: "/leg-press-machine",
    element: <LegPressMachine />
  },
  {
    path: "/bench-rack",
    element: <BenchRack />
  },
  {
    path: "/stationary-bicycle",
    element: <StationaryBicycle />
  },
  {
    path: "/push-up-bar",
    element: <PushUpBar />
  },
  {
    path: "/pull-up-bar",
    element: <PullUpBar />
  },
  {
    path: "/gymnastic-rings",
    element: <GymnasticRings />
  },
  {
    path: "/parallettes",
    element: <Parallettes />
  },
  {
    path: "/ab-roller",
    element: <AbRoller />
  },
  {
    path: "/indoor-rower",
    element: <IndoorRower />
  },
  {
    path: "/stair-climber",
    element: <StairClimber />
  },
  {
    path: "/air-bike",
    element: <AirBike />
  },
  {
    path: "/weight-training-gloves",
    element: <WeightTrainingGloves />
  },
  {
    path: "/weight-lifting-belt",
    element: <WeightLiftingBelt />
  },
  {
    path: "/wrist-straps",
    element: <WristStraps />
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
