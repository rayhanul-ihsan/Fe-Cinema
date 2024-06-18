import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Favorite from "./pages/Favorite";
import MovieDetail from "./pages/MovieDetail";
import { useSelector } from "react-redux";
import Popup from "./components/PopUp";


function App() {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorite" element={<Favorite />}/>
        <Route path="/watchlist" element={<Watchlist />}/>
        <Route path="/detail/:movie_id" element={<MovieDetail />}/>
      </Routes>
      {Boolean(auth.show_popup) ? <Popup  /> : <></>}
    </>
  )
}

export default App
