import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <img src={youtube_icon} alt="YouTube" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src={twitter_icon} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={instagram_icon} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={facebook_icon} alt="Facebook" />
        </a>
      </div>
      <ul className="footer-links">
        <li><a href="#">Audio Description</a></li>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Gift Card</a></li>
        <li><a href="#">Media Center</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Legal Notices</a></li>
        <li><a href="#">Cookie Preferences</a></li>
        <li><a href="#">Corporate Information</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <p className="copyright-text">© 1997-2024 Netflix, Inc.</p>
    </footer>
  );
};

export default Footer;
