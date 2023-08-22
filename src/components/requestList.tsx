"use client"

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseCredentials from "../credentials/firebaseCredentials.json"
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { returnedSongObject } from "@/types/songObject";
import RequestListItem from "@/components/requestListItem";

const firebaseConfig = firebaseCredentials

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface Props {
    roomNumber: string
}

export default function RequestList(props: Props) {

    const [songRequests, setSongRequests] = useState<returnedSongObject[]>([])

    useEffect(() => {
    
        const fetchData = async() => {
            console.log("fetching data")
            const querySnapshot = await getDocs(collection(db, props.roomNumber));
            querySnapshot.forEach((doc) => {
                //const dataToAdd as returnedSongObject  = doc.data()
                setSongRequests((songRequests) => [...songRequests, (doc.data() as returnedSongObject)])
                // console.log(`${doc.id} => ${doc.data()}`);
        });
        }
        
        fetchData()
        
        }, [])

    return (

     <div >
        {songRequests.map((request: returnedSongObject) => {
        return(
           <RequestListItem request={request}/>
        )
        })}
     </div>
    )
  }