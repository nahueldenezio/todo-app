import { useState } from "react";
import axios from "axios";
import { Link } from "../Link";

export default function Login() {

    const [data, setData] = useState({
        user: 'admin',
        psw: 'admin'
    });

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        let newData = {...data, [name]: value};
        setData(newData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!e.target.username.value || !e.target.password.value) {
            alert("Please fill in all fields");
            return;
        }
        axios.post("http://localhost:3000/user/login", data)
    }

    return (
        <>
        <div className="form-container">
            <h1>Welcome to ToDo</h1>
            <p>Log in to your account</p>
            <form onSubmit={handleSubmit} className="form-login">
                <div className="form-inputs">
                <input className="input-login" onChange={handleInputChange} value={data.user} type="text" id="username" name="user" placeholder="Username"/>
                <input className="input-login" onChange={handleInputChange} value={data.psw} type="password" id="password" name="psw" placeholder="Password"/>
                </div>
            </form>
            </div>
                {/* <button className="button-login" type="submit">Login</button> */}
                <Link className="button-login" to={'/todo'}>Login</Link>
                <a className="register-link" href="/register">Create user</a>
        </>
    );
}

