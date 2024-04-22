"use client";

import FormCreateRoom from "./formCreate";

export default function RoomCreate({ params }) {  
  const data = {
    name: "",
    description: "",
    type: "PHONG_TRON",
    price: 0, 
  };
  
  return (
    <FormCreateRoom room={data}></FormCreateRoom>
  );
}
