
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
    // const handleChangeVoteCount = async () => {

    //     console.log(params)
    //     const songIncrementVotesFor = {
    //         ...props.request,
    //         votes: props.request.votes + 1
    //     }
    //     try {
    //         const docRef = await addDoc(collection(db, params.roomNumber as any), songIncrementVotesFor);
    //         console.log("Document written with ID: ", docRef.id);
    //     } catch (e) {
    //         console.error("Error adding document: ", e);
    //     }
    // }
    const handleOnClickDown = async () => {
        console.log(params.roomNumber)
        console.log(props.request.id)
        try{
            await setDoc(doc(db, params.roomNumber, props.request.id), {...props.request, votes: props.request.votes - 1})
        }catch(e){
            console.log(e)
        }
    }


    return (
        <div className="bg-gray-300 h-18 m-2 flex flex-row w-full" >
            <img src={props.request.artworkUrl60} className="mx-4" />
            <div className="flex flex-col justify-between mt-2">
                <div className="text-lg font-semibold text-ellipsis overflow-hidden">{props.request.trackName}</div>
                <div className="text-xs">{props.request.artistName}</div>
        </div>
            <div className=" font-bold ml-10  flex flex-col justify-center ">{props.request.votes}</div>
            <div className="ml-10 flex flex-row w-10 justify-between ">
                <button onClick={() => console.log('up')}>U</button>
                <button onClick={handleOnClickDown}>D</button>
            </div>
        </div>
    )
  }