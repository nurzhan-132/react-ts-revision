import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ITodo, IUser } from "../types/types";
import axios from "axios";
import List from "../components/List";
import UserItem from "../components/UserItem";

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const navigate = useNavigate();

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
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          user={user}
          key={user.id}
          onClick={(user) => navigate(`${user.id}`)}
        />
      )}
    />
  );
};

export default UsersPage;
