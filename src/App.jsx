import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import IdentifyWaste from "./IdentifyWaste";
import AddToBin from "./AddToBin";
import Recycle from "./Recycle";

function Home() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="logo logo-link" aria-label="Go to BeyondBin home">
          <span className="logo-icon">♻</span>
          <span>BeyondBin</span>
        </Link>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </div>

        <Link to="/identify-waste" className="nav-button">Get Started</Link>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="badge">
            🌱 Smart waste management for a cleaner future
          </div>

          <h1>
            Don't just throw it.
            <span>Think Beyond the Bin.</span>
          </h1>

          <p>
            BeyondBin helps you identify waste, choose the right bin,
            discover ways to reuse or recycle items, and manage your
            waste more responsibly.
          </p>

          <div className="hero-buttons">
            <Link to="/identify-waste" className="primary-button hero-action-button">
              <span className="hero-button-icon identify-icon" aria-hidden="true">⌕</span>
              <span>Identify Waste</span>
            </Link>

            <Link to="/add-to-bin" className="secondary-button hero-action-button">
              <span className="hero-button-icon" aria-hidden="true">🗑</span>
              <span>My Bin</span>
            </Link>

            <Link to="/recycle" className="secondary-button hero-action-button">
              <span className="hero-button-icon recycle-icon" aria-hidden="true">♻</span>
              <span>Recycle</span>
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>4+</strong>
              <span>Waste Categories</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Eco-Focused</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Smart Guidance</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="floating-icon icon-one">🍎</div>
          <div className="floating-icon icon-two">📱</div>
          <div className="floating-icon icon-three">🥤</div>

          <div className="bin-card">
            <div className="bin-top">
              <span>Waste Assistant</span>
              <span className="online-dot"></span>
            </div>

            <div className="question">
              What should I do with this?
            </div>

            <div className="waste-preview">
              <div className="waste-image">📱</div>

              <div>
                <h3>Old Smartphone</h3>
                <p>Electronic Waste</p>
              </div>
            </div>

            <div className="recommendation">
              <div className="recommendation-icon">♻</div>

              <div>
                <strong>Recommended Action</strong>
                <p>
                  Take it to an e-waste collection centre.
                </p>
              </div>
            </div>

            <Link to="/identify-waste" className="analyze-button">
              View Disposal Options →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section" id="features">
        <div className="section-heading">
          <p className="section-label">WHAT BEYONDBIN CAN DO</p>

          <h2>
            Waste management made
            <span> simple.</span>
          </h2>

          <p>
            Make better decisions about your waste with simple,
            practical tools designed for everyday use.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Identify Waste</h3>
            <p>
              Find out what type of waste you have and which category
              it belongs to.
            </p>
            <Link to="/identify-waste">Identify now →</Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">♻️</div>
            <h3>Reuse & Recycle</h3>
            <p>
              Discover practical ways to reuse, recycle, or responsibly
              dispose of unwanted items.
            </p>
            <a href="#how-it-works">Explore options →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚛</div>
            <h3>Special Pickup</h3>
            <p>
              Request special collection for waste that needs separate
              handling or disposal.
            </p>
            <a href="#how-it-works">Request pickup →</a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Track Your Waste</h3>
            <p>
              View your personal waste-management activity and track
              your progress toward better habits.
            </p>
            <a href="#how-it-works">View dashboard →</a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section" id="how-it-works">
        <div className="section-heading">
          <p className="section-label">HOW IT WORKS</p>

          <h2>
            Better waste decisions in
            <span> 3 simple steps.</span>
          </h2>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>
            <div className="step-icon">🔎</div>
            <h3>Identify</h3>
            <p>
              Enter or select the item you want to dispose of.
            </p>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <div className="step-icon">🗑️</div>
            <h3>Choose</h3>
            <p>
              Learn which category and bin your waste belongs to.
            </p>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <div className="step-icon">🌱</div>
            <h3>Act</h3>
            <p>
              Reuse, recycle, request a pickup, or dispose responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="about">
        <div>
          <p className="section-label">MAKE A DIFFERENCE</p>

          <h2>
            Every item has a better
            <span> destination.</span>
          </h2>

          <p>
            Start making smarter waste decisions with BeyondBin.
          </p>
        </div>

        <Link to="/identify-waste" className="primary-button">
          Start Using BeyondBin →
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Link to="/" className="logo logo-link" aria-label="Go to BeyondBin home">
          <span className="logo-icon">♻</span>
          <span>BeyondBin</span>
        </Link>

        <p>
          Smart choices. Cleaner cities. A sustainable future.
        </p>

        <p className="copyright">
          © 2026 BeyondBin. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/identify-waste"
          element={<IdentifyWaste />}
        />
        <Route path="/add-to-bin" element={<AddToBin />} />
        <Route path="/recycle" element={<Recycle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;