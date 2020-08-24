import React from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Content.jsx";

function App() {
  return (
    <>
        <Header />

        <div className="app-wrapper container">
            <Sidebar />
            <Content />
        </div>
    </>
  );
}

export default App;
