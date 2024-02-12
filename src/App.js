import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        {/* <Route path="/images" component={Imagepage} /> */}
      </Routes>
    </div>
  );
}

export default App;
