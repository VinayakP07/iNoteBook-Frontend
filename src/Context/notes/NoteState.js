/* eslint-disable no-unused-vars */

import NoteContext from "./noteContext.js";

import {useState} from 'react'


const NoteState = (props) =>{

    const host = "http://localhost:5000"

    const initialNotes = [];
    
      const [notes, setNotes] = useState(initialNotes)

      // Get all Notes

      const getAllNotes = async () => {

        // API CALL
        const response = await fetch(`${host}/notes/fetchNotes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth_token" : localStorage.getItem("token"),
          },
        });
        // const json = await response.json();
        const json = await response.json();
        setNotes(json);
      }

      // Adding a note 
      const addNote = async(title , desc, tag) => {

        // API CALL
        const response = await fetch(`${host}/notes/createNotes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth_token" : localStorage.getItem("token"),
          },
          body: JSON.stringify({title, desc, tag}),
        });
        const json = await response.json();

        // Logic
        setNotes(notes.concat(json));
      }

      // Deleteing a note
      const deleteNote = async (id) => {

        // API CALL 
        const response = await fetch(`${host}/notes/deleteNotes/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth_token" : localStorage.getItem("token"),
          },
        });


        // Logic
        const newNote = notes.filter((n) => { return n._id !== id });
        setNotes(newNote);
      }

      // Updating a note
      const updateNote = async (id, title, desc, tag) => {
        // API CALL
        const response = await fetch(`${host}/notes/updateNotes/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth_token" : localStorage.getItem("token"),
          },
          body: JSON.stringify({title, desc, tag}),
        });
        const json = response.json();

        let newNote = JSON.parse(JSON.stringify(notes))
        // Logic
          for (let i = 0 ; i < newNote.length ; i++){
            let element = newNote[i];
            if(element._id === id ){
              newNote[i].title = title;
              newNote[i].desc = desc;
              newNote[i].tag = tag;
              break;
            }
        }
        setNotes(newNote); 
      }

      // Fetching user details

      //API CALL
      const fetchUser = async () => {
        const response = await fetch(`${host}/auth/fetchUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth_token" : localStorage.getItem("token"),
          },
        });
        const json = await response.json();
        
        //Logic
        localStorage.setItem('username',json.username);
      }


      return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, updateNote, getAllNotes, fetchUser}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;