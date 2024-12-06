import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Dublin from "./pages/Dublin";
import London from "./pages/London";
import Lisbon from "./pages/Lisbon";
import SuggestACity from "./pages/SuggestACity";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='dublin' element={<Dublin />} />
            <Route path='london' element={<London />} />
            <Route path='lisbon' element={<Lisbon />} />
            <Route path='suggestacity' element={<SuggestACity />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
