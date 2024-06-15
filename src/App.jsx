import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Favorite from "./pages/Favorite";
import MovieDetail from "./pages/MovieDetail";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorite" element={<Favorite />}/>
        <Route path="/watchlist" element={<Watchlist />}/>
        <Route path="/detail" element={<MovieDetail />}/>
      </Routes>
    </>
  )
}

export default App
