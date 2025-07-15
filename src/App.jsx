import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Production from "./pages/Production/Production";
import Layout from "./components/Layout/Layout";
import Viewed from "./pages/Viewed/Viewed";
import Favourite from "./pages/Favourite/Favourite";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Viewed" element={<Viewed />}></Route>
        <Route path="/Favourite" element={<Favourite />}></Route>
      </Route>
      <Route path="/product/:id" element={<Production />}></Route>
    </Routes>
  );
}

export default App;
