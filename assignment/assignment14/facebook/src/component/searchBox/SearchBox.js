import React from "react";
import boy from "../../assets/boy.jpg";
import { FaPhotoFilm } from "react-icons/fa6";
import { RiGroupLine } from "react-icons/ri";
import { MdOutlineEmojiEmotions } from "react-icons/md";

function SearchBox() {
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 ">
      <div className="flex gap-5">
        <div>
          <img src={boy} alt="" className="rounded-full w-10 h-10"/>
        </div>
        <div>
          <input className="rounded-full h-12  bg-gray-100 flex-row px-5 focus:outline-none"
          type="text" placeholder="Search here"/>
        </div>
      </div>
      <div className="flex justify-evenly gap-3 pt-5">
        <div className="flex gap-3">
          <div><FaPhotoFilm className="h-7 text-red-400"/></div>
          <div>Photo/Video</div>
        </div>
        <div className="flex gap-3">
          <div><RiGroupLine className="h-7 text-green-300"/></div>
          <div>Sonny Sangha</div>
        </div>
        <div className="flex gap-3">
          <div><MdOutlineEmojiEmotions className="h-7 text-yellow-300"/></div>
          <div>His/Hareket</div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
