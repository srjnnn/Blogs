import React from 'react';
import { Link } from 'react-router-dom';
import './phishnet.css';

const PhishnetFeedbacks = () => {
  return (
    <div className="phishnet-container">
      <header className="hero">
        <h1>💬 User Feedback – Phishnet</h1>
        <p>What our users say about Phishnet</p>
        <Link to="/projects/phishnet" className="home-button">⬅️ Back to App Overview</Link>
      </header>

      <section className="reviews">
        <div className="review">
          <p>"This app saved me from clicking a fake bank link! Absolute lifesaver." – <em>Sam R.</em></p>
        </div>
        <div className="review">
          <p>"Educational and powerful. I now understand phishing better than ever." – <em>Anjali T.</em></p>
        </div>
        <div className="review">
          <p>"Perfect for schools and offices. We use it for training new employees." – <em>CyberNepal</em></p>
        </div>
      </section>
    </div>
  );
};

export default PhishnetFeedbacks;
