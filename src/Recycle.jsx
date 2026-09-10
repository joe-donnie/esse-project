import { Link } from "react-router-dom";
import "./Recycle.css";

const recyclingGuides = [
  {
    name: "Organic waste",
    tone: "organic",
    icon: "✦",
    bin: "Green Bin",
    description: "Turn food scraps and garden cuttings into useful compost.",
    steps: ["Keep food scraps loose or in a compostable liner.", "Drain excess liquid before adding it.", "Include fruit, vegetables, coffee grounds, and leaves."],
    avoid: "Avoid plastic packaging, glass, and liquids.",
  },
  {
    name: "Paper & cardboard",
    tone: "paper",
    icon: "▤",
    bin: "Blue Bin",
    description: "Clean, dry paper can become new paper products.",
    steps: ["Flatten boxes to save space.", "Remove food residue, tape, and plastic wrap.", "Keep paper dry and place it loose in the bin."],
    avoid: "Avoid greasy pizza sections, tissues, and waxed paper.",
  },
  {
    name: "Plastic",
    tone: "plastic",
    icon: "◇",
    bin: "Blue Bin",
    description: "Give containers a quick rinse before sending them on.",
    steps: ["Empty and rinse bottles and containers.", "Replace lids after draining the container.", "Reuse sturdy containers before recycling them."],
    avoid: "Avoid soft wrappers, foam, and tangled plastic bags.",
  },
  {
    name: "Glass",
    tone: "glass",
    icon: "◈",
    bin: "Glass Recycling Bin",
    description: "Bottles and jars can be recycled into new glass.",
    steps: ["Empty and rinse bottles and jars.", "Remove food residue and loose lids.", "Handle broken glass separately and carefully."],
    avoid: "Avoid mirrors, ceramics, drinking glasses, and light bulbs.",
  },
  {
    name: "Metal",
    tone: "metal",
    icon: "⊙",
    bin: "Blue Bin",
    description: "Cans and tins are valuable materials when kept clean.",
    steps: ["Empty and rinse cans.", "Push sharp lids inside the can.", "Flatten larger cans only when safe to do so."],
    avoid: "Avoid paint tins, gas canisters, and hazardous metal parts.",
  },
  {
    name: "E-waste",
    tone: "ewaste",
    icon: "⌁",
    bin: "E-Waste Collection",
    description: "Devices need specialist recycling to recover components safely.",
    steps: ["Back up and erase personal data.", "Remove batteries where possible.", "Take devices to an authorised e-waste centre."],
    avoid: "Never place electronics or chargers in household bins.",
  },
  {
    name: "Batteries",
    tone: "battery",
    icon: "▮",
    bin: "Battery Collection",
    description: "Separate batteries to prevent fires and recover materials.",
    steps: ["Tape the terminals of loose batteries.", "Store them in a cool, dry place.", "Use a dedicated battery drop-off point."],
    avoid: "Never put batteries in recycling or general waste bins.",
  },
  {
    name: "Textiles",
    tone: "textile",
    icon: "≋",
    bin: "Textile Collection",
    description: "Clothing and fabric can be reused before being recycled.",
    steps: ["Wash and dry clothing first.", "Donate wearable pieces when possible.", "Bag clean fabric to keep it dry."],
    avoid: "Avoid wet, mouldy, or oil-soaked textiles.",
  },
];

function Recycle() {
  return (
    <div className="recycle-page">
      <nav className="identify-navbar recycle-navbar">
        <Link to="/" className="logo logo-link" aria-label="Go to BeyondBin home">
          <span className="logo-icon">♻</span>
          BeyondBin
        </Link>
        <Link to="/">← Back to Home</Link>
      </nav>

      <main className="recycle-content">
        <header className="recycle-intro">
          <p className="page-label">THE RECYCLING GUIDE</p>
          <h1>Give every material a <span>second life.</span></h1>
          <p>
            Small preparation steps make a big difference. Find your category,
            prepare it properly, and send it to the right destination.
          </p>
        </header>

        <section className="recycle-grid" aria-label="Recycling categories">
          {recyclingGuides.map((guide) => (
            <article className={`recycle-card ${guide.tone}`} key={guide.name}>
              <div className="recycle-card-top">
                <span className="recycle-icon">{guide.icon}</span>
                <span className="recycle-bin">{guide.bin}</span>
              </div>
              <h2>{guide.name}</h2>
              <p className="recycle-description">{guide.description}</p>
              <div className="recycle-card-section">
                <span className="recycle-section-label">Prepare it</span>
                <ul>
                  {guide.steps.map((step) => <li key={step}>{step}</li>)}
                </ul>
              </div>
              <p className="recycle-avoid"><strong>Keep out:</strong> {guide.avoid}</p>
            </article>
          ))}
        </section>

        <section className="recycle-bottom-note">
          <span>♻</span>
          <div>
            <strong>When in doubt, check first.</strong>
            <p>Rules can vary by area. Confirm with your local collection service before putting an unusual item in a bin.</p>
          </div>
          <Link to="/identify-waste">Identify an item <span>→</span></Link>
        </section>
      </main>
    </div>
  );
}

export default Recycle;
