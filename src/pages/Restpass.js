import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom'
import { message } from 'antd';
const Resetpass = () => {
    const navigate = useNavigate()
    const [Tok,Settok]=useState()
    const [formData, setFormData] = useState({
        
        userId: '',
        password: '',
        
        
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleChange1 = (e) => {
        Settok( e.target.value );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`https://password-reset-1-ace6.onrender.com/api/reset/${Tok}`, formData);
            console.log(formData);
            console.log(response.data); // handle response as needed
            // Redirect or show a success message
            message.success("reset successful")
            navigate("/")
        } catch (error) {
            console.error('Error:', error);
            message.error("error resetting password")
            // Show an error message to the user
        }
    };

    return (
        <div className="signup-container">
            <h2>Reset password</h2>
            <form onSubmit={handleSubmit} className="signup-form">
               

                <div className="form-group">
                    <label htmlFor="userId">userId:</label>
                    <input type="text" id="userId" name="userId" value={formData.userId} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="Tok">Token:</label>
                    <input type="text" id="Tok" name="Tok" value={Tok} onChange={handleChange1} required />
                </div>

                <div className="form-group">
                    <label htmlFor="password"> New Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>

                <button type="submit" className="signup-btn">submit</button>
            </form>
        </div>
    );
};

export default Resetpass;