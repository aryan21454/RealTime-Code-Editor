import React, { useState } from 'react'
import './EditorPage.css'
import Client from '../../Components/Client.jsx'
import Editor from '../../Components/Editor/Editor.jsx'


function EditorPage() {
const [clients,setClients] = useState([
  {socketId:1 , username : "aryan"},
  {socketId:2 , username : "shubh"},
  {socketId:2 , username : "shubh"},
  {socketId:2 , username : "shubh"},
  {socketId:2 , username : "shubh"},
])


  return (
    <div className='flex flex-row w-screen bg-[#531111] '>
      <div className='aside bg-[#1D1D1D] flex flex-col items-center'>
        <div>
        <div className='flex flex-row items-center border-b-4 py-2 px-1 border-red-900 '>
          
          <div className="w-16 h-16 overflow-hidden"><img src="/images/logo.png" alt="" className='h-16 w-16'  />
           </div>

        <div className='text-3xl '><span className='text-red-800 font-bold'>Rapid</span><span className='text-white font-bold'>Edit</span></div>

        </div>
          
        </div>
        <div className='w-full h-[75vh] mt-3 flex flex-col items-center '>
          <span className='text-white  font-bold text-xl'>Active Users</span>
          <div className='grid grid-cols-3 gap-6 mt-4'>
            {clients.map(client =>(
              <Client key={client.socketId} username={client.username}/>
            ))}
          </div>

        </div>
        <button className='bg-[#531111] w-[10vw] h-8 rounded-lg border text-white font-semibold border-red-600 mb-3'>copy</button>
        <button className='bg-[#531111] w-[10vw] h-8 rounded-lg border font-semibold text-white border-red-600'>leave</button>
       

      </div>
      <div className=" editor ">
      <Editor />
      
    </div>
      
    </div>
  )
}

export default EditorPage;