import { rooms } from "@/app/data/staticData";
import RoomCard from "@/app/ui/Booking/RoomCard";

const ListRoom = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {rooms.map((room) => (
        <RoomCard key={room.name} {...room} />
      ))}
    </div>
  );
};

export default ListRoom;
