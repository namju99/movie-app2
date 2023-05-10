import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Celebrity from "./pages/Celebrity";
import TV from "./pages/Tv";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";






function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
           <Route path="/" element={<Home />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:title" element={<MovieDetail />} />
          <Route path="/person" element={<Celebrity />}/>
          <Route path="/tv" element={<TV />}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>


      </BrowserRouter>
    </div>

    
  );
}

export default App;
