
"use client"

import { requestListSongObject } from "@/types/songObject"
import { useParams } from "next/navigation";
import upArrow from "../icons/upArrow.png"
import downArrow from "../icons/downArrow.png"
import play from "../icons/play.png"
import stop from "../icons/stop.png"
import Image from 'next/image'
import { updateDoc } from "@/database/updateDoc";


interface Props  {
    request :requestListSongObject;
    onClickUp: () => void;
    onClickDown: () => void;
    userType: string;
}

export default function RequestListItem(props: Props) {
    const params = useParams() as {roomNumber: string}

    const handleOnClickDown = async () => {
        if(props.request.willPlay === null){
            updateDoc(params.roomNumber, {...props.request, votes: props.request.votes - 1})
        }
    }
    const handleOnClickUp = async () => {
        if(props.request.willPlay === null){
            updateDoc(params.roomNumber, {...props.request, votes: props.request.votes +1})
        }
    }
    const handleWillPlay = async () => {
        if(props.request.willPlay === null){
            updateDoc(params.roomNumber, {...props.request, willPlay: true})
        }
    }
    const handleWontPlay = async () => {
        if(props.request.willPlay === null){
            updateDoc(params.roomNumber, {...props.request, willPlay: false})
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

    const whatButtonToRender = () => {
        if(props.userType === "guest" && props.request.willPlay === null){
        return(
        <div className="ml-10 flex flex-1 flex-row justify-center">
            <button className="mx-1" onClick={handleOnClickUp}>
               <Image src={upArrow} alt="up arrow" height={30} width={20} />
           </button>
            <button className="mx-1" onClick={handleOnClickDown}>
               <Image src={downArrow} alt="down arrow" height={30} width={20} />
           </button>
       </div>
       );
       }else if(props.userType === "artist" && props.request.willPlay === null){
        return(
        <div className="ml-10 flex flex-1 flex-row justify-center ">
            <button  className="mx-5" onClick={handleWillPlay}>
                <Image src={play} alt="play" height={40} width={30} />
            </button>
            <button className="mx-5" onClick={handleWontPlay}>
                <Image src={stop} alt="stop" height={40} width={30} />
            </button>
        </div>
        )
       }
       return(
        <div className="ml-10 flex flex-1 flex-row justify-center ">
        </div>
        )
    }


    return (
        <div className="h-18 m-2 flex flex-row w-full"
        style={{backgroundColor: whatColorToRender()}}>
            <img src={props.request.artworkUrl60} className="mx-4" />
            <div className="flex flex-1 flex-col justify-between mt-2">
                <h1 className="font-semibold h-10">{props.request.trackName}</h1>
                <h2 className="text-xs">{props.request.artistName}</h2>
            </div>
            <div className=" font-bold ml-10  flex flex-2 flex-col justify-center  ">{props.request.votes}</div>
            {whatButtonToRender()}           
        </div>
    )
  }