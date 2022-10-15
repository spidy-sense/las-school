import background from '../../attachments/register-bg.jpg';
import Navbar from '../../components/navbar/Navbar';
import { useRef } from 'react';

import Dropdown from 'react-dropdown';

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
            <Navbar />
            <div>
                <img src={background} style={{ 'width': '100%', 'height': '94.4vh', 'backgroundSize': 'cover', 'filter':'brightness(10%)', 'display': 'block' }} />

                <div className="register-form">
                    <h2 style={{ 'fontSize': '35px' }}>Send us a message</h2>
                    <h4 style={{ 'fontSize': '14px' }}>Submit the form for the query of addmission</h4>

                    <form ref={form} onSubmit={sendEmail}>
                        <div>
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