'use client'
import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useRouter   } from "next/navigation";

const RoomCard = (room) => {
  const router  = useRouter()

  return (
    <div className="cursor-pointer max-w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <Image
        className="object-cover w-full h-60 hover:scale-110 transition duration-500 cursor-pointer"
        src={room.images[0]}
        width="500"
        height="500"
        alt={room.name}
      />
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-800 uppercase dark:text-white">
          {room.name}
        </h1>
        <div className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-4">
          {room.summary}
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-2 bg-amber-500">
        <h1 className="text-lg font-bold text-white">{room.price}đ/giờ</h1>
        <button  onClick={() => router.push(`/booking/${room.name}`)} className="inline-flex items-center mt-2 md:mt-2 px-2 py-2 text-sm border border-transparent font-medium rounded-md text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:border-amber-800 focus:shadow-outline-indigo active:bg-amber-800 transition ease-in-out duration-150">
        <span className="inline-block pr-2">Booking this</span>{" "}
                <ArrowRightCircleIcon className="h-6 w-6"></ArrowRightCircleIcon>
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
