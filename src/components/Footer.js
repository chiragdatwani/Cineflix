import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="dev-name">
      <a 
        href="https://github.com/chiragdatwani/Cineflix"
        target='_blank'
        rel="noreferrer"
        style={{textDecoration:'none'}}
      >
        <img src={process.env.PUBLIC_URL + "/GitHub-Mark-Light-64px.png"} alt="github"/>
        <h4 className="dev-name-h3">Chirag Datwani</h4>
        </a>
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
    </footer>
  );
}

export default Footer;
