
import { returnedSongObject } from "@/types/songObject"
export default function RequestListItem(props: {request :returnedSongObject}) {
    return (
        <div className="bg-gray-300  m-2  h-16 flex flex-row w-full" >
        <img src={props.request.artworkUrl60} className="mx-4" />
        <div className="flex flex-col justify-between mt-2">
        <div className="text-lg font-semibold text-ellipsis overflow-hidden">{props.request.trackName}</div>
        <div className="text-xs">{props.request.artistName}</div>
        </div>
        </div>
    )
  }