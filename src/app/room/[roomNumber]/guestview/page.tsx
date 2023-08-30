
import SongInput from "./_components/songInput"
import RequestList from "@/components/requestList"
import { GuestViewParams } from "./_types/GuestViewParams"

export default function guestRoom({params}: GuestViewParams) {
    return (
      <div className="flex flex-col items-center p-10 justify-center mb-[100%]">
        <div> user view</div>
       <div className="my-5 ">Welcome to room {params.roomNumber} </div>
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