
"use client"

import { returnedSongObject } from "@/types/songObject"

interface Props {
        suggestion: returnedSongObject;
        onSongSelected: Function;
}


export default function SuggestionListItem(props: Props) {

    const handleSongClicked = (selected: returnedSongObject) => {
        props.onSongSelected(selected)
    }
    return (
        <button onClick = {() => handleSongClicked(props.suggestion)}
                className="flex justify-center">
        <div className="bg-gray-300 border border-black rounded-lg border-spacing-1  hover:bg-gray-500 w-80 h-16 flex flex-row" >
        <img src={props.suggestion.artworkUrl60} className="mx-4" />
        <div className="flex flex-col justify-between mt-2">
            <div className="text-lg font-semibold text-ellipsis overflow-hidden">{props.suggestion.trackName}</div>
            <div className="text-xs">{props.suggestion.artistName}</div>
        </div>
        </div>
        </button>

    )
  }


