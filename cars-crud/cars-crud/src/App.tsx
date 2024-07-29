import { Route, Routes } from "react-router-dom";
import Home from "./presentation/pages/Home/Home";
import "./App.css";
import Navbar from "./presentation/components/Navbar/Navbar";
import NewCar from "./presentation/pages/NewCar/NewCar";
import NotFound from "./presentation/pages/NotFound/NotFound";
import EditCar from "./presentation/pages/EditCar/EditCar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/newcar" element={<NewCar />} />
            <Route path="/cardetails/:id" element={<EditCar />} />
            
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
