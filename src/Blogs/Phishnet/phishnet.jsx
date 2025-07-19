import { Link } from 'react-router-dom';
import './phishnet.css'; 
import React from 'react';
import phish1 from "../../assets/projects/phishnet/phish1.png" 
import phish2 from "../../assets/projects/phishnet/phish2.png" 
import phish3 from "../../assets/projects/phishnet/phish3.png" 
import phish4 from "../../assets/projects/phishnet/phish4.png" 
import phish5 from "../../assets/projects/phishnet/phish5.png" 

function Phishnet() {
  return (
    <div className="phishnet-container">
      <header className="hero">
        <h1>🛡️ Phishnet</h1>
        <p>A modern cybersecurity awareness app that detects phishing and educates users in real time.</p>
        <Link to="/" className="home-button">🏠 Back to Home</Link>
      </header>

      <section className="screenshots">
        <h2>📸 App Screenshots</h2>
        <div className="screenshot-gallery">
          <img src={phish1} alt="Phishnet Screenshot 1" />
          <img src={phish2} alt="Phishnet Screenshot 2" />
          <img src={phish3} alt="Phishnet Screenshot 3" />
          <img src={phish4} alt="Phishnet Screenshot 4" />
          <img src={phish5} alt="Phishnet Screenshot 5" />
        </div>
      </section>

      <section className="features">
        <h2>📘 App Features & Docs</h2>
        <ul>
          <li>🚨 Phishing Detection using machine learning API</li>
          <li>🎓 Educational quizzes and tips</li>
          <li>🌐 Real-time web scanning</li>
          <li>🧠 Smart URL analyzer</li>
        </ul>
        <p><strong>Tech Stack:</strong> React, Node.js, Firebase Auth, VirusTotal API</p>
      </section>

      <section className="reviews">
        <h2>💬 User Reviews</h2>
        <div className="review">
          <p>"This app saved me from clicking a fake bank link! Absolute lifesaver." – <em>Sam R.</em></p>
        </div>
        <div className="review">
          <p>"Educational and powerful. I now understand phishing better than ever." – <em>Anjali T.</em></p>
        </div>
      </section>
    </div>
  );
}

export default Phishnet;
