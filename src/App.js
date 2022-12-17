
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";


function App() {

  return (
    <div className="App">
     <Landing/>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
