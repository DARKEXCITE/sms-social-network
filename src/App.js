import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Profile from "./components/profile/Profile.jsx";

function App() {
  return (
    <>
        <div className="appWrapper">
            <Sidebar />
            <Profile />
        </div>
    </>
  );
}

export default App;
