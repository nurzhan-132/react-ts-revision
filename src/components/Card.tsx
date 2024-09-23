import React, { FC, ReactNode } from "react";

export enum CardType {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width: string;
  height: string;
  children: ReactNode;
  type: CardType;
}

const Card: FC<CardProps> = ({ width, height, children, type }) => {
  return (
    <div
      style={{
        width,
        height,
        border: type === CardType.outlined ? "1px solid gray" : "none",
        background: type === CardType.primary ? "lightgray" : "",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
