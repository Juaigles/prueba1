"use client";
import React, { useEffect, useState } from 'react';

const DensityChecker = ({ text }) => {
    const [letterCounts, setLetterCounts] = useState({});
    const [seeMore, setSeeMore] = useState(false)

    // Función sin parámetros que utiliza directamente la prop "text"
    const countLetters = () => {
        const letterFrequency = {};

        // Eliminar el uso incorrecto de ".array"
        const lowerText = text.toLowerCase().replace(/\s+/g,"")

        lowerText.split("").forEach((letter) => {
            if (letter.match(/[a-z]/i)) {  // Filtramos solo letras
                const capitalLetter = letter.toUpperCase();
                letterFrequency[capitalLetter] = (letterFrequency[capitalLetter] || 0) + 1;
            }
        });

        setLetterCounts(letterFrequency);
    };

    const handleSeeMore = () => {
        setSeeMore(!seeMore)
    }

    // Ejecutamos countLetters cuando "text" cambie
    useEffect(() => {
        if (text) { // Verificamos que text no sea undefined
            countLetters();
        }
    }, [text]);

    const totalLetters = Object.values(letterCounts).reduce((acc, count) => acc + count, 0);
    const letterToShow = Object.entries(letterCounts).slice(0, seeMore ? totalLetters : 5)

    return (
        <div className='flex flex-col gap-[20px] '>
            <p className='w-full  text-[24px] font-semibold leading-[1.3]'>Letter Density</p>
            {

                text.length > 0 ? (<>   <div className='flex flex-col gap-4 w-full'>
                    {letterToShow.map(([letter, count]) => (


                        <div key={letter} className='flex gap-[14px] items-center text-center w-full '>
                            <p className='w-4 h-5'>{letter}</p>
                            <div className='w-[212px] md:w-full bg-[#21222C] rounded-full'>

                                <p className='bg-[#D3A0FA] rounded-full  h-3' style={{ width: `${(count / text.length) * 100}%` }}></p>
                            </div>
                            <p className='w-24 h-6 text-right'>{count} ({((count /totalLetters) * 100).toFixed(2)}%)</p>
                        </div>


                    ))}
                </div>
                    <p onClick={handleSeeMore} className='hover:text-[#D3A0FA] cursor-pointer'>{seeMore ? "See less" : "See more"}</p>
                </>
                ) : (<p>No characters found. Start typing to see letter density</p>)}
        </div>
    );
};

export default DensityChecker;
