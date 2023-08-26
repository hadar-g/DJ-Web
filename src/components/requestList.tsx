"use client"

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseCredentials from "../credentials/firebaseCredentials.json"
import { collection, getDocs, doc, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { requestListSongObject } from "@/types/songObject";
import RequestListItem from "@/components/requestListItem";
import { unsubscribe } from "diagnostics_channel";

const app = initializeApp(firebaseCredentials);
const db = getFirestore(app);

export default function RequestList(props: {roomNumber: string}) {

    const [songRequests, setSongRequests] = useState<requestListSongObject[]>([])

    useEffect(() => {
    
    //     const fetchData = async() => {
    //         console.log("fetching data")
    //         const querySnapshot = await getDocs(collection(db, props.roomNumber));
    //         querySnapshot.forEach((doc) => {
    //             //const dataToAdd as returnedSongObject  = doc.data()
    //             setSongRequests((songRequests) => [...songRequests, (doc.data() as returnedSongObject)])
    //             // console.log(`${doc.id} => ${doc.data()}`);
    //     });
    // }


            const compareFunction = (songA: requestListSongObject, songB: requestListSongObject) =>{
                if(songA.votes === songB.votes){
                    return  songA.epoch - songB.epoch
                }
                return songB.votes - songA.votes
            }
 
            const collectionQuery =  query(collection(db, props.roomNumber));
           
            onSnapshot(collectionQuery, (querySnapshot) => {
                console.log("subscribed")

                const tempUnsortedReturnedSongs : requestListSongObject[] = []
                
                 querySnapshot.forEach((doc) => {
                    console.log(doc.data())
                     tempUnsortedReturnedSongs.push(doc.data() as requestListSongObject)
                // setSongRequests((songRequests) => [...songRequests, (doc.data() as requestListSongObject)])
                // console.log(doc.data())
                 });
                 console.log(tempUnsortedReturnedSongs)
                // tempUnsortedReturnedSongs.sort((doc1: requestListSongObject, doc2: requestListSongObject) => doc1.epoch - doc2.epoch)
                //tempUnsortedReturnedSongs.sort(function(songA, songB){return songA.epoch - songB.epoch})
                tempUnsortedReturnedSongs.sort((songA, songB) => compareFunction(songA, songB))
                 //function(songA, songB){return songA.epoch - songB.epoch}
                 console.log("sorted: " , tempUnsortedReturnedSongs)
                 setSongRequests(tempUnsortedReturnedSongs);

              });
        }, [])

    const handleOnClickUp = () => {
        console.log("up")
    }
    const handleOnClickDown = () => {
        console.log("down")
    }

    return (

     <div >
        {songRequests.map((request: requestListSongObject) => {
        return(
            <li key={request.id} className="flex flex-row">
                <RequestListItem 
                    request={request}
                    userType="user"
                    onClickUp={handleOnClickUp}
                    onClickDown={handleOnClickDown}
                />
            </li>  
        )
        })}
     </div>
    )
  }