import React from "react";
import { Link } from "react-router-dom";

function Movie(props) {
  const { poster, tittle, genres, slug } = props;

  return (
    <div>
      <Link to={`/detail/${slug}`} style={{ textDecoration: "none" }}>
        <img
          className="movie-poster movie-center-mobile"
          width={"100%"}
          src={poster}
          alt="movie poster"
        />
      </Link>
      <h4 className="text-center mt-2 movie-tittle single-text movie-center-mobile">
        {tittle}
      </h4>
      <h5 className="text-center movie-genres">
        {genres?.map((item, key) => (
          <span>{genres.length - 1 === key ? item : `${item}, `}</span>
        ))}
      </h5>
      <Link to={`/detail/${slug}`} style={{ textDecoration: "none" }}>
        <div className="d-grid">
          <button className="btn btn-details mt-2 p-2">Details</button>
        </div>
      </Link>
    </div>
  );
}

export default Movie;
