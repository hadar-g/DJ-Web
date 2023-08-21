import { returnedSongObject } from "./songInput"
import SuggestionListItem from "./suggestionListItem"

interface Props {
    suggestions: returnedSongObject[];
    onSongSelected: Function;
}

export default function Suggestions(props: Props) {

    const handleSongSelected = (selected: returnedSongObject) => {
       props.onSongSelected(selected)
    }
    return (
     <div className="fixed flex justify-center flex-col mt-10 ">
        {props.suggestions.map((suggestion: returnedSongObject) => {
        return(<SuggestionListItem 
                    suggestion ={suggestion} 
                    onSongSelected={handleSongSelected}/>)
        })}
     </div>
    )
  }