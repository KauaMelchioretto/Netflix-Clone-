import React, { useEffect, useState } from 'react';
import './App.css';
import api from './api';
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie.jsx';


function App() {
  const [featuredData, setFeaturedData] = useState(null);
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();
      setMovieList(list);

      let originals = list.filter(i => i.slug === "originals");
      let randomChosen = Math.floor(Math.random() * originals[0].items.results.length -1);

      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await api.getMovieInfo(chosen.id);
      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, []);
  return (
    <main>
      {featuredData &&
      <FeaturedMovie item={featuredData}/> }
      <section className="lists">
      {movieList.map((item, key) => (
      <MovieRow key={key} title={item.title} items={item.items} />
      ))}
        </section>
    </main>
  );
}

export default App;