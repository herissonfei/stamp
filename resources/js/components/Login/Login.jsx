import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./Login.css";

export default function Login() {
    const [name, setUserName] = useState("");

    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUserEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        // 在这里执行登录逻辑，例如向后端发送登录请求
        axios.post("/login", userData).then((res) => {
            console.log(res);
            setUserName(res.data)
            // window.location.pathname = "/home";
           

            // window.location.pathname = '/login'
        });
        console.log(name);
        console.log("登录信息：", email, password);
        // 清空表单字段
        setUserEmail("");
        setPassword("");
    };
    return (
        <div className="login-container">
            <h2>登录页面</h2>
            <form onSubmit={handleSubmit} action="login" method="post">
                <div className="form-group">
                    <label>邮箱:</label>
                    <input
                        type="text"
                        value={email}
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
                <button type="submit" className="login-button">
                    登录
                </button>
                {/* <Link to="#">Test</Link> */}
            </form>
        </div>
    );
}

if (document.getElementById("login")) {
    const Index = ReactDOM.createRoot(document.getElementById("login"));

    Index.render(
        <React.StrictMode>
            <Login />
        </React.StrictMode>
    );
}
