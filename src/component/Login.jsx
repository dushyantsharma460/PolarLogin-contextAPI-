import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() && password.trim()) {
            setUser({ username: username.trim(), password: password.trim() });
        }
    };

    const isDisabled = !(username.trim() && password.trim());

    return (
        <div className="w-full max-w-sm bg-white p-6 mt-6 rounded-xl shadow-lg border border-blue-100">
            <h2 className="text-xl font-semibold text-blue-700 mb-4 text-center">Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full mb-3 p-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full mb-4 p-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
                onClick={handleSubmit}
                disabled={isDisabled}
                className={`w-full py-2 rounded-lg font-semibold text-white transition ${
                    isDisabled
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600'
                }`}
            >
                Submit
            </button>
        </div>
    );
}

export default Login;
