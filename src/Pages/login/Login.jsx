import background from '../../attachments/register-bg.jpg';

import Dropdown from 'react-dropdown';
import NavbarHead from '../../components/navbar/NavbarHead';

import emailjs from '@emailjs/browser';

const Login = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_1uy17g8', 'template_8d8v8oi', e.target, 'SDuR3WrF1GpqSSKly')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });

        e.target.reset();
    }
    
    return (
        <>
            <NavbarHead />
            <div>
                <div className="register-form">
                    <h2 style={{ 'fontSize': '35px', 'marginTop': '0', 'paddingTop': '2rem' }}>Contact Us</h2>

                    <form onSubmit={sendEmail}>
                        <div style={{ 'padding': '0 2rem' }}>
                            <div>
                                <div className="formInput">
                                <label>Name:</label>
                                <input type="text" name="user_name" placeholder="Enter name" />
                                </div>
                                
                                <div className="formInput">
                                <label>Email:</label>
                                <input type="text" name="user_email" placeholder="Enter email" />
                                </div>

                                <div className="formInput">
                                <label>Message</label>
                                <input type="textarea" name="message" placeholder="Enter message" />
                                </div>

                            </div>
                        </div>
                        <input type="submit" className="submitButton" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login