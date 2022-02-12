import { Routes, Route } from "react-router-dom";

import Profile from "./components/Profile"
import Programs from "./components/Programs"
import Navigator from "./components/Navigator"

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
      </div>
      <Navigator />
    </>
  );
}

export default App;
