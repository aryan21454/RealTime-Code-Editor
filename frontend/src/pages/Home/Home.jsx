import React, { useState } from 'react'
import './Home.css'
import { v4 as uuid} from 'uuid'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function Home() {
  const createNew = ()=>{
    const id = uuid();
    setData({...data,roomId:id});

    toast.success("New Room Created")
  }
  const navigate = useNavigate();
  const [data,setData] = useState({roomId : "" , username : ""});
  
  const handleChange = (e) =>{
    const { name, value } = e.target;
    console.log(e.target);
    setData({
      ...data,
      [name]: value
    });
    
    
  }
  const joinRoom = () =>{
    if(!data.roomId || !data.username)
    {
      toast.error("Room ID and Username is required.");
      return ;
    }
    navigate(`/editor/${data.roomId}`, {
      state: {
        username: data.username
      }
    });
  }
  const handleEnter = (e) =>{
    if (e.code == 'Enter') joinRoom();
  }


  return (<div>
   <Navbar />
   <div className='page flex flex-col justify-center items-center'>
    <div className="form-wrapper bg-[#1D1D1D] rounded-xl flex justify-center items-center">
          <div className='flex flex-col text-white gap-3 w-[90%] '>
            <label className='text-white font-semibold text-xl'>Room Id</label>
            <input type="text" placeholder='Enter room id' name='roomId' value={data.roomId} onChange={handleChange} onKeyUp={handleEnter}  className='bg-black  text-white h-10 px-4 rounded-md' />
            <label className='text-white font-semibold text-xl'>Username</label>
            <input type="text" placeholder='Enter username' name='username' value ={data.username} onChange={handleChange} onKeyUp={handleEnter} className='bg-black text-white  h-10 px-4 rounded-md' />
            <button onClick={joinRoom} className='bg-[#531111] mt-5 mb-5 w-24 h-8 rounded-lg border border-red-600 mx-auto'>Join</button>
            <div className='mx-auto'>
            <span className=''>If you don't have an invite then &nbsp; 
            <button className='bg-[#531111] w-28 h-8 rounded-lg border border-red-600' onClick={createNew}>Create Room</button>   
            </span>
            </div>
          </div>
    
    </div>
   
    
    
      </div>
  </div>
   
  )
}

export default Home