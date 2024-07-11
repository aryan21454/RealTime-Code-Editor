import React from 'react'
import Avatar from 'react-avatar'
function Client({username}) {
    
  return (
    <div className='flex flex-col '>
        <Avatar textMarginRatio='.075' name={username} size='40' round={true} color='#531111' className='border border-red-600 '></Avatar>
        <span className='text-white'>{username}</span>
    </div>
  )
}

export default Client