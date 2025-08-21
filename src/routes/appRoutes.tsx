import Home from "../components/views/pages/Home";
import Pengantar from "../components/lessons/Pengantar";
import L1 from "../components/lessons/L1";
import L2 from "../components/lessons/L2";
import L3 from "../components/lessons/L3";
import L4 from "../components/lessons/L4";

export const appRoutes = [
  { path: "/", element: <Home />, index: true },
  { path: "/pengantar", element: <Pengantar /> },
  { path: "/L1", element: <L1 /> },
  { path: "/L2", element: <L2 /> },
  { path: "/L3", element: <L3 /> },
  { path: "/L4", element: <L4 /> },
];
