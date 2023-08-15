
import SongInput from "./songInput"


export interface UserViewParams {
  params:{
    roomNumber: string
  }
}

export default function userRoom({params}: UserViewParams) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <div> user view</div>
       <div>Welcome to room {params.roomNumber} </div>
       <div
          className = "w-3/5 justify-center flex">
        <SongInput roomNumber={params.roomNumber}/>
       </div>
      </main>
    )
  }