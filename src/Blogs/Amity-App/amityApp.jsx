import React from "react";
import { Link } from "react-router-dom";
import "./amityApp.css";
// import screenshot1 from "./assets/amity1.png";
// import screenshot2 from "./assets/amity2.png"; 

const AmityApp = () => (
  <div className="amity-container">
    <header className="amity-hero">
      <h2>📚 Amity-App</h2>
      <p>Welcome to the official page for the Amity-App — a smart academic collaboration and communication tool for schools.</p>
      <Link to="/" className="home-button">🏠 Back to Home</Link>
    </header>

    <section className="amity-screenshots">
      <h3>📸 App Screenshots</h3>
      <div className="screenshot-gallery">
        {/* <img src={screenshot1} alt="Amity App Screenshot 1" /> */}
        {/* <img src={screenshot2} alt="Amity App Screenshot 2" /> */}
      </div>
    </section>

    <section className="amity-features">
      <h3>🚀 Features</h3>
      <ul>
        <li>Group chats & announcements for classrooms</li>
        <li>Teacher-student resource sharing</li>
        <li>Daily attendance and assignment tracking</li>
        <li>Parent notifications and school-wide alerts</li>
      </ul>
    </section>

    <section className="amity-tech">
      <h3>🛠️ Tech Stack</h3>
      <p>React, Firebase, Node.js, Cloud Messaging, TailwindCSS</p>
    </section>

    <section className="amity-reviews">
      <h3>💬 User Feedback</h3>
      <div className="review">
        <p>"Perfect tool for organizing class discussions and notes." – <em>Aayush M.</em></p>
      </div>
      <div className="review">
        <p>"Our students are way more engaged now!" – <em>Ms. Sharma</em></p>
      </div>
    </section>
  </div>
);

export default AmityApp;
