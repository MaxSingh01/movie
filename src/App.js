import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleBottomNavigation from "./components/MainNav/MainNav";
import Movie from "./Pages/Movie/Movie";
import TvShows from "./Pages/TvShow/TvShows";
import Search from "./Pages/Search/Search";
import Trending from "./Pages/Trending/Trending";
import firebase from "./service/Firebase";
import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
   user? <Router>
      <Header user= {user}/>
      <div className="app">
        <Routes>
          <Route path="" element={<Trending />} exact />
          <Route path="/movies" element={<Movie />} />
          <Route path="/series" element={<TvShows />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      <SimpleBottomNavigation />
    </Router> : <Home />
  );
}

export default App;
