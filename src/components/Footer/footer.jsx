import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerSection}>
        <h4>About Us</h4>
        <ul style={styles.listStyle}>
          <li><a href="/about">Our Story</a></li>
          <li><a href="/team">Team</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>
      </div>
      <div style={styles.footerSection}>
        <h4>Customer Service</h4>
        <ul style={styles.listStyle}>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/faqs">FAQs</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/shipping">Shipping & Returns</a></li>
        </ul>
      </div>
      <div style={styles.footerSection}>
        <h4>Follow Us</h4>
        <ul style={styles.listStyle}>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
        </ul>
      </div>
      <div style={styles.footerSection}>
        <h4>Legal</h4>
        <ul style={styles.listStyle}>
          <li><a href="/terms">Terms of Use</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
      <div style={styles.copyRight}>
        © {new Date().getFullYear()} SuperCoolShop. All rights reserved.
      </div>
    </footer>
  );
};

// Inline CSS styles
const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    color: '#333',
    marginTop: '20px',
    flexWrap: 'wrap',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
  },
  listStyle: {
    listStyleType: 'none',
    padding: 0,
  },
  copyRight: {
    textAlign: 'center',
    width: '100%',
    marginTop: '20px',
  },
};

export default Footer;
