import { Routes, Route } from "react-router-dom";

import Profile from "./components/Profile"
import Programs from "./components/Programs"
import Detail from "./components/Detail"
import Wizard from "./components/Wizard"
import WizSetting from "./components/WizSetting"
import Navigator from "./components/Navigator"

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:seq" element={<Detail />} />
          <Route path="/wizard" element={<Wizard />} />
          <Route path="/wizard/setting" element={<WizSetting />} />
        </Routes>
      </div>
      <Navigator />
    </>
  );
}

export default App;
