import { BrowserRouter, Routes, Route } from "react-router-dom";
import SansLogin from "./components/templates/SansLogin";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SansLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

