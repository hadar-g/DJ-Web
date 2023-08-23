"use client"

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseCredentials from "../credentials/firebaseCredentials.json"
import { collection, getDocs, doc, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { returnedSongObject } from "@/types/songObject";
import RequestListItem from "@/components/requestListItem";
import { unsubscribe } from "diagnostics_channel";

const app = initializeApp(firebaseCredentials);
const db = getFirestore(app);

export default function RequestList(props: {roomNumber: string}) {

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

 
            const q =  query(collection(db, props.roomNumber));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                console.log("subscribed")
                querySnapshot.forEach((doc) => {
                    console.log(doc.data())
                });
              });

              //unsubscribe();
        
    

        fetchData();

   
        
        }, [])

    return (

     <div >
        {songRequests.map((request: returnedSongObject) => {
        return(
            <li key={request.trackName}>
                <RequestListItem request={request}/>
            </li>
           
        )
        })}
     </div>
    )
  }