"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useRef } from "react";

export default function DJ() {

    const { push } = useRouter();
    const[created, setCreated] = useState(false)
    const roomCode = useRef('');

    const handleOnClick = () => {
        setCreated(true)
        roomCode.current = Math.random().toString(36).slice(11-4)
    }
    const handleGoToRoom = () => {
        push(`/room/${roomCode.current}/artistview`);
    }

    return (
      <main className="flex min-h-screen flex-col items-center  p-24">
       <div>
         Artist Page
      </div>
      <button type = "button" className="home-screen-button text-sm" onClick={handleOnClick}>Create New Room</button>

      {created === true &&
            <div>
            <h1>New Room Code : {roomCode.current}</h1>
            <h1>navigate to room</h1>
            <button type="button" className="w-full py-2 mt-8 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={handleGoToRoom}>Go to Room</button>
            </div>
           
      }

      </main>
    )
  }