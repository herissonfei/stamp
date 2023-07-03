import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import axios from "axios";

import "./Register.css";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [userProfileID, setUserProfileID] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleUserProfileIDChange = (e) => {
        setUserProfileID(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 在这里执行注册逻辑，例如向后端发送注册请求
        const userData = {
            username,
            password,
            email,
            userProfileID,
        };

        axios.post("/register", userData).then((res) => {
            window.location.pathname = '/login'
        });
        // console.log(userData);
        // console.log("注册信息：", username, password, email, userProfileID);
        // 清空表单字段
        setUsername("");
        setPassword("");
        setEmail("");
        setUserProfileID("");
    };
    return (
        <div className="register-container">
            <h2>用户注册</h2>
            <form onSubmit={handleSubmit} method="post">
                <div className="form-group">
                    <label>用户名:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>密码:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>电子邮件地址:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>用户类型:</label>
                    <select
                        value={userProfileID}
                        onChange={handleUserProfileIDChange}
                        className="input-field"
                    >
                        <option value="">选择用户类型</option>
                        <option value="1">普通用户</option>
                        <option value="2">管理员</option>
                    </select>
                </div>
                <button type="submit" className="register-button">
                    注册
                </button>
            </form>
        </div>
    );
}

if (document.getElementById("register")) {
    const Index = ReactDOM.createRoot(document.getElementById("register"));

    Index.render(
        <React.StrictMode>
            <Register />
        </React.StrictMode>
    );
}
