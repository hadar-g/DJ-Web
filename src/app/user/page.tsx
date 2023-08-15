"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default  function User() {

    const [value, setValue] = useState("");
    const { push } = useRouter();
  
    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      push(`/room/${value}/userview`);
    };
      return (
        <main className="flex min-h-screen flex-col items-center pt-8">
         <div className="text-3xl">
            Welcome to the User Page
        </div>
        <div className="text-xl mt-24">
            Enter the code for the room you want to request songs in
        </div>

        <form onSubmit={handleSubmit} >
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black mt-5"
            placeholder="Enter the room number..."
          />
          <button
            type="submit"
            className="w-full py-2 mt-8 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Submit
          </button>
        </form>

        </main>
      )
    }