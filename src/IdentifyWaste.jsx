import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./IdentifyWaste.css";
import wasteData from "./data/wasteData";

function IdentifyWaste() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedWaste, setSelectedWaste] = useState(null);

  // Find items that match what the user types
  const filteredItems = wasteData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // When user clicks a suggestion
  const handleSelect = (item) => {
    setSearch(item.name);
    setSelectedWaste(item);
  };

  const handleAddToBin = () => {
    navigate("/add-to-bin", { state: { waste: selectedWaste } });
  };

  return (
    <div className="identify-page">

      {/* Navbar */}
      <nav className="identify-navbar">
        <Link to="/" className="logo logo-link" aria-label="Go to BeyondBin home">
          <span className="logo-icon">♻</span>
          BeyondBin
        </Link>

        <a href="/">← Back to Home</a>
      </nav>

      <main className="identify-content">

        <p className="page-label">WASTE IDENTIFICATION</p>

        <h1>
          What waste do you
          <span> want to identify?</span>
        </h1>

        <p className="page-description">
          Enter the item you want to dispose of and BeyondBin will
          help you identify its waste category and the correct bin.
        </p>

        {/* Search Area */}
        <div className="search-container">

          <div className="search-box">

            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedWaste(null);
              }}
              placeholder="Example: apple, battery, plastic..."
            />

            <button>
              Identify Waste
            </button>

          </div>

          {/* Search Suggestions */}
          {search.length > 0 && !selectedWaste && (
            <div className="suggestions" role="listbox" aria-label="Waste suggestions">

              <div className="suggestions-heading">
                <span>Suggested matches</span>
                <small>{filteredItems.length} {filteredItems.length === 1 ? "result" : "results"}</small>
              </div>

              {filteredItems.length > 0 ? (

                filteredItems.slice(0, 8).map((item) => (

                  <button
                    type="button"
                    className="suggestion-item"
                    key={item.name}
                    onClick={() => handleSelect(item)}
                    role="option"
                  >
                    <span className="suggestion-icon">⌕</span>
                    <div>
                      <strong>{item.name}</strong>
                      <small>{item.category}</small>
                    </div>
                    <span className="suggestion-arrow">↗</span>
                  </button>

                ))

              ) : (

                <div className="no-results">
                  No matching waste item found.
                </div>

              )}

            </div>
          )}

        </div>

        {/* Selected Waste Result */}
        {selectedWaste && (

          <div className="waste-result">

            <div className="result-header">
              <h2>{selectedWaste.name}</h2>
              <span className="result-category">
                {selectedWaste.category}
              </span>
            </div>

            <div className="result-details">

              <div className="detail-card">
                <span>🗑️</span>
                <div>
                  <small>Recommended Bin</small>
                  <strong>{selectedWaste.bin}</strong>
                </div>
              </div>

              <div className="detail-card">
                <span>♻️</span>
                <div>
                  <small>Disposal Method</small>
                  <strong>{selectedWaste.disposal}</strong>
                </div>
              </div>

              <div className="detail-card">
                <span>♻</span>
                <div>
                  <small>Recyclable</small>
                  <strong>
                    {selectedWaste.recyclable ? "Yes" : "No"}
                  </strong>
                </div>
              </div>

              <div className="detail-card">
                <span>🌱</span>
                <div>
                  <small>Reusable</small>
                  <strong>
                    {selectedWaste.reusable ? "Yes" : "No"}
                  </strong>
                </div>
              </div>

            </div>

            <button className="result-action" type="button" onClick={handleAddToBin}>
              Add to a bin <span>→</span>
            </button>

          </div>

        )}

        {/* Common Waste Items */}
        <div className="popular-section">

          <h2>Common Waste Items</h2>

          <div className="waste-items">

            <div
              className="waste-item"
              onClick={() =>
                handleSelect(
                  wasteData.find(
                    (item) => item.name === "Plastic Bottle"
                  )
                )
              }
            >
              <span>🥤</span>
              <p>Plastic Bottle</p>
            </div>

            <div
              className="waste-item"
              onClick={() =>
                handleSelect(
                  wasteData.find(
                    (item) => item.name === "Old Phone"
                  )
                )
              }
            >
              <span>📱</span>
              <p>Old Phone</p>
            </div>

            <div
              className="waste-item"
              onClick={() =>
                handleSelect(
                  wasteData.find(
                    (item) => item.name === "Food Waste"
                  )
                )
              }
            >
              <span>🍎</span>
              <p>Food Waste</p>
            </div>

            <div
              className="waste-item"
              onClick={() =>
                handleSelect(
                  wasteData.find(
                    (item) => item.name === "Battery"
                  )
                )
              }
            >
              <span>🔋</span>
              <p>Battery</p>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default IdentifyWaste;