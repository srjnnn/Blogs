import React from "react";

const styles = {
  nav: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  logo: {
    width: "40px",
    height: "40px",
    border: "2px solid #2563EB", 
    padding: "4px",
  },
  title: {
    color: "#1E3A8A",
    fontSize: "18px",
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#E11D48",
    color: "white",
    padding: "8px 20px",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

const Navbar = () => {

  const [hover, setHover] = React.useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.leftSection}>
        <img
          src="../src/assets/logo.png"
          alt="NepDev Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>NepDev’s Blogs</h1>
      </div>
      <button
        style={{
          ...styles.button,
          backgroundColor: hover ? "#BE123C" : "#E11D48",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        HIRE US
      </button>
    </nav>
  );
};

export default Navbar;
