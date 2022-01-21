import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-items">
        <span className="header"></span>

        <div className="login-input">
          <form className="loginForm" method="POST">
            <div className="field">
              <label className="label" for="username">
                Phone number, username, or email
              </label>
              <input
                type="text"
                className="cm-input"
                name="text"
                placeholder="Phone number, username or email address"
                required
              />
              <button className="field-btn"></button>
            </div>

            <div className="field">
              <label className="label" for="password">
                Password
              </label>
              <input
                type="password"
                className="cm-input"
                name="password"
                placeholder="Password"
                required
              />
              <button className="field-btn2">Show</button>
            </div>

            <div className="btn-container">
              <button type="submit" className="login-btn" disabled>
                Log In
              </button>
            </div>

            <div class="separator">
              <div class="line"></div>
              <p>OR</p>
              <div class="line"></div>
            </div>

            <div className="login-alt">
              <div className="login-icon">
                <img
                  className="img-icon"
                  src="https://img.icons8.com/fluency/2x/facebook.png"
                  alt=""
                  width="20"
                />
                <span className="icon-text">Log in with Facebook</span>
              </div>
            </div>
            <a className="forgot-password" href="wink">
              Forgotten your password?
            </a>
          </form>
        </div>
      </div>

      <div className="account-container">
        <div className="account">
          <p className="account-text">
            Don't have an account?<span className="sign-up">Sign up</span>
          </p>
        </div>
      </div>

      <div className="app-container">
        <div className="getApp">
          <p className="app-text">Get the app.</p>
        </div>

        <div className="appStore">
          <img
            className="app-image"
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
            alt=""
            height="40"
          />
          <img
            className="app-image"
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
            alt=""
            height="40"
          />
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-items">
          <p className="fm-item">Meta</p>
          <p className="fm-item">About</p>
          <p className="fm-item">Blog</p>
          <p className="fm-item">Jobs</p>
          <p className="fm-item">Help</p>
          <p className="fm-item">Api</p>
          <p className="fm-item">Privacy</p>
          <p className="fm-item">Terms</p>
          <p className="fm-item">Top accounts</p>
          <p className="fm-item">Hashtags</p>
          <p className="fm-item">Locations</p>
          <p className="fm-item">Instagram Lite</p>
        </div>

        {/* select drop down compoent
        <div className='select-container'>
          <div className='selected-item'>
            <input placeholder='Select Country' disabled/>
            <i class='fal fa-chevron-down'></i>
          </div>
          {true && (
            <div className='select-options'>
              <p className='fm-item'>Privacy</p>
              <p className='fm-item'>Terms</p>
              <p className='fm-item'>Top accounts</p>
              <p className='fm-item'>Hashtags</p>
              <p className='fm-item'>Locations</p>
              <p className='fm-item'>Instagram Lite</p>
            </div>
          )}
        </div> */}

        <div className="footer-items2">
          <div className="select-container">
            <label className="select-text" for="language">
              English (UK)
            </label>

            <div className="select-items">
              <input type="text" className="language-input" disabled />
              <i class="fal fa-chevron-down"></i>

              {false && (
                <div
                  className="select-options"
                  placeholder="select a language..."
                >
                  <option value="AF">Afrikaans</option>
                  <option value="SQ">Albanian</option>
                  <option value="AR">Arabic</option>
                  <option value="HY">Armenian</option>
                  <option value="EU">Basque</option>
                  <option value="BN">Bengali</option>
                  <option value="BG">Bulgarian</option>
                  <option value="CA">Catalan</option>
                  <option value="KM">Cambodian</option>
                  <option value="ZH">Chinese (Mandarin)</option>
                  <option value="HR">Croatian</option>
                  <option value="CS">Czech</option>
                  <option value="DA">Danish</option>
                  <option value="NL">Dutch</option>
                  <option value="EN">English</option>
                  <option value="ET">Estonian</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finnish</option>
                  <option value="FR">French</option>
                  <option value="KA">Georgian</option>
                  <option value="DE">German</option>
                  <option value="EL">Greek</option>
                  <option value="GU">Gujarati</option>
                  <option value="HE">Hebrew</option>
                  <option value="HI">Hindi</option>
                  <option value="HU">Hungarian</option>
                  <option value="IS">Icelandic</option>
                  <option value="ID">Indonesian</option>
                  <option value="GA">Irish</option>
                  <option value="IT">Italian</option>
                  <option value="JA">Japanese</option>
                  <option value="JW">Javanese</option>
                  <option value="KO">Korean</option>
                  <option value="LA">Latin</option>
                  <option value="LV">Latvian</option>
                  <option value="LT">Lithuanian</option>
                  <option value="MK">Macedonian</option>
                  <option value="MS">Malay</option>
                  <option value="ML">Malayalam</option>
                  <option value="MT">Maltese</option>
                  <option value="MI">Maori</option>
                  <option value="MR">Marathi</option>
                  <option value="MN">Mongolian</option>
                  <option value="NE">Nepali</option>
                  <option value="NO">Norwegian</option>
                  <option value="FA">Persian</option>
                  <option value="PL">Polish</option>
                  <option value="PT">Portuguese</option>
                  <option value="PA">Punjabi</option>
                  <option value="QU">Quechua</option>
                  <option value="RO">Romanian</option>
                  <option value="RU">Russian</option>
                  <option value="SM">Samoan</option>
                  <option value="SR">Serbian</option>
                  <option value="SK">Slovak</option>
                  <option value="SL">Slovenian</option>
                  <option value="ES">Spanish</option>
                  <option value="SW">Swahili</option>
                  <option value="SV">Swedish </option>
                  <option value="TA">Tamil</option>
                  <option value="TT">Tatar</option>
                  <option value="TE">Telugu</option>
                  <option value="TH">Thai</option>
                  <option value="BO">Tibetan</option>
                  <option value="TO">Tonga</option>
                  <option value="TR">Turkish</option>
                  <option value="UK">Ukrainian</option>
                  <option value="UR">Urdu</option>
                  <option value="UZ">Uzbek</option>
                  <option value="VI">Vietnamese</option>
                  <option value="CY">Welsh</option>
                  <option value="XH">Xhosa</option>
                </div>
              )}
            </div>
          </div>

          <div className="trademark">
            <p className="trade-text">
              <i class="fal fa-copyright"></i>2022 Instagram from Meta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
