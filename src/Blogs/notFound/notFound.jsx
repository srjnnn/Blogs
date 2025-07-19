import { Link } from 'react-router-dom';

const styles = {
  container: {
    minHeight: '100%',
    width : "100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  code: {
    fontSize: '8rem',
    fontWeight: '900',
    marginBottom: '1rem',
    textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
  },
  message: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },
  info: {
    maxWidth: '400px',
    opacity: 0.85,
    marginBottom: '2rem',
  },
  button: {
    backgroundColor: 'white',
    color: '#000DFF',
    padding: '0.75rem 2rem',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '1rem',
    textDecoration: 'none',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#e0e0ff',
  },
};

export default function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.code}>404</div>
      <div style={styles.message}>Oops! Page Not Found</div>
      <div style={styles.info}>
        The page you’re looking for doesn’t exist or has been moved.  
        But don’t worry, you can find plenty of other cool stuff on the homepage.
      </div>
      <Link to="/" style={styles.button}>
        Go Home
      </Link>
    </div>
  );
}
