import { Routes, Route, Link } from "react-router-dom";

import Profile from "./components/Profile"
import Navigator from "./components/Navigator"

const Prof2 = () => <>prof2</>

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Navigator />
    </>
  );
}

export default App;
