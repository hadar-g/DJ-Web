import { returnedSongObject } from "@/types/songObject";
import SuggestionListItem from "./DropdownSuggestionListItem"

interface Props {
    suggestions: returnedSongObject[];
    onSongSelected: Function;
}

export default function Suggestions(props: Props) {

    const handleSongSelected = (selected: returnedSongObject) => {
       props.onSongSelected(selected)
    }
    return (
      <div className="flex flex-col justify-center ">
        {props.suggestions.map((suggestion: returnedSongObject) => {
        return(<SuggestionListItem 
                    suggestion ={suggestion} 
                    onSongSelected={handleSongSelected}/>)
        })}
     </div>
    )
  }