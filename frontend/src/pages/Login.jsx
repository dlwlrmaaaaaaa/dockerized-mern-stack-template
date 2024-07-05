import React from 'react'
const Login = () => {
  return (
    <div className='w-full h-[100svh] relative'>
        <div className='lg:w-1/4 lg:h-2/3 absolute  lg:left-[65%] lg:top-[20%] border border-black rounded-md'>
        <form action="" className='h-full flex flex-col justify-center items-center'>
            Logo
            <div className='w-full flex justify-center py-2 flex-col items-center'>
              <div className="flex flex-col">
              <label htmlFor="" className=' poppins-regular'>Email</label>
              <input type="text" className='px-2 py-1 outline-none border border-black' autoComplete='off'/> 
                </div>     
            </div>
            <div className='w-full flex justify-center py-2 flex-col items-center'>
            <div className="flex flex-col">
              <label htmlFor="" className='poppins-regular'>Password</label>
              <input type="password" className='px-2 py-1 outline-none border border-black' autoComplete='off'/> 
                </div>      
            </div>
           <div className='mt-5 text-white bg-black w-1/3 text-center px-2 py-1 rounded font-semibold cursor-pointer'>Login</div>

            <p className='text-sm py-2 text-black cursor-pointer hover:text-gray-600'>Forgot password</p>
        </form>
        </div>
    </div>
  )
}

export default Login
