import React from "react";
import "./ChooseTask.css"; // Assuming you have a separate CSS file

function ChooseTask() {
  return (
    <div className="investment-container">
      <header className="header">
        <h1 className="title">Aspiring Investments</h1>
        <div className="user-info">
          <span className="user-email">user: Sonakshi.bajpai15@gmail.com</span>
          <a href="/logout" className="logout-link">
            logout
          </a>
        </div>
      </header>
      <main className="main-content">
        <div className="card">
          <div className="card-content">
            <span className="profile-type">default</span>
            <div className="button-group">
              <button className="btn edit-btn">Edit</button>
              <button className="btn view-btn">View</button>
              <button className="btn delete-btn">Delete</button>
            </div>
          </div>
          <div className="pagination">
            <span className="prev">« Prev</span>
            <span className="page-number">1</span>
            <span className="next">Next »</span>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-links">
          <a href="/about" className="footer-link">
            About
          </a>
          <a href="/feedback" className="footer-link">
            Feedback
          </a>
          <a href="/faq" className="footer-link">
            FAQ
          </a>
        </div>
        <span className="copyright">© 2011</span>
      </footer>
    </div>
  );
}

export default ChooseTask;
