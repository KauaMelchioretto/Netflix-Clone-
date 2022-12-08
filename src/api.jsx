const BASE_PARAMS = `language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`;
const basicFetch = async(endPoint) => {
  const req = await fetch(`${process.env.REACT_APP_API_BASE}${endPoint}`);
  return req.json();
}

export default{
  getHomeList: async()=>{
    return[
      {
        slug: 'originals', 
        title:'Originais do Netflix', 
        items: await basicFetch(`/discover/tv?with_network=213&${BASE_PARAMS}`)
      },
      {
        slug: 'trending', 
        title:'Recomendados para você', 
        items: await basicFetch(`/trending/all/week?${BASE_PARAMS}`)
      },
      {
        slug: 'toprated', 
        title:'Em Alta', 
        items: await basicFetch(`/movie/top_rated?${BASE_PARAMS}`)
      },
      {
        slug: 'action', 
        title:'Ação', 
        items: await basicFetch(`/discover/movie?with_genres=28&${BASE_PARAMS}`)
      },
      {
        slug: 'comedy', 
        title:'Comédia', 
        items: await basicFetch(`/discover/movie?with_genres=35&${BASE_PARAMS}`)
      },
      {
        slug: 'horror', 
        title:'Terror', 
        items: await basicFetch(`/discover/movie?with_genres=27&${BASE_PARAMS}`)
      },
      {
        slug: 'romance', 
        title:'Romance', 
        items: await basicFetch(`/discover/movie?with_genres=10749&${BASE_PARAMS}`)
      },
      {
        slug: 'documentary', 
        title:'Documentários', 
        items: await basicFetch(`/discover/movie?with_genres=99&${BASE_PARAMS}`)
      }
    ]
  },
   getMovieInfo: async (movieId) => {
      let info = await basicFetch(`/tv/${movieId}?${BASE_PARAMS}`);
      return info;
  }
}