"use client"
import React, { useState, useContext, useEffect } from 'react'
import CheckBox from './CheckBox'
import { ThemeContext } from '@/app/context/ThemeContext'

const TextFieldComponent = ({ onTextChange, onCheckBoxChange }) => {
    const theme = useContext(ThemeContext)
    const [inputText, setInputText] = useState("")
    const [limit, setLimit] = useState(null)
    const [limitAchive, setLimitAchive] = useState(false)


    const handleChange = (e) => {
        const newText = e.target.value
        setInputText(newText)
        console.log(inputText);

        onTextChange(newText)
    }

    const handleLimit = (number) => {
        setLimit(number)
    }

    useEffect(() => {
        console.log("limit", limit);
        console.log("texto:", inputText.length);

        if (inputText.length >= limit && limit != null) {
            setLimitAchive(true)

        } else {
            setLimitAchive(false)
        }

    }, [limit, inputText])
    return (
        <main className=' flex flex-col gap-4 font-sans'>
            <div className='flex flex-col gap-1'>
                <textarea placeholder='Type yout text here...' value={inputText} onChange={handleChange} className={`${limitAchive ? "border border-[#FE8159] drop-shadow-lg" : ""} 
              focus:outline-none
              focus:border-[#C27CF8] focus:ring-2 focus:ring-[#C27CF8] 
              text-white flex flex-col items-start min-h-[200px] 
              space-y-3 p-4 font-sans text-[20px] leading-[1.4] 
              tracking-[-0.6px] text-left rounded-[12px] 
              bg-[#21222C] w-full`} ></textarea>
                {limitAchive ? <div className='flex gap-2'>
                    <img src="/assets/images/icon-info.svg" alt="" />
                    <p className='text-[#FE8159]'>Limit reached! Your text exceeds {limit} characters.</p>
                </div>
                    : null}
            </div>
            <div className='flex flex-col gap-2 md:flex-row justify-between '>

                <div className='flex flex-col md:flex-row gap-3 md:justify-between  w-[900px] md:w-full  '>
                    <div className='flex flex-col md:flex-row gap-6'>

                        <CheckBox text={"Exclude Spaces"} name={""} id={"spaces"} textField={inputText} onChange={onCheckBoxChange} />
                        <CheckBox text={"Set Character Limit"} name={""} id={"limit"} textField={inputText} onChange={handleLimit} />
                    </div>
                    <p className='mt-auto'>Approx. reading time: &lt; 1 minute</p>
                </div>
            </div>
        </main>
    )
}

export default TextFieldComponent