import Image from "next/image";
import ListRoom from "@/app/ui/Booking/ListRoom";
import BookingForm from "@/app/ui/Booking/BookingForm";

export default function booking() {
  return (
    <div className="mt-[72px]">
      <div
        className="w-full bg-center bg-cover h-[38rem]"
        style={{backgroundImage: "url('/room-hero.jpg')"}}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
              Studio tại <span className="text-amber-400">Lancer Media</span>
            </h1>
            <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-amber-600 rounded-md lg:w-auto hover:bg-amber-500 focus:outline-none focus:bg-amber-500">
              Đặt lịch studio
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-300 min-h-96">
        <div className="container py-20 px-24 mx-auto">
          <ListRoom></ListRoom>
        </div>
      </div>
    </div>
  );
}
