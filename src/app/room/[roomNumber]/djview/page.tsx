export default function DjRoom({params}: any) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <div> DJ view</div>
       <div>Welcome to room {params.roomNumber} </div>
      </main>
    )
  }