import "./style/App.css";
import "./style/app.mobile.css";

function App() {
  return (
    <div className="App">
      {/* Start Header */}
      <header class="container pt-4 pb-4">
        {/* Navigation Bar */}
        <nav class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center gap-5">
            <img src="/image/logo/Tickitz-1.svg" alt="Tickitz Logo" />
            <a href="#" class="navbar-menu d-desktop">
              Home
            </a>
            <a href="#" class="navbar-menu d-desktop">
              List Movie
            </a>
          </div>
          <button type="button" class="btn btn-primary px-4 btn-sign-up d-desktop">
            Sign Up
          </button>
          <button class="navbar-toggler d-mobile" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <img src="/image/icons/hamburger-menu.svg" />
          </button>
        </nav>
        {/* Navigation Bar Mobile */}
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item d-flex justify-content-center mt-2 mb-2 navbar-menu">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item d-flex justify-content-center mt-2 mb-2 navbar-menu">
              <a class="nav-link" href="#">
                list Movie
              </a>
            </li>
            <li class="nav-item d-flex justify-content-center mt-2 mb-2 navbar-menu">
              <button type="button" class="btn btn-primary btn-sign-up px-4">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
        {/* Hero content */}
        <section>
          <div class="row align-items-center mt-10 mb-10 hero-content">
            <div class="col-md-6 col-sm-12 text-center">
              <span class="text-muted">Nearest Cinema, Newest Movie, </span>
              <h1 class="text-primary">Find out now!</h1>
            </div>
            <div class="col-md-6 col-sm-12 text-center">
              <img src="/image/hero-image/hero-image.png" alt="Movie Banner" class="hero-image" />
            </div>
          </div>
        </section>
      </header>
      {/* End Header */}
    </div>
  );
}

export default App;
