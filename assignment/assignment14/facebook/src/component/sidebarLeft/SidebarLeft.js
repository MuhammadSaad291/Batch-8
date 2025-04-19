import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaTv } from "react-icons/fa";
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
        <div><FaUserFriends size={25} className='text-blue-500'/></div>
        <div>Friends</div>
      </div>
      <div className='flex gap-6'>
        <div><GrGroup size={25} className='text-blue-500'/></div>
        <div>Groups</div>
      </div>
      <div className='flex gap-6'>
        <div><RiShoppingBag4Line size={25} className='text-blue-500'/></div>
        <div>Marketplace</div>
      </div>
      <div className='flex gap-6'>
        <div><FaTv size={25} className='text-blue-500'/></div>
        <div>Watch</div>
      </div>
      <div className='flex gap-6'>
        <div><BsCalendar2Event size={25} className='text-blue-500'/></div>
        <div>Events</div>
      </div>
      <div className='flex gap-6'>
        <div><GoClockFill size={25} className='text-blue-500'/></div>
        <div>Memories</div>
      </div>
      <div className='flex gap-6'>
        <div><FaAngleDown size={25} className='text-blue-500'/></div>
        <div>More</div>
      </div>
    </div>
  )
}

export default SidebarLeft
