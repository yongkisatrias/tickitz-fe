import React from "react";

function Movie() {
  return (
    <div>
      <img
        className="movie-poster"
        src="/image/movie-poster/black-widow.jpg"
        alt="Black Widow"
      />
      <h4 className="text-center mt-2 movie-tittle">Black Widow</h4>
      <h5 className="text-center movie-genres">Action, Adventure, Sci-Fi</h5>
      <div className="d-grid">
        <button className="btn-details mt-2 p-2">Details</button>
      </div>
    </div>
  );
}

export default Movie;
