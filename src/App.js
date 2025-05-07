import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MainPage from "./views/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
