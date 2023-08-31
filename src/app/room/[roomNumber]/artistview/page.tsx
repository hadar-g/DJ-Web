import RequestList from "@/components/requestList"

export interface UserViewParams {
  params:{
    roomNumber: string
  }
}

export default function DjRoom({params}: UserViewParams) {
    return (
      <main className="flex flex-col items-center p-10 justify-center mb-[100%]">
        <h1 className="text-4xl font-bold"> This is Your Party!</h1>
       <h2 className="mt-10 text-2xl font-semibold">Invite People with the Room Code:</h2>
       <h2 className="font-semibold text-6xl mt-4"> {params.roomNumber} </h2>

      <div className="w-screen">
      <RequestList  
          roomNumber={params.roomNumber} 
          userType="artist"/>
      </div>
      
      </main>
    )
  }