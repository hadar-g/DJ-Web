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

 
            const collectionQuery =  query(collection(db, props.roomNumber));
            onSnapshot(collectionQuery, (querySnapshot) => {
                console.log("subscribed")
                querySnapshot.forEach((doc) => {
                    setSongRequests((songRequests) => [...songRequests, (doc.data() as requestListSongObject)])
                    console.log(doc.data())
                });
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