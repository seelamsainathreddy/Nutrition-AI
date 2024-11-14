import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from './components/Home';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import { ProfilePage } from './components';
import Console from './routes/Console'
import ChatArea from './components/ChatArea';


function Root() {
  const [token, setToken] = useState(null);

  return (
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage token={token}/>} />

          </Route>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/console" element={<Console />}>
            <Route path="home" element={<Home />} />
            <Route path="" element={<ChatArea />} />

          </Route>



        </Routes>
      </HashRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);