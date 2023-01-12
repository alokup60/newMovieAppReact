import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import movieApi from "./movieApi.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {movieApi.map((e, index) => {
          return (
            <Movie
              key={index}
              img={e.Poster}
              title={e.Title}
              year={e.Year}
              imbd={e.imdbID}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
