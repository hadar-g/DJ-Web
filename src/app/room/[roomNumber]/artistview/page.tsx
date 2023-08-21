import RequestList from "@/app/components/requestList"

export interface UserViewParams {
  params:{
    roomNumber: string
  }
}

export default function DjRoom({params}: UserViewParams) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <div> Artist view</div>
       <div>Welcome to room {params.roomNumber} </div>
      <div className="w-screen">
      <RequestList  roomNumber={params.roomNumber}/>
      </div>
      
      </main>
    )
  }