import { Link } from 'react-router-dom';
import './phishnet.css';
import React from 'react';
import phish1 from "../../assets/projects/phishnet/phish1.png";
import phish2 from "../../assets/projects/phishnet/phish2.png";
import phish3 from "../../assets/projects/phishnet/phish3.png";
import phish4 from "../../assets/projects/phishnet/phish4.png";
import phish5 from "../../assets/projects/phishnet/phish5.png";

function Phishnet() {
  return (
    <div className="phishnet-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>🛡️ PhishNet – Cybersecurity Awareness Platform</h1>
        <p>
          PhishNet is an interactive web application built to enhance cybersecurity awareness. 
          It simulates real-world phishing attacks, educates users through quizzes, and provides 
          tools to analyze suspicious URLs using the VirusTotal API.
        </p>
        <div className="nav-buttons">
          <Link to="/" className="home-button">🏠 Home</Link>
          <Link to="/projects/phishnet/feedbacks" className="feedback-button">💬 View Feedbacks</Link>
        </div>
      </header>

      {/* Screenshots Section */}
      <section className="screenshots">
        <h2>📸 Application Screenshots</h2>
        <div className="screenshot-gallery">
          <img src={phish1} alt="Login Page" />
          <img src={phish2} alt="URL Analyzer Tool" />
          <img src={phish3} alt="Quiz Module" />
          <img src={phish4} alt="Phishing Simulation" />
          <img src={phish5} alt="Educational Section" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>✨ Key Features</h2>
        <ul>
          <li>🚨 Interactive phishing attack simulations to raise awareness</li>
          <li>🔍 Real-time URL scanning using the VirusTotal API</li>
          <li>🎓 Engaging quizzes to reinforce user learning</li>
          <li>🧠 Tips and educational content to prevent cyber threats</li>
        </ul>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack">
        <h2>🧰 Technology Stack</h2>
        <ul>
          <li><strong>Frontend:</strong> React.js</li>
          <li><strong>Backend:</strong> Node.js</li>
          <li><strong>Authentication:</strong> Firebase Authentication</li>
          <li><strong>Security:</strong> VirusTotal API Integration</li>
        </ul>
      </section>

  <section className="conclusion">
  <h2>🚀 Impact</h2>
  <p>
    PhishNet empowers users with cybersecurity knowledge and detection tools, making it an essential
    tool for students, employees, and internet users across Nepal.
  </p>
</section>
    </div>

    
  );
}

export default Phishnet;
