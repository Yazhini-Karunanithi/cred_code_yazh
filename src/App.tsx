import "./styles.css";

function App() {
  const featureData = [
    {
      title: "Credit Card Payments",
      description:
        "Pay your credit card bills instantly with a seamless payment experience.",
    },
    {
      title: "Rewards",
      description: "Earn exciting rewards and benefits on every payment.",
    },
    {
      title: "Credit Score Tracking",
      description: "Track and monitor your credit score easily in real time.",
    },
    {
      title: "UPI Payments",
      description: "Fast and secure UPI transactions for daily payments.",
    },
    {
      title: "CRED Coins",
      description: "Collect CRED coins and redeem premium offers and rewards.",
    },
    {
      title: "Cashback",
      description:
        "Get cashback benefits on selected payments and partner brands.",
    },
  ];

  const statsData = [
    {
      number: "12M+",
      text: "Users",
      button: "→ Explore",
    },
    {
      number: "4.8★",
      text: "Play Store Rating",
      button: "View Ratings",
    },
    {
      number: "99%",
      text: "Secure Payments",
      button: "Learn More",
    },
  ];

  const securityData = [
    {
      icon: "🔒",
      title: "256-bit Encryption",
      description:
        "Industry-level encryption keeps your transactions and information fully protected.",
    },
    {
      icon: "💳",
      title: "Secure Payments",
      description:
        "Fast and secure payment systems with multiple layers of protection.",
    },
    {
      icon: "🛡️",
      title: "Data Protection",
      description:
        "Your personal data is securely managed with trusted privacy standards.",
    },
  ];

  return (
    <div className="app">
      {/* HERO SECTION */}

      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">EXCLUSIVE REWARDS PLATFORM</p>

          <h1>
            Rewards for <br />
            people who pay <br />
            smartly.
          </h1>

          <p className="hero-description">
            Experience premium rewards, secure payments and exclusive benefits
            with a modern financial platform designed for trusted users.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="playstore-icon"
              >
                <path
                  fill="#34A853"
                  d="M325.3 234.3L104.6 3.7C97.5-3.4 86.7-1 82.4 8.1L256 256 325.3 234.3Z"
                />

                <path
                  fill="#4285F4"
                  d="M256 256L82.4 503.9c4.3 9.1 15.1 11.5 22.2 4.4l220.7-230.6L256 256Z"
                />

                <path
                  fill="#FBBC05"
                  d="M325.3 277.7L104.6 508.3c-7.1 7.1-17.9 4.7-22.2-4.4L256 256l69.3 21.7Z"
                />

                <path
                  fill="#EA4335"
                  d="M423.1 186.3L325.3 234.3 256 256l69.3 21.7 97.8-48.9c11.7-11.7 11.7-30.7 0-42.5Z"
                />
              </svg>
              Download
            </button>

            <button className="secondary-btn">Explore More</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop"
            alt="cred"
          />

          <div className="hero-badge">Trusted by 12M+ users</div>
        </div>

        <div className="floating-circle one"></div>
        <div className="floating-circle two"></div>
      </section>

      {/* FEATURES */}

      <section className="features">
        <h2>Features</h2>

        <div className="feature-container">
          {featureData.map((item, index) => (
            <div className="feature-card" key={index}>
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}

      <section className="stats">
        <h2>Trusted by Millions</h2>

        <div className="stats-container">
          {statsData.map((item, index) => (
            <div className="stat-card" key={index}>
              <h3>{item.number}</h3>

              <p>{item.text}</p>

              <button>{item.button}</button>
            </div>
          ))}
        </div>
      </section>

      {/* SECURITY */}

      <section className="security">
        <h2>Security First</h2>

        <p className="security-subtext">
          Your payments and personal information are protected with advanced
          encryption and trusted security systems.
        </p>

        <div className="security-container">
          {securityData.map((item, index) => (
            <div className="security-card" key={index}>
              <div className="security-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>CRED</h2>

            <p>
              Premium experience for rewards, secure payments and financial
              trust.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Company</h3>

              <p>About</p>
              <p>Careers</p>
            </div>

            <div className="footer-column">
              <h3>Legal</h3>

              <p>Privacy Policy</p>
              <p>Terms</p>
            </div>

            <div className="footer-column">
              <h3>Social</h3>

              <p>Instagram</p>
              <p>LinkedIn</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 CRED Clone. Built using React.js</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
