
import SongInput from "./songInput"

interface Params {
  params:{
    roomNumber: string
  }
}

export default function userRoom({params}: Params) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <div> user view</div>
       <div>Welcome to room {params.roomNumber} </div>
       <div
          className = "w-3/5 justify-center flex">
        <SongInput />
       </div>
      </main>
    )
  }