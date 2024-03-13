"use client";

import { EyeIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const TalentCard = ({ name, image, followers, views }) => {
  return (
    <div className="w-full p-4 shadow-md rounded-lg overflow-hidden bg-white/50 backdrop-blur-sm">
      <Image
        src={`${image}`}
        alt={`${name} Profile`}
        className="w-full h-50 object-cover rounded-full mx-auto mb-2"
        width={400}
        height={400}
      />
      <h3 className="text-lg font-medium text-center">{name}</h3>
      <div className="flex flex-row text-sm justify-start">
        <EyeIcon className="w-5 h-5 text-amber-500 pr-1 font-bold"></EyeIcon>
        <p>{followers} Followers</p>
      </div>
      <div className="flex flex-row text-sm justify-start">
        <StarIcon className="w-5 h-5 text-amber-500 pr-1 font-bold"></StarIcon>
        <p>{views} Views</p>
      </div>
    </div>
  );
};

export default TalentCard;
