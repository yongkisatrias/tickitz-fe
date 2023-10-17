import "./style/App.css";
import "./style/app.mobile.css";

function App() {
  return (
    <div className="App">
      {/* Start Header */}
      <header className="container pt-4 pb-4">
        {/* Navigation Bar */}
        <nav className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-5">
            <img src="/image/logo/Tickitz-1.svg" alt="Tickitz Logo" />
            <a href="#" className="navbar-menu d-desktop">
              Home
            </a>
            <a href="#" className="navbar-menu d-desktop">
              List Movie
            </a>
          </div>
          <button type="button" className="btn btn-primary px-4 btn-sign-up d-desktop">
            Sign Up
          </button>
          <button className="navbar-toggler d-mobile" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <img src="/image/icons/hamburger-menu.svg" />
          </button>
        </nav>
        {/* Navigation Bar Mobile */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item d-flex justify-content-center mt-2 mb-2 navbar-menu">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item d-flex justify-content-center mt-2 mb-2 navbar-menu">
              <a className="nav-link" href="#">
                list Movie
              </a>
            </li>
            <li className="nav-item d-flex justify-content-center mt-2 mb-2 navbar-menu">
              <button type="button" className="btn btn-primary btn-sign-up px-4">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
        {/* Hero content */}
        <section>
          <div className="row align-items-center mt-10 mb-10 hero-content">
            <div className="col-md-6 col-sm-12 text-center">
              <span className="text-muted">Nearest Cinema, Newest Movie, </span>
              <h1 className="text-primary">Find out now!</h1>
            </div>
            <div className="col-md-6 col-sm-12 text-center">
              <img src="/image/hero-image/hero-image.png" alt="Movie Banner" className="hero-image" />
            </div>
          </div>
        </section>
      </header>
      {/* End Header */}

      {/* Start Now Showing */}
      <section id="now-showing">
        <div className="container pt-7 pb-7">
          {/* Header Tittle */}
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="now-showing-tittle-left">Now Showing</h2>
            <a className="now-showing-tittle-right" href="#">
              View All
            </a>
          </div>
          {/* Now Showing Content */}
          <div className="movies-scroll mt-5 mb-5">
            <img className="movie-poster" src="/image/movie-poster/spiderman.jpg" alt="Spiderman" />
            <img className="movie-poster" src="/image/movie-poster/lion-king.jpg" alt="Lion King" />
            <img className="movie-poster" src="/image/movie-poster/john-wick-3.jpg" alt="John Wick 3" />
            <img className="movie-poster" src="/image/movie-poster/black-widow.jpg" alt="Black Widow" />
            <img className="movie-poster" src="/image/movie-poster/tenet.jpg" alt=" Tenet" />
          </div>
        </div>
      </section>
      {/* End Now Showing */}

      {/* Start Upcoming Movies */}
      <section id="upcoming-movies" className="mt-7 mb-7">
        <div className="container pt-5 pb-5">
          {/* Header Tittle */}
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="upcoming-movies-tittle-left">Upcoming Movies</h2>
            <a className="upcoming-movies-tittle-right" href="#">
              View All
            </a>
          </div>
          {/* Movies Month */}
          <div className="text-center month-scroll mt-4">
            <button type="button" className="btn btn-details px-4">
              January
            </button>
            <button type="button" className="btn btn-details px-4">
              February
            </button>
            <button type="button" className="btn btn-details px-4">
              March
            </button>
            <button type="button" className="btn btn-details px-4">
              April
            </button>
            <button type="button" className="btn btn-details px-4">
              May
            </button>
            <button type="button" className="btn btn-details px-4">
              June
            </button>
            <button type="button" className="btn btn-details px-4">
              July
            </button>
            <button type="button" className="btn btn-details px-4">
              August
            </button>
            <button type="button" className="btn btn-details px-4">
              September
            </button>
            <button type="button" className="btn btn-details px-4">
              October
            </button>
            <button type="button" className="btn btn-details px-4">
              November
            </button>
            <button type="button" className="btn btn-details px-4">
              December
            </button>
          </div>
          {/* Movies */}
          <div className="movies-scroll mt-5 mb-5">
            <div>
              <img className="movie-poster" src="/image/movie-poster/black-widow.jpg" alt="Black Widow" />
              <h4 className="text-center mt-2 movie-tittle">Black Widow</h4>
              <h5 className="text-center movie-genres">Action, Adventure, Sci-Fi</h5>
              <div className="d-grid">
                <button className="btn-details mt-2 p-2">Details</button>
              </div>
            </div>
            <div>
              <img className="movie-poster" src="/image/movie-poster/john-wick-3.jpg" alt="Black Widow" />
              <h4 className="text-center mt-2 movie-tittle">John Wick</h4>
              <h5 className="text-center movie-genres">Action, Crime, Thriller</h5>
              <div className="d-grid">
                <button className="btn-details mt-2 p-2">Details</button>
              </div>
            </div>
            <div>
              <img className="movie-poster" src="/image/movie-poster/lion-king.jpg" alt="Black Widow" />
              <h4 className="text-center mt-2 movie-tittle">The Lion King</h4>
              <h5 className="text-center movie-genres">Adventure, Drama, Family</h5>
              <div className="d-grid">
                <button className="btn-details mt-2 p-2">Details</button>
              </div>
            </div>
            <div>
              <img className="movie-poster" src="/image/movie-poster/spiderman.jpg" alt="Black Widow" />
              <h4 className="text-center mt-2 movie-tittle">Spider-Man</h4>
              <h5 className="text-center movie-genres">Adventure, Action, Sci-Fi</h5>
              <div className="d-grid">
                <button className="btn-details mt-2 p-2">Details</button>
              </div>
            </div>
            <div>
              <img className="movie-poster" src="/image/movie-poster/tenet.jpg" alt="Black Widow" />
              <h4 className="text-center mt-2 movie-tittle">Tenet</h4>
              <h5 className="text-center movie-genres">Action, Sci-Fi, Thriller</h5>
              <div className="d-grid">
                <button className="btn-details mt-2 p-2">Details</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Upcoming Movies */}
    </div>
  );
}

export default App;
