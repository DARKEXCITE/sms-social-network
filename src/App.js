import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Profile from "./components/profile/Profile.jsx";
import Messages from "./components/messages/Messages.jsx";

function App() {
  return (
    <>
        <div className="appWrapper">
            <Sidebar />
            <Messages />
        </div>
    </>
  );
}

export default App;
