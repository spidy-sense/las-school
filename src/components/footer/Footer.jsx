import "./footer.css";

import { 
    FaFacebook,
    FaInstagram,
    FaWhatsapp
} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer">
            <div className="grid-container-footer" style={{ 'display': 'grid', 'gridTemplateColumns': 'auto auto auto' }}>
                <div>
                    <h2>Little Angels School</h2>
                    <h4 style={{ 'margin': '0', 'fontWeight': '600' }}>Kothi S.G. Mehndi, Gabhariya, Sultanpur</h4>
                    <h4 style={{ 'margin': '0', 'fontWeight': '600' }}>Uttar Pradesh. India 228001</h4>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <h4>8279846706</h4>
                    <button className="footButton">Contact Us</button>
                </div>
                <div style={{ 'paddingTop': '1rem' }}>
                    <FaFacebook style={{ 'fontSize': '40px', 'marginRight': '2rem' }} />
                    <FaInstagram style={{ 'fontSize': '40px', 'marginRight': '2rem' }} />
                    <FaWhatsapp style={{ 'fontSize': '40px' }} />
                </div>
            </div>
            <div className="fText">Copyright © 2022 Lamabooking.</div>
        </div>
    );
};

export default Footer;