import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import CityPage from "./pages/CityPage";
import SuggestACity from "./pages/SuggestACity";
import { CityProvider } from "./CityContext";

function App() {
  return (
    <CityProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='/city/:cityName' element={<CityPage />} />
            <Route path='suggestacity' element={<SuggestACity />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CityProvider>
  );
}

export default App;
