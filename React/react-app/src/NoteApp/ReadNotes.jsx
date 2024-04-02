import React,{ useContext, useState} from 'react'
import UserContext from '../utilis/UserContext'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const ReadNotes = () => {
    // const [readnote,setnote] = useState("")
let {ReadNote,setReadNote} = useContext(UserContext)


const NavigateTo = useNavigate()
const DoneReadingNote = () =>{
setReadNote('')
NavigateTo('/')

}
  return (
    <div className='Read-Note-Display-Container'>
        <div className='Read-Note-Display-Wrapper'> 
         <textarea className='ReadNote-textArea-Element'>{ReadNote}</textarea>
         <button onClick={DoneReadingNote}>Done</button>
        </div>
     
   </div>
  )
}

export default ReadNotes
