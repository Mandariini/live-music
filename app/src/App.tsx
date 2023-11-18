import { Route, Routes, Link } from "react-router-dom";

import Home from "./components/Home";
import Lobby from "./components/Lobby";

const Menu = () => {
  const padding = {
    paddingRight: 5,
  };
  return (
    <div>
      <Link to="/" style={padding}>
        Home
      </Link>
    </div>
  );
};

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lobby/:id" element={<Lobby />} />
      </Routes>
    </div>
  );
}

export default App;
