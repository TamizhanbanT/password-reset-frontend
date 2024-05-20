import React from 'react';
import { Row, Col, Form, Input, Button, message } from "antd";
import { useNavigate } from 'react-router-dom';

const Forgetpass = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log("value", values);
        try {
            const response = await fetch('https://password-reset-1-ace6.onrender.com/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const res = await response.json();

            console.log(res)
            if (res.error === "User not found") {
                console.log(res);
                message.error("Invalid Detail");
            } else {
                message.success("Email sent to registered email id");
                localStorage.setItem("user_data", JSON.stringify(res));
                navigate("/Reset password");
            }
        } catch (err) {
            message.error("Invalid Detail");
        }
    };

    return (
        <div>
            <Row>
                <Col lg={12}>
                    <Form onFinish={onFinish}>
                        <h1 className='text-center'></h1>
                        <h4>Forget password</h4>
                        <Form.Item name="email" label="Email ID">
                            <Input id="email" placeholder="123@gmail.com" />
                        </Form.Item>
                        
                        <Button htmlType="submit" type="primary">verify link</Button>
                    </Form>
                    
                </Col>
            </Row>
        </div>
    );
};

export default Forgetpass;
