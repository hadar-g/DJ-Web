import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseCredentials from "../credentials/firebaseCredentials.json"
import { collection, onSnapshot, query } from "firebase/firestore";
import type { requestListSongObject } from "@/types/songObject";

const app = initializeApp(firebaseCredentials);
const db = getFirestore(app);

export const queryDb = async (roomNumber: string): Promise<requestListSongObject[]> => {
    const collectionQuery =  query(collection(db, roomNumber));
    const unsortedReturnedSongs : requestListSongObject[] = []
    onSnapshot(collectionQuery, (querySnapshot) => {
         querySnapshot.forEach((doc) => {
            console.log(doc.data())
             unsortedReturnedSongs.push(doc.data() as requestListSongObject)
         });
      });

      return unsortedReturnedSongs
}
    
