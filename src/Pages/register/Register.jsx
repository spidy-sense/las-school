import './register.css';

import background from '../../attachments/register-bg.jpg';
import { useRef } from 'react';

import Dropdown from 'react-dropdown';
import NavbarHead from '../../components/navbar/NavbarHead';
import { useState } from 'react';

import emailjs from '@emailjs/browser';

const Register = () => {
    const [gender, setGender] = useState('male');

    const handleChange = (e) => {
        setGender({ gender: e.target.value });
    }
    const handleClick = e => {
        e.preventDefault();
        // const inputData = {};

        const inputData = {
            user_name: e.target.elements.user_name.value,
            mother_name: e.target.elements.mother_name.value,
            father_name: e.target.elements.father_name.value,
            date_birth: e.target.elements.date_of_birth.value,
            gender: gender,
            user_mobile: e.target.elements.user_mobile.value,
            user_email: e.target.elements.user_email.value
        };
        emailjs.send('service_1uy17g8', 'template_k0uzw6p', inputData, 'SDuR3WrF1GpqSSKly')
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
                    <h2 style={{ 'fontSize': '35px', 'marginTop': '0', 'paddingTop': '2rem' }}>Send us a message</h2>
                    <h4 style={{ 'fontSize': '14px' }}>Submit the form for the query of addmission</h4>

                    <form onSubmit={handleClick}>
                        <div className="grid-container-register" style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(2,1fr)', 'width': '90%', 'gap': '2rem' }}>
                            <div>
                                <div className="formInput">
                                <label>Name of Applicant:</label>
                                <input type="text" name="user_name" placeholder="Enter Name" required />
                                </div>
                                
                                <div className="formInput">
                                <label>Mother's NAme:</label>
                                <input type="text" name="mother_name" placeholder="Enter name" required />
                                </div>

                                <div className="formInput">
                                <label>Gender</label>
                                <select onChange={handleChange}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    
                                </select>
                                </div>

                                <div className="formInput">
                                <label>Mobile No."</label>
                                <input type="number" name="user_mobile" placeholder="Enter Mobile Number" required />
                                </div>

                            </div>

                            <div>
                                <div className="formInput">
                                <label>Father's Name:</label>
                                <input type="text" name="father_name" placeholder="Enter Name" required />
                                </div>

                                <div className="formInput"><label>Date of Birth (in YYYY-mm-dd format)</label>
                                <input type="text" name="date_of_birth" placeholder="Enter Date in YYYY-mm-dd" required /></div>

                                <div className="formInput"><label>Email</label>
                                <input type="email" name="user_email" placeholder="Enter Email" required /></div>
                                
                            </div>
                        </div>
                        <input type="submit" value="Submit" className="submitButton" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register