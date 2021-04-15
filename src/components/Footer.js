import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="dev-name">
        <h4 className="dev-name-h3">&copy; Chirag Datwani</h4>
      </div>
      <a 
        href="https://www.themoviedb.org/"
        target='_blank'
        rel="noreferrer"
        style={{textDecoration:'none'}}
      >
        <div className="tmdb">
          <h4>Powered By</h4>
          <img
              className="tmdb-logo"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
              alt="tmdb-logo"
            />
        </div>
      </a>
    </div>
  );
}

export default Footer;
