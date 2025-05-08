import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MainPage from "./views/MainPage";
import ReservationsProvider from "./providers/ReservationsProvider";

function App() {
  return (
    <ReservationsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </ReservationsProvider>
  );
}

export default App;
