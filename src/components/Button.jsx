import React from 'react'

const Button = ({color,pattern, number, text}) => {
  return (
    <div className={`relative ${color} w-86 md:w-56 lg:w-full h-32 md:h-40 flex justify-start px-4  items-center rounded-[12px] overflow-hidden text-[#12131A] text-left`}>
        <div className='flex flex-col'>

        <p className=' text-[40px] font-bold '>{number > 0 ? number : "00"}</p>
        <p className='text-[20px] leading-[1.4] tracking-[-0.6px]'>{text}</p>
        </div>
        <img className='absolute w-38 h-38 -top-[10px] -right-[50px] ' src={`/assets/images/pattern-${pattern}-count.svg`} alt="" />


    </div>
  )
}

export default Button