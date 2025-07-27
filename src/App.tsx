// Package Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Backend Route
import { appRoutes } from "./routes/appRoutes";
// Layout Component
import Layout from "./components/views/templates/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {appRoutes.map((route, index) =>
            route.index ? (
              <Route index element={route.element} key={index} />
            ) : (
              <Route path={route.path} element={route.element} key={index} />
            )
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
