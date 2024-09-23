import React, { ChangeEvent, MouseEvent, DragEvent, useState } from "react";

const EventsExample = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const logValue = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(value);
  };

  const dragHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log("DRAG");
  };
  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  return (
    <div>
      <input value={value} onChange={changeValue} />
      <button onClick={logValue}>Button</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: "red" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "blue" : "red",
          marginTop: 20,
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
