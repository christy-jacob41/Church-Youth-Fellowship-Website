import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faTwitter,
    faInstagram,
    faSpotify,
    faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="social-container">
                <h3 className="social-title">Social Media</h3>
                <div className="social-icons">
                    <a
                        href="https://www.youtube.com/channel/UCzRruSFTEadiUhAIpjTzM8A"
                        className="youtube social"
                    >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="https://twitter.com/CMCyf?s=20" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                        href="https://www.instagram.com/carrollton_soldiers/?hl=en"
                        className="instagram social"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                        href="https://open.spotify.com/playlist/5ElhZEfZPHfomaZGinLzPr?si=gU5-dBhYQKSPPw2WN5wqoQ"
                        className="spotify social"
                    >
                        <FontAwesomeIcon icon={faSpotify} />
                    </a>
                    <a
                        href="https://photos.google.com/share/AF1QipPYWyrFXWXwEQHBAuDgfR4SXDm5w8BwkyXcDOet-Hf3ADa-gN7bV-3s8S01xwdUMw?key=bnpWajF5SThPaW0xeWtPTFJmSHJSa2ttQTJsNEdB"
                        className="googleplus social"
                    >
                        <FontAwesomeIcon icon={faGooglePlus} />
                    </a>
                </div>
                <h3 className = "address">Mar Thoma Church of Dallas, Carrollton</h3>
                <h3 className = "address">1400 W Frankford Rd, Carrollton, TX 75007</h3>
            </div>
        </div>
    )
}

export default Footer;