import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Profile from "./components/profile/Profile.jsx";
import Messages from "./components/messages/Messages.jsx";
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Sidebar />

                <Route path="/profile" render={ () => <Profile profileState={ props.state.profilePage }
                                                               addPost={ props.addPost } /> } />
                <Route path="/messages" render={ () => <Messages messagesState={ props.state.messagesPage } /> } />
            </div>
        </BrowserRouter>
    );
}

export default App;
