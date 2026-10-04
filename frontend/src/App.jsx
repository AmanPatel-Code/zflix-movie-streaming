import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import MyList from "./pages/MyList";
import Genre from "./pages/Genre";
import MovieDetails from "./pages/MovieDetails";
import Watch from "./pages/Watch";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        {/* Main pages */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/movies"
          element={<Movies />}
        />

        <Route
          path="/series"
          element={<TVShows />}
        />

        <Route
          path="/my-list"
          element={<MyList />}
        />

        {/* Genre */}

        <Route
          path="/genre/:genre"
          element={<Genre />}
        />

        {/* Movie */}

        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />

        <Route
          path="/watch/:id"
          element={<Watch />}
        />

        {/* User */}

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        {/* Authentication */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
        

      
        
      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;