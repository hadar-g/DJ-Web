
import SongInput from "../../../../components/songInput"
import RequestList from "../../../../components/requestList"


export interface UserViewParams {
  params:{
    roomNumber: string
  }
}

export default function userRoom({params}: UserViewParams) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24 justify-center">
        <div> user view</div>
       <div className=" my-10">Welcome to room {params.roomNumber} </div>
       <div >
        <SongInput roomNumber={params.roomNumber}/>
        <div className="w-screen">
        <RequestList roomNumber={params.roomNumber} />
        </div>
       
       </div>
      </main>
    )
  }