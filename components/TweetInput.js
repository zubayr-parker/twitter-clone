import React from 'react'

function TweetInput() {
  return (
    <div className='flex space-x-3 p-3 border-b border-gray-700'>
        <img 
        className='w-11 h-11 rounded-full object-cover'
        src="/assets/rock.jpg"/>

        <div>
            <textarea 
            placeholder="What's on your mind?"
            className='bg-transparent resize-none outline-none w-full min-h-[50px] text-lg'/>
        </div>
        
        </div>
  )
}

export default TweetInput