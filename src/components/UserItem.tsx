import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <h3 onClick={() => onClick(user)}>
      {user.id}. {user.name} lives in {user.address.city}, address:{" "}
      {user.address.street}
    </h3>
  );
};

export default UserItem;
