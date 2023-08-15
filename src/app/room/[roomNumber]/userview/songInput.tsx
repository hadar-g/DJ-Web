
"use client"

import { useState, FormEvent, useEffect } from "react"
import Suggestions from "./suggestions";


export interface returnedSongObject {

        artistName : string;
        artworkUrl100 : string;
        trackName: string;
        artworkUrl60: string;
}



export default function SongInput() {
    const [songInputVal, setSongInputVal] = useState("")
    const[dropdownSuggestions, setDropdownSuggestions] = useState<returnedSongObject[]>([])
    useEffect(() => {
        const fetchMusicData = async () => {
          try {
            if (songInputVal.length > 0) {
              setDropdownSuggestions([])
              const response = await fetch(`https://itunes.apple.com/search?term=${songInputVal}&entity=song&limit=5`);
              const data = await response.json();
            //   console.log(data)
              const tempArray : returnedSongObject[] = []
              data.results.map((song : returnedSongObject) => {
                 const { artistName, artworkUrl100, trackName, artworkUrl60} = song
                 tempArray.push({artistName ,artworkUrl100, trackName, artworkUrl60})
              })
              setDropdownSuggestions(tempArray)
            }else{
                setDropdownSuggestions([])
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchMusicData();
      }, [songInputVal]);

    const handleAddSongToList = (songToAddToList: returnedSongObject) => {
        console.log(" I will add this song to the list")
        console.log(songToAddToList)
    }

    const onChangeInputVal = (event: any) => {
        setSongInputVal(event?.target?.value)
    }
    return (
      <div>
        song input
        <form>
        <input
            type="text"
            value={songInputVal}
            onChange={onChangeInputVal}
            className="p-2 border border-gray-300 rounded text-black mt-5"
            placeholder="Enter Song Name..."
          />
        </form>

        <Suggestions 
            suggestions ={dropdownSuggestions}
            onSongSelected = {handleAddSongToList}/>

      </div>
    )
  }