"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useRef, useEffect } from "react";
import Image from 'next/image'
import reload from "@/icons/reload.png"

export default function DJ() {

    const { push } = useRouter();
    const[newRoomCode, setNewRoomCode] = useState('')
    const[passcode, setPasscode] = useState('')
    const roomCodeChars = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789'

    useEffect(() => {
      createRandomString()
    },[])

    const createRandomString = () => {
      let newRoomCode = ''
      for(let i = 0; i < 4; i ++){
        newRoomCode +=  roomCodeChars[Math.floor((Math.random() * roomCodeChars.length))]
      }
      setNewRoomCode(newRoomCode)
    }

    const handleOnClick = () => {
      push(`/room/${newRoomCode}/artistview`);
    }

    return (
      <main className="flex min-h-screen flex-col items-center  p-24">
       <h1 className="text-3xl">Get Started by Creating Your Very Own Room</h1>
       <div className="flex flex-row m-10 justify-center">
          <h2 className="text-2xl mr-5">Room code:</h2>
          <h2 className="text-5xl">{newRoomCode}</h2>
          <button 
            onClick={createRandomString}
            className="mx-10">
              <Image src={reload} alt="reload" height={40} width={40} />
          </button>
       </div>
       <div className="flex flex-row m-10 justify-center">
          <h2>Set a Passcode for the Artist View:</h2>
          <input
            type="text"
            value={passcode}
            onChange={event => setPasscode((event?.target?.value))}
            className="p-2 border border-gray-300 rounded text-black mx-5"
            placeholder="Set Passcode..."
          />
       </div>
       

      <button type = "button" className="home-screen-button text-sm" onClick={handleOnClick}>Create New Room</button>
{/* 
      {created === true &&
            <div>
            <h1>New Room Code : {roomCode.current}</h1>
            <h1>navigate to room</h1>
            <button type="button" className="w-full py-2 mt-8 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={handleGoToRoom}>Go to Room</button>
            </div>
           
      } */}

      </main>
    )
  }