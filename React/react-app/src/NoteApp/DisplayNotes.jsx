import { useContext, useState ,useEffect} from 'react'
import React from 'react'
import UserContext from '../utilis/UserContext'
import useAxios from '../utilis/useAxios'
import axiosInstance from '../utilis/AxiosInstance'
import axios from 'axios'
const DisplayNotes = ({notes}) => {
    // this is where notes of a specific user will be loaded from the back-end
    //the notes will be looped to  a text area


let {notesArray,HandleDeleteItem ,isReadNote,setisReadNote,setNotesArray,ReadNoteItem} = useContext(UserContext)
    console.log(notesArray)

let api = useAxios()

useEffect(()=>{
  GetNotesFrombackEnd()
},[])
//how to create the id of an item in react
const EditNoteItem = (id) => {
  console.log(id,'this is the note')
}   
//how to delete an item in an array in react using its id
//how to remove an item in am array in react using its id 
const deleteNoteItem = (id) => {
  setNotesArray(prev => [...prev,id])
  console.log()
}

const ReadnoteItem2 = (id) => {
console.log('this is the  readnote id', id)
} 
console.log(notesArray,'this is the notesArray')


const GetNotesFrombackEnd = async () => {
  // postTodo()
  let response = await api.get('notes/')
  console.log(response.data,'this is the response from the back end')
   setNotesArray(response.data)
  }  
  





// const key = "02";

//     const updated = array.map(item => {
//         if (item.id === key) {
//             return {id: key, name:"updated jaison 1", email:"updatedjaison1@yopmail.com"}
//         }
//         return item;






// let new_array = array.map(element => element.id == 2 ? {...element, name : 'New Name'} : element);
//let new_array = array.map(element => element.id == 2 ? Object.assign({}, element, {name : 'New Name'}) : element);


// let array = [{id:1,name:'One'}, {id:2, name:'Two'}, {id:3, name: 'Three'}];
// let array2 = [...array]
// array2.find(a => a.id == 2).name = "Not Two";



// const array = [{id:1,name:'One'}, {id:2, name:'Two'}, {id:3, name: 'Three'}]

// const updatedArray = array.map(a => {
//    if (a.id == 2) {
//       a.name = 'New Name';
//    }
//    return a;
// });













  return (
    <div className='Notes-Display-Container'> 
           
           {notesArray.map( (note)=> (
            <div className='Single-note-box' key={note.id}>
                <div  className="Note-display-wrapper" key={note.id}>
                { isReadNote }<textarea readOnly key={note.id} className='note-text-area-element'>
                {note.note}
                </textarea>
             
             </div>
             <div className='button-area'> 
                <button onClick = { () =>ReadNoteItem(note.id,note.note)}>Read Note</button>
                <button onClick={() => EditNoteItem(note.id ,note.note)}>Edit</button>
                <button onClick={ () =>HandleDeleteItem(note.id)}>Delete</button>
              </div>
            </div>
            
               
          ) )}

           </div>


         
      

          
  
  )
}

export default DisplayNotes
