
import React from "react";
import "./MovieRow.css";

export default ({title, items}) => {
    const listW = items.results.length * 150;
  return(
    <div className = 'movieRow'>
      <h2>{title}</h2>
      <div className='movierow--listarea'>
        <div className='movierow--list' style={{width: listW}}>
          {items.results.length > 0 && items.results.map((item, key)=>(
            <div className="movierow--item">
              <img src=
                {`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              />
            </div>
      ))}
        </div>
      </div>
    </div>
  )
}