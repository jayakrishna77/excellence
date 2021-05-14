import React,{useState} from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [note, setNote] = useState([]);
    const arr = [1,2,3,4,5,6,7,8,9]

    function addNote(newNote){
        setNote(prevNote =>{
            return [...prevNote,
                newNote] 
        })
    }
    
    function deleteNote(id){
        setNote(prevNote => {
           return prevNote.filter((noteItem, index) =>{
                return index !== id ;
            })
        })
    }
    return (
        <div>
         <Header />
         <CreateArea onAdd={addNote}/>
        {note.map((noteItem, index) => {
            return <Note 
            key={index}
            id={index}
            title={noteItem.title} 
            content={noteItem.content}
            onDelete={deleteNote} />
        })}
        </div>
    )
}

export default App;