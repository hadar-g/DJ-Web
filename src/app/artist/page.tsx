"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function DJ() {

    const { push } = useRouter();
    const[created, setCreated] = useState(false)

    const handleOnClick = () => {
        setCreated(true)
    }
    const handleGoToRoom = () => {
        push(`/room/1234/artistview`);
    }

    return (
      <main className="flex min-h-screen flex-col items-center  p-24">
       <div>
         Artist Page
      </div>
      <button type = "button" className="home-screen-button text-sm" onClick={handleOnClick}>Create New Room</button>

      {created === true &&
            <div>
            <h1>New Room Code : 1234</h1>
            <h1>navigate to room</h1>
            <button type="button" className="w-full py-2 mt-8 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={handleGoToRoom}>Go to Room</button>
            </div>
           
      }

      </main>
    )
  }