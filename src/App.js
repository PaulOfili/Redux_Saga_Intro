import React from 'react';
import './App.css';
import Loader from "./components/Loader";
import Button from "./components/Button";
import UserList from "./components/UsersList";

function App() {
  return (
    <div className="App">
        <br />
        <br />
      <Button />
      <Loader />
      <UserList />
    </div>
  );
}

export default App;
