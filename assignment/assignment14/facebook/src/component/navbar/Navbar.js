import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { CiShop } from "react-icons/ci";
import { HiMiniUserGroup } from "react-icons/hi2";
import { LuTvMinimalPlay } from "react-icons/lu";
import { BsBell } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import unsplash from "../../assets/unsplash.jpg"
function Navbar() {
  return (
    <>
      <div className="flex justify-between py-3 px-5 border border-b-4" >
        {/* div no 1 */}
        <div className="flex gap-3">
          <div>
            <FaFacebook size={40} color="blue" />
          </div>
          <div className="flex items-center gap-2 rounded-full bg-gray-100 p-2">
            <IoIosSearch />
            <input 
            className="flex ml-2 items-center bg-transparent outline-none"
            type="text" 
            placeholder="Search facebook" />
          </div>
        </div>
        {/* div no 2 */}
        <div className="flex gap-16">
          <div>
            <TiHome size={40} className='text-blue-500 '/>
          </div>
          <div>
            <CiShop size={40} className="text-gray-500"/>
          </div>
          <div>
            <HiMiniUserGroup size={40} className="text-gray-500"/>
          </div>
          <div>
            <LuTvMinimalPlay size={40} className="text-gray-500"/>
          </div>
          <div>
            <BsBell size={40} className="text-gray-500"/>
          </div>
        </div>
        {/* div no 3 */}
        <div className="flex justify-between gap-12">
 
          <div className="border p-2 rounded-full text-black flex items-center justify-center"><FaPlus color="gray" size={20}/></div>
          <div className="border p-2 rounded-full text-black"><FaFacebookMessenger size={20} color=""/></div>
          <div className="border p-2 rounded-full text-black"><FaRegBell size={20} color=""/></div>
          <div className="flex gap-5"><img src={unsplash} alt="" className="rounded-full  w-10 h-10 " /></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
