import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Watchlist from "./pages/Watchlist";
import Search from "./pages/Search.jsx";
import Popup from "./components/PopUp.jsx";


function App() {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/favorite" element={<Favorite />}/>
        <Route path="/watchlist" element={<Watchlist />}/>
        <Route path="/detail/:movie_id" element={<MovieDetail />}/>
      </Routes>
      {Boolean(auth.show_popup) ? <Popup  /> : <></>}
    </>
  )
}

export default App
