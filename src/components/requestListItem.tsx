
"use client"

import { requestListSongObject } from "@/types/songObject"
import { setDoc, doc } from "firebase/firestore"; 
import { useParams } from "next/navigation";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseCredentials from "@/credentials/firebaseCredentials.json"

interface Props  {
    request :requestListSongObject;
    onClickUp: () => void;
    onClickDown: () => void;
    userType: string;
}

const firebaseConfig = firebaseCredentials
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function RequestListItem(props: Props) {
    const params = useParams() as {roomNumber: string}

    const handleOnClickDown = async () => {
        try{
            await setDoc(doc(db, params.roomNumber, props.request.id), {...props.request, votes: props.request.votes - 1})
        }catch(e){
            console.log(e)
        }
    }
    const handleOnClickUp = async () => {
        try{
            await setDoc(doc(db, params.roomNumber, props.request.id), {...props.request, votes: props.request.votes + 1})
        }catch(e){
            console.log(e)
        }
    }
    const handleWillPlay = async () => {
        try{
            await setDoc(doc(db, params.roomNumber, props.request.id), {...props.request, willPlay: true})
        }catch(e){
            console.log(e)
        }
    }
    const handleWontPlay = async () => {
        try{
            await setDoc(doc(db, params.roomNumber, props.request.id), {...props.request, willPlay: false})
        }catch(e){
            console.log(e)
        }
    }
    const whatColorToRender = () => {
        if(props.request.willPlay === false){
            return "red"
        }else if(props.request.willPlay === true){
            return "green"
        }
        return "gray"
    }


    return (
        <div className="h-18 m-2 flex flex-row w-full"
        style={{backgroundColor: whatColorToRender()}}>
            <img src={props.request.artworkUrl60} className="mx-4" />
            <div className="flex flex-col justify-between mt-2">
                <div className="font-semibold h-10 w-15">{props.request.trackName}</div>
                <div className="text-xs">{props.request.artistName}</div>
        </div>
            <div className=" font-bold ml-10  flex flex-col justify-center ">{props.request.votes}</div>
            
                {props.userType === "guest" ? 
                    <div className="ml-10 flex flex-row w-10 justify-between ">
                        <button onClick={handleOnClickUp}>U</button>
                        <button onClick={handleOnClickDown}>D</button>
                    </div>:
                    <div className="ml-10 flex flex-row w-10 justify-between ">
                        <button onClick={handleWillPlay}>P</button>
                        <button onClick={handleWontPlay}>N</button>
                    </div>
                 }

          
        </div>
    )
  }