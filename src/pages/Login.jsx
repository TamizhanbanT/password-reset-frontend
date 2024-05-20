import React from 'react';
import { Row, Col, Form, Input, Button, message } from "antd";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log("value", values);
        try {
            const response = await fetch('https://password-reset-1-ace6.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const res = await response.json();
            if (res.message === "Login Failed") {
                console.log(res);
                message.error("Invalid Detail");
            } else {
                message.success("Login Success");
                localStorage.setItem("user_data", JSON.stringify(res));
                navigate("/dash");
            }
        } catch (err) {
            message.error("Invalid Detail");
        }
    };

    const navigateToSignup = () => {
        navigate("/Signup");
        console.log("Navigating to Signup");
    };
    const navigateToForgetpass = () => {
        navigate("/Forget password");
        console.log("Navigating to Forget password");
    };

    return (
        <div>
            <Row>
                <Col lg={12}>
                    <Form onFinish={onFinish}>
                        <h1 className='text-center'>User login</h1>
                        <h4>Login</h4>
                        <Form.Item name="email" label="Email ID">
                            <Input id="email" placeholder="123@gmail.com" />
                        </Form.Item>
                        <Form.Item name="password" label="Password">
                            <Input id="password" placeholder="password" type="password" />
                        </Form.Item>
                        <Button htmlType="submit" type="primary">Login</Button>
                    </Form>
                    <Button onClick={navigateToSignup}>Signup</Button>
                    <Button onClick={navigateToForgetpass}>Forget Password</Button>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
