import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import AppBar from "./components/AppBar";
import LeftBar from "./components/LeftBar";
import VideoCard from "./components/VideoCard";
import VideoGrid from "./components/VideoGrid";
import Home from "./pages/Home";
import SingleVideoPage from "./pages/SingleVideoPage";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/*" element={<div>Not found</div>}></Route>
        <Route path="/video/:id" element={<SingleVideoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
