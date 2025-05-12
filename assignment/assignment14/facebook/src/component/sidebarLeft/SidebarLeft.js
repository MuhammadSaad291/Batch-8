import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { RiShoppingBag4Line } from "react-icons/ri";
import { LuTvMinimalPlay } from "react-icons/lu";
import { BsCalendar2Event } from "react-icons/bs";
import { GoClockFill } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import boy from "./../../assets/boy.jpg";

function SidebarLeft() {
  return (
    <div className='flex flex-col gap-5 px-4 pt-10'>
      <div className='flex gap-6'>
        <div><img src={boy}alt="" className='rounded-full w-10 h-10' /></div>
        <div>Saad</div>
      </div>
      <div className='flex gap-6'>
        <div><FaUserFriends size={25} className='text-green-500'/></div>
        <div>Friends</div>
      </div>
      <div className='flex gap-6'>
        <div><MdGroups  size={25} className='text-sky-400'/></div>
        <div>Groups</div>
      </div>
      <div className='flex gap-6'>
        <div><RiShoppingBag4Line size={25} className='text-yellow-500'/></div>
        <div>Marketplace</div>
      </div>
      <div className='flex gap-6'>
        <div><LuTvMinimalPlay  size={25} className='text-blue-500'/></div>
        <div>Watch</div>
      </div>
      <div className='flex gap-6'>
        <div><BsCalendar2Event size={25} className='text-red-500'/></div>
        <div>Events</div>
      </div>
      <div className='flex gap-6'>
        <div><GoClockFill size={25} className='text-black-500'/></div>
        <div>Memories</div>
      </div>
      <div className='flex gap-6'>
        <div><FaAngleDown size={25} className='text-blue-500'/></div>
        <div>More</div>
      </div>
      <div><hr/></div>
    </div>
    
  )
}

export default SidebarLeft
