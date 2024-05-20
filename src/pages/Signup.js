import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom'
import { message } from 'antd';
const SignupForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        
        email: '',
        password: '',
        
        
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://password-reset-1-ace6.onrender.com/register', formData);
            console.log(formData);
            console.log(response.data); // handle response as needed
            // Redirect or show a success message
            message.success("Sign up successfull")
            navigate("/")
        } catch (error) {
            console.error('Error:', error);
            message.error("Email already registered try another")
            // Show an error message to the user
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
               

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>

                <button type="submit" className="signup-btn">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;