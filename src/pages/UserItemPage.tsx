import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { IUser } from "../types/types";

interface UserItemParams {
  id: string;
}
const UserItemPage = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<keyof UserItemParams>();
  const navigate = useNavigate();

  async function fetchUserById() {
    const response = await axios.get<IUser>(
      "https://jsonplaceholder.typicode.com/users/" + params.id,
    );
    setUser(response.data);
  }
  useEffect(() => {
    fetchUserById();
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          navigate("/users");
        }}
      >
        Back
      </button>
      <h1>Fetched user: {user?.name}</h1>
      <h3>
        {user?.id}. {user?.name} {user?.email}
      </h3>
    </div>
  );
};

export default UserItemPage;
