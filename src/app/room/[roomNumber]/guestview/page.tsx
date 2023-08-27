
import SongInput from "./_components/songInput"
import RequestList from "@/components/requestList"
import { GuestViewParams } from "./_types/GuestViewParams"

export default function guestRoom({params}: GuestViewParams) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24 justify-center">
        <div> user view</div>
       <div className=" my-10">Welcome to room {params.roomNumber} </div>
       <div >
        <SongInput roomNumber={params.roomNumber}/>
        <div className="w-screen">
        <RequestList 
            roomNumber={params.roomNumber}
            userType="guest" />
        </div>
       
       </div>
      </main>
    )
  }