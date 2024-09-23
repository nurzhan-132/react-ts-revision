import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <h3>
      {user.id}. {user.name} lives in {user.address.city}, address:{" "}
      {user.address.street}
    </h3>
  );
};

export default UserItem;
