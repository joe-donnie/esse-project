import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./AddToBin.css";

const SAVED_WASTE_KEY = "beyondbin-saved-waste";

function readSavedWaste() {
  try {
    const savedWaste = JSON.parse(localStorage.getItem(SAVED_WASTE_KEY));
    return Array.isArray(savedWaste) ? savedWaste : [];
  } catch {
    return [];
  }
}

const binCategories = [
  {
    name: "Organic Waste",
    bin: "Green Bin",
    icon: "✦",
    tone: "organic",
    description: "Food scraps, peels, and garden waste.",
  },
  {
    name: "Paper Waste",
    bin: "Blue Bin",
    icon: "▤",
    tone: "paper",
    description: "Clean paper, books, and cardboard.",
  },
  {
    name: "Plastic Waste",
    bin: "Blue Bin",
    icon: "◇",
    tone: "plastic",
    description: "Containers, bottles, and reusable plastics.",
  },
  {
    name: "Glass Waste",
    bin: "Glass Recycling Bin",
    icon: "◈",
    tone: "glass",
    description: "Bottles, jars, and clean glass containers.",
  },
  {
    name: "Metal Waste",
    bin: "Blue Bin",
    icon: "⊙",
    tone: "metal",
    description: "Cans, tins, and household metal items.",
  },
  {
    name: "E-Waste",
    bin: "E-Waste Collection",
    icon: "⌁",
    tone: "ewaste",
    description: "Devices, cables, and electronic accessories.",
  },
  {
    name: "Battery Waste",
    bin: "Battery Collection",
    icon: "▮",
    tone: "battery",
    description: "Batteries and rechargeable power cells.",
  },
  {
    name: "Hazardous Waste",
    bin: "Hazardous Waste Collection",
    icon: "!",
    tone: "hazardous",
    description: "Paint, chemicals, and potentially harmful materials.",
  },
  {
    name: "Textile Waste",
    bin: "Textile Collection",
    icon: "≋",
    tone: "textile",
    description: "Clothing, fabric, and wearable items.",
  },
  {
    name: "Reject Waste",
    bin: "Reject Bin",
    icon: "—",
    tone: "reject",
    description: "Items that cannot be recovered or recycled.",
  },
];

function AddToBin() {
  const { state } = useLocation();
  const waste = state?.waste;
  const [savedWaste, setSavedWaste] = useState(() => {
    const currentWaste = readSavedWaste();

    if (!waste || currentWaste.some((item) => item.name === waste.name)) {
      return currentWaste;
    }

    const updatedWaste = [...currentWaste, waste];
    localStorage.setItem(SAVED_WASTE_KEY, JSON.stringify(updatedWaste));
    return updatedWaste;
  });
  const [showCollectionForm, setShowCollectionForm] = useState(false);
  const [collectionSubmitted, setCollectionSubmitted] = useState(false);
  const [address, setAddress] = useState({
    fullName: "",
    street: "",
    city: "",
    postalCode: "",
  });

  const visibleWaste = waste && !savedWaste.some((item) => item.name === waste.name)
    ? [waste, ...savedWaste]
    : savedWaste;
  const handlingFee = visibleWaste.length * 4.99;
  const pickupFee = visibleWaste.length > 3 ? 14.99 : 9.99;
  const total = handlingFee + pickupFee;

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setAddress((currentAddress) => ({ ...currentAddress, [name]: value }));
  };

  const handleCollectionSubmit = (event) => {
    event.preventDefault();
    setCollectionSubmitted(true);
  };

  const handleClearBin = () => {
    if (!window.confirm("Clear all saved items from your bin?")) {
      return;
    }

    localStorage.removeItem(SAVED_WASTE_KEY);
    setSavedWaste([]);
    setShowCollectionForm(false);
    setCollectionSubmitted(false);
  };

  return (
    <div className="add-bin-page">
      <nav className="identify-navbar">
        <Link to="/" className="logo logo-link" aria-label="Go to BeyondBin home">
          <span className="logo-icon">♻</span>
          BeyondBin
        </Link>

        <Link to="/identify-waste">← Back to Identify</Link>
      </nav>

      <main className="add-bin-content">
        <div className="add-bin-intro">
          <p className="page-label">YOUR BIN DESTINATION</p>
          <h1>This belongs <span>here.</span></h1>
          <p>
            Based on the waste category, this is the correct place for your item.
          </p>
        </div>

        {visibleWaste.length > 0 ? (
          <>
          {waste && (
            <div className="selected-waste-chip">
              <span className="selected-waste-mark">✓</span>
              <span>Identified item</span>
              <strong>{waste.name}</strong>
              <em>{waste.category}</em>
            </div>
          )}

          {!waste && (
            <div className="saved-bin-heading">
              <div>
                <span>MY SAVED ITEMS</span>
                <strong>{savedWaste.length} {savedWaste.length === 1 ? "item" : "items"}</strong>
              </div>
              <button className="clear-bin-button" type="button" onClick={handleClearBin}>
                Clear bin
              </button>
            </div>
          )}

          <div className={`bin-category-grid ${visibleWaste.length === 1 ? "single-category" : "saved-category-grid"}`}>
            {visibleWaste.map((item) => {
              const category = binCategories.find((entry) => entry.name === item.category);

              if (!category) {
                return null;
              }

              return (
                <div className={`bin-category-card ${category.tone} selected`} key={item.name}>
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-copy">
                    <strong>{item.name}</strong>
                    <small>{category.description}</small>
                  </span>
                  <span className="category-footer">
                    <span className="category-bin">{category.bin}</span>
                    <span className="recommended-tag">Correct destination</span>
                  </span>
                  <span className="category-check">✓</span>
                </div>
              );
            })}
          </div>

          <div className="destination-note">
            <span>✓</span>
            <p>
              {waste
                ? <><strong>{waste.name}</strong> has been saved to your bin.</>
                : <>Your saved items are ready for their correct destinations.</>}
            </p>
          </div>

          <div className="collection-action">
            <div>
              <strong>Need help getting rid of it?</strong>
              <span>Schedule a responsible pickup for your saved items.</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setShowCollectionForm(true);
                setCollectionSubmitted(false);
              }}
            >
              Collect waste <span>→</span>
            </button>
          </div>

          {showCollectionForm && (
            <section className="collection-panel" aria-labelledby="collection-heading">
              {collectionSubmitted ? (
                <div className="collection-success">
                  <span className="collection-success-icon">✓</span>
                  <p className="page-label">COLLECTION REQUEST READY</p>
                  <h2>Your pickup is booked.</h2>
                  <p>
                    We will collect your saved waste from {address.city} at the address provided.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCollectionSubmit}>
                  <div className="collection-panel-heading">
                    <div>
                      <p className="page-label">BILLING & COLLECTION</p>
                      <h2 id="collection-heading">Where should we collect it?</h2>
                    </div>
                    <span className="secure-note">Secure request</span>
                  </div>

                  <div className="collection-layout">
                    <div className="address-fields">
                      <label>
                        Full name
                        <input name="fullName" value={address.fullName} onChange={handleAddressChange} required />
                      </label>
                      <label>
                        Street address
                        <input name="street" value={address.street} onChange={handleAddressChange} required />
                      </label>
                      <div className="field-row">
                        <label>
                          City
                          <input name="city" value={address.city} onChange={handleAddressChange} required />
                        </label>
                        <label>
                          Postal code
                          <input name="postalCode" value={address.postalCode} onChange={handleAddressChange} required />
                        </label>
                      </div>
                    </div>

                    <div className="billing-summary">
                      <div className="billing-summary-title">
                        <span>Pickup summary</span>
                        <strong>{visibleWaste.length} {visibleWaste.length === 1 ? "item" : "items"}</strong>
                      </div>
                      <div className="billing-items">
                        {visibleWaste.map((item) => (
                          <div key={item.name}>
                            <span>{item.name}</span>
                            <strong>$4.99</strong>
                          </div>
                        ))}
                      </div>
                      <div className="billing-line">
                        <span>Pickup fee</span>
                        <strong>${pickupFee.toFixed(2)}</strong>
                      </div>
                      <div className="billing-total">
                        <span>Total</span>
                        <strong>${total.toFixed(2)}</strong>
                      </div>
                      <button className="confirm-collection-button" type="submit">
                        Confirm collection <span>→</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </section>
          )}
          </>
        ) : (
          <div className="empty-bin-state">
            <span className="empty-bin-icon">⌕</span>
            <h2>Identify an item first</h2>
            <p>Search for a waste item to see its correct bin destination.</p>
            <Link to="/identify-waste">Identify waste <span>→</span></Link>
          </div>
        )}
      </main>
    </div>
  );
}

export default AddToBin;