import React from 'react'

function SignUp() {
  return (
    <div className='flex mb-10 justify-center'>
        <div className='border-2 border-t-8 border-black w-2/5 p-10 text-center'>
<div className='my-4'>
    <h1 className='font-bold text-lg md:text-3xl'>Sign up for the newsletter</h1>
    <p className='text-sm mt-2'>If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared. </p>
</div>
    
      <div className='flex justify-center'>
         <input className='p-2 border-2 border-black' type='text' placeholder='Enter the email'/>
       <button className='p-2 bg-black text-white'>SignUp</button>
        </div>
             </div>
    </div>
  )
}

export default SignUp