import React, {useState} from 'react'


function CookieBanner() {

  const [showBanner, setBannerState] = useState(!(window.localStorage.getItem("Cookie-seen") === "seen"))

  const handleAccept = () => {
    window.localStorage.setItem("Cookie-seen", "seen")
    setBannerState(false);
  }
  const handleLeave = () => {
    window.location.assign("https://www.google.co.uk/");
  }


  if (showBanner) {
    return (
      <div className="cookie-container">
        <div className="cookie-banner shadow">
          <h3>Cookies & Analytics</h3>
          <p>This site uses Cookies and Analytics to make this site work better.</p>
          <p>Any anonymised data is only collected to measure how the site is being used.</p>

          <div className="cookie-button-row">
            <button className="close-button" onClick={handleAccept}>Accept</button>
            <button className="close-button" onClick={handleLeave}>Leave</button>
          </div>
        </div>
      </div>
    )
  }
  else {
    return null
  }
}

export default CookieBanner;
