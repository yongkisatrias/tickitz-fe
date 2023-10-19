import React from "react";

function Movie(props) {
  const { poster, tittle, genres } = props;

  return (
    <div>
      <img
        className="movie-poster"
        width={"100%"}
        src={poster}
        alt="movie poster"
      />
      <h4 className="text-center mt-2 movie-tittle single-text">{tittle}</h4>
      <h5 className="text-center movie-genres">
        {genres?.map((item, key) => (
          <span>{genres.length - 1 === key ? item : `${item}, `}</span>
        ))}
      </h5>
      <div className="d-grid">
        <button className="btn-details mt-2 p-2">Details</button>
      </div>
    </div>
  );
}

export default Movie;
