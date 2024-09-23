import React, { useEffect, useState } from "react";
import "./App.css";
import Card, { CardType } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";
import axios from "axios";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users",
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <Card height="100px" width="100px" type={CardType.outlined}>
        <button>Click me!</button>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;
