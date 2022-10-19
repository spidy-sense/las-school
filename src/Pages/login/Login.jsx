import background from '../../attachments/register-bg.jpg';
import { useRef } from 'react';

import Dropdown from 'react-dropdown';
import NavbarHead from '../../components/navbar/NavbarHead';

const Login = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    }
    const handleClick = e => {
        e.preventDefault();
        console.log()
    }

    return (
        <>
            <NavbarHead />
            <div>
                <div className="register-form">
                    <h2 style={{ 'fontSize': '35px', 'marginTop': '0', 'paddingTop': '2rem' }}>Contact Us</h2>

                    <form ref={form} onSubmit={sendEmail}>
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
                        <button className="submitButton" onClick={handleClick}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login