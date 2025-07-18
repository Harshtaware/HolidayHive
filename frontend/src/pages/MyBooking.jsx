import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import { userDataContext } from '../Context/UserContext';
import Card from '../Component/Card';


function MyBooking() {
    let navigate = useNavigate()
 
    let {userData}= useContext(userDataContext)
    
    
  return (
    <div className='w-[100vw] min-h-[100vh] flex items-center justify-start flex-col gap-[50px] relative  px-[20px]'>
        <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center ' onClick={()=>navigate("/")}><FaArrowLeftLong className='w-[25px] h-[25px] text-[white]' /></div>
       <div className='px-[90px] py-[10px] bg-[red] text-[white] text-[28px] rounded-lg mt-[40px]'>
                MY BOOKING
            </div>
        <div className='w-[100%] h-[90%] flex items-center justify-center gap-[25px] flex-wrap mt-[30px] '>
        {userData.booking?.map((list)=>(
              <Card title={list.title} landMark={list.landMark} city={list.city} image1={list.image1} image2={list.image2} image3={list.image3} rent={list.rent} id={list._id} isBooked={list.isBooked} ratings={list.ratings} host={list.host}/>
             ))}    
        

        </div>

      
    </div>
  )
}

export default MyBooking
