import { Routes, Route } from "react-router-dom";

import Profile from "./components/Profile"
import Programs from "./components/Programs"
import Detail from "./components/Detail"
import Navigator from "./components/Navigator"

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:seq" element={<Detail />} />
        </Routes>
      </div>
      <Navigator />
    </>
  );
}

export default App;
