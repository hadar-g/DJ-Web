
"use client"

import { useState, FormEvent, useEffect } from "react"
import Suggestions from "./suggestions";
import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseCredentials from "@/credentials/firebaseCredentials.json"
import { GuestViewParams } from "../_types/GuestViewParams";
import { returnedSongObject } from "@/types/songObject";
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = firebaseCredentials

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function SongInput(props:{roomNumber: string}) {
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

    const handleAddSongToList = async (songToAddToList: returnedSongObject) => {
        console.log(" I will add this song to the list")
        console.log(songToAddToList)
        setSongInputVal('');
        const songToAddWithMoreValues = {
          ...songToAddToList,
          id: uuidv4(),
          votes: 10,
          willPlay: null,
          createdAt: new Date().toISOString(),
          epoch: Date.now()
        }
        try {
            //const docRef = await addDoc(collection(db, props.roomNumber), songToAddWithMoreValues);
            await setDoc(doc(db, props.roomNumber, songToAddWithMoreValues.id), songToAddWithMoreValues)
            // console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
  
    }

    const onChangeInputVal = (event: any) => {
        setSongInputVal(event?.target?.value)
    }
    return (
      <main className="flex justify-center">
        <form>
        <input
            type="text"
            value={songInputVal}
            onChange={onChangeInputVal}
            className="p-2 border border-gray-300 rounded text-black mb-10 "
            placeholder="Enter Song Name..."
          />
        </form>

        <Suggestions 
            suggestions ={dropdownSuggestions}
            onSongSelected = {handleAddSongToList}/>

      </main>
    )
  }