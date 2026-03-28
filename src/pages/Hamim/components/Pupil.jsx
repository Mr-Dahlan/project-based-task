import React, { useState, useEffect } from "react";

export default function Pupil() {
    const [time, setTime] = useState(new Date());
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    
    const date = time.getDate().toString().padStart(2, '0');
    const month = (time.getMonth() + 1).toString().padStart(2, '0');
    const year = time.getFullYear();

    return (
        <div 
            className="hamim-pupil fixed w-full h-10 bg-black/70 rounded-md top-0 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="flex justify-center">
                {isHovered ? `${date}/${month}/${year}` : `${hours}:${minutes}:${seconds}`}
            </span>
        </div>
    );
}