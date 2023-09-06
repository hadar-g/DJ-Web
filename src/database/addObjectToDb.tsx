
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseCredentials from "../credentials/firebaseCredentials.json"
import { setDoc, doc } from "firebase/firestore"; 

const app = initializeApp(firebaseCredentials);
const db = getFirestore(app);


export const addObject = async (objectToAdd: any, roomNumber: string) => {
    console.log(" I will add this song to the list")
    console.log(objectToAdd)
    try {
        await setDoc(doc(db, roomNumber, objectToAdd.id), objectToAdd)
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}