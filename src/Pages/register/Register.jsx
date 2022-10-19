import './register.css';

import background from '../../attachments/register-bg.jpg';
import { useRef } from 'react';

import Dropdown from 'react-dropdown';
import NavbarHead from '../../components/navbar/NavbarHead';

const Register = () => {
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
                    <h2 style={{ 'fontSize': '35px', 'marginTop': '0', 'paddingTop': '2rem' }}>Send us a message</h2>
                    <h4 style={{ 'fontSize': '14px' }}>Submit the form for the query of addmission</h4>

                    <form ref={form} onSubmit={sendEmail}>
                        <div className="grid-container-register" style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(2,1fr)', 'width': '90%', 'gap': '2rem' }}>
                            <div>
                                <div className="formInput">
                                <label>Name of Applicant:</label>
                                <input type="text" name="user_name" placeholder="Enter Name" />
                                </div>
                                
                                <div className="formInput">
                                <label>Mother's NAme:</label>
                                <input type="text" name="mother_name" placeholder="Enter name" />
                                </div>

                                <div className="formInput">
                                <label>Gender</label>
                                <select>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    
                                </select>
                                </div>

                                <div className="formInput">
                                <label>Mobile No."</label>
                                <input type="number" name="user_mobile" placeholder="Enter Mobile Number" />
                                </div>

                            </div>

                            <div>
                                <div className="formInput">
                                <label>Father's Name:</label>
                                <input type="text" name="father_name" placeholder="Enter Name" />
                                </div>

                                <div className="formInput"><label>Date of Birth (in YYYY-mm-dd format)</label>
                                <input type="text" name="date_of_birth" placeholder="Enter Date in YYYY-mm-dd" /></div>

                                <div className="formInput"><label>Email</label>
                                <input type="email" name="user_email" placeholder="Enter Email" /></div>
                                
                            </div>
                        </div>
                        <button className="submitButton" onClick={handleClick}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register