import "./App.css";
import Home from "/src/Components/Pages/Home";
import RootLayout from "./Components/Layout/RootLayout";
import { Routes, Route } from "react-router-dom";
import About from "./Components/Pages/About";
import Shop from "./Components/Pages/Shop";
import Error from "./Components/Pages/Error";
import { Contact } from "./Components/Pages/Contact";
import Journal from "./Components/Pages/Journal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="journal" element={<Journal />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
