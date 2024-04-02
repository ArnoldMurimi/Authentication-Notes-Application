import React,{useState,useContext,useEffect} from 'react'
import DisplayNotes from './DisplayNotes'
import UserContext from '../utilis/UserContext'
import axios from 'axios'
import useAxios from '../utilis/useAxios'

const Notepage = () => {
let {input,notes,handleMessageChange,addNotesToState,isEditNote,notesArray} = useContext(UserContext)

let api = useAxios()

const click = () =>{
  alert("note added")
}
// const handleMessageChange = e => {
  
  
// setInputValue(e.target.value )

// console.log(input,'this is the input')

// };

// const HandleAddnote = () =>{
//   if(input.trim()!=''){
//     setNotes([...notes,input])
//     setInputValue('')
//   }


//   console.log(notes,'these are the notes')
 
// console.log('addNote') 

// }

const postTodo = async (itemTOBePosted ) =>{
  {
    try{
      const response = await api.post('notes/',itemTOBePosted);
      console.log("Post created:", response.data);
      addNotesToState(itemTOBePosted)
      
    } 
    
    catch(error)
    
    {console.log(error)}
  }
}


const postTodo1 = async (itemTOBePosted) =>{
  {
    try{
      const response = await api.post('notes/',itemTOBePosted);
      console.log("Post created:", response.data);
      addNotesToState(itemTOBePosted)
      
    } 
    
    catch(error)
    
    {console.log(error)}
  }
}

const  HandleDeleteNote =({}) =>{
  //we delete in the backend too
console.log('delete note')
}

const HandleEditNote =({}) => {
console.log('edit note')
}
  return (
    <div>
            <div className="TextArea-Container">
              <div className="TextArea-wrapper">
              { isEditNote ?
               (<textarea className='Text-Area-Element' value={input}>
                {/* {or check if you can add the note here direclty as a completely new  text area
                if it doesnt work,then deactivate the input area
                } */}
                </textarea>
                ) :(
               <textarea 
              className='Text-Area-Element'
              name='notes'
              value={input}
              onChange={handleMessageChange}
              >
              <button disabled={!input}>Submit</button>

              </textarea>)}
      
                <div className="Text-Area-Button-Container">
                        <button disabled={!input}onClick={()=>postTodo(input)}>Save</button>
                        <button disabled={!input}onClick={()=>HandleDeleteNote}>Delete</button>
                </div>
                
              </div>
     
      </div>
      {/* <DisplayNotes notes={notes}/> */}
    </div>
    
  )
}

export default Notepage
