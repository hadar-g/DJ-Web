
import SongInput from "./_components/songInput"
import RequestList from "@/components/requestList"
import { GuestViewParams } from "./_types/GuestViewParams"

export default function guestRoom({params}: GuestViewParams) {
    return (
      <div className="flex flex-col items-center p-10 justify-center mb-[100%]">
        <h1 className="text-4xl font-bold"> Welcome to the Party!</h1>
       <h2 className="mt-4 text-3xl font-semibold">Room Code: </h2>
       <h2 className="mb-8 text-5xl font-semibold">{params.roomNumber} </h2>
       <div >
        <SongInput roomNumber={params.roomNumber}/>

        <div className="w-screen">
        <RequestList 
            roomNumber={params.roomNumber}
            userType="guest" />
        </div>
       </div>
      </div>
    )
  }