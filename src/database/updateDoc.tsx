import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore"; 
import firebaseCredentials from "../credentials/firebaseCredentials.json"
import { collection, onSnapshot, query } from "firebase/firestore";
import type { requestListSongObject } from "@/types/songObject";

const app = initializeApp(firebaseCredentials);
const db = getFirestore(app);

export const updateDoc = async (roomNumber: string, objectToAdd: any) => {
    try{
        await setDoc(doc(db, roomNumber, objectToAdd.id), objectToAdd)
    }catch(e){
        console.log(e)
    }
}
    
