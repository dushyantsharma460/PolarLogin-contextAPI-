import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <div className="text-center mt-6 text-blue-600 text-lg font-medium">
                Please Login to see your profile 🧊
            </div>
        );
    }

    return (
        <div className="mt-6 bg-blue-50 px-6 py-4 rounded-lg shadow border border-blue-200 text-center">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Welcome, {user.username} 🐾</h3>
            <p className="text-blue-600">You are now logged in securely!</p>
        </div>
    );
}

export default Profile;
