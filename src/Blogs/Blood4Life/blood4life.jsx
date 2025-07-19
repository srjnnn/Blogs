import React from "react";
import { Link } from "react-router-dom";
import "./blood4life.css";

const Blood4life = () => (
  <div className="blood4life-container">
    <header className="blood-hero">
      <h2>🩸 Blood4Life</h2>
      <p>A real-time platform that connects blood donors and recipients based on blood group and location — because every second counts.</p>
      <Link to="/" className="home-button">🏠 Back to Home</Link>
    </header>

    <section className="blood-screenshots">
      <h3>📸 App Screenshots</h3>
      <div className="screenshot-gallery">
        {/* <img src={screenshot1} alt="Blood4Life Screenshot 1" /> */}
        {/* <img src={screenshot2} alt="Blood4Life Screenshot 2" /> */}
      </div>
    </section>

    <section className="blood-features">
      <h3>⚙️ Features</h3>
      <ul>
        <li>Live donor-recipient matching based on location & blood group</li>
        <li>Request board with urgency level</li>
        <li>Smart notifications and donor availability toggle</li>
        <li>Donor history, badges & impact stats</li>
      </ul>
    </section>

    <section className="blood-tech">
      <h3>🛠️ Tech Stack</h3>
      <p>React, Supabase, Node.js, Google Maps API, TailwindCSS</p>
    </section>

    <section className="blood-reviews">
      <h3>💬 What Users Say</h3>
      <div className="review">
        <p>"I received 3 donor responses within 10 minutes of posting. Incredible." – <em>Ravi S.</em></p>
      </div>
      <div className="review">
        <p>"I donated blood through Blood4Life and it felt meaningful. Amazing app!" – <em>Sita R.</em></p>
      </div>
    </section>
  </div>
);

export default Blood4life;
