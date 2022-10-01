import { Button, Form, Input,message } from "antd";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();


  const onFinish = async (values)=>{
    try {
        const response = await axios.post('/api/users/login',values)
        localStorage.setItem('token',JSON.stringify({...response.data,password:""}))
        message.success('login successful')
        navigate('/')
    } catch (error) {
        message.error('please enter valid mail id and password')
    }
}

useEffect(()=>{
  if(localStorage.getItem('token')){
       navigate('/')
  }
},[])

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Welcome Back</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>

          
          <Button className="primary-button my-2 full-width-button" htmlType="submit">
            LOGIN
          </Button>

          <Link to="/register" className="anchor mt-2">
            CLICK HERE TO REGISTER
          </Link>
         
        </Form>
      </div>
    </div>
  );
}

export default Login;
