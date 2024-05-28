/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useContext, useEffect, useRef, useState} from 'react';
import noteContext from '../Context/notes/noteContext'
import NotesItem from './NotesItem';
import AddNotes from './AddNotes';
import { useNavigate } from 'react-router-dom';


export const Notes = (props) => {

  const {showAlert} = props;
  
  const navigate = useNavigate(); 

  const [enote,esetNote] = useState({eid : "",etitle : "", edesc : "" , etag : ""})
    const context = useContext(noteContext);
    const {notes, getAllNotes, updateNote, fetchUser } = context;
    useEffect(()=>{
      if(localStorage.getItem('token')){
        getAllNotes();
      }
      else{
        navigate("/login");
      }
    },[])

      const update = (currentNote) => {
        ref.current.click();
        esetNote({eid : currentNote._id,etitle : currentNote.title, edesc : currentNote.desc , etag : currentNote.tag});
      };
      const ref = useRef(null);
      const refClose = useRef(null);
      
      
      const handleClick = () => {
        updateNote(enote.eid , enote.etitle, enote.edesc, enote.etag);
        showAlert("Note Updated Successfully!!","success");
          refClose.current.click();
      }
  
      const onChange = (e) => {
          esetNote({...enote, [e.target.name]:e.target.value})
      }

      fetchUser();
      
      const user = localStorage.getItem('username');

      // console.log(notes);


  return (   
    <>
      <div className=' mt-5 flex justify-center'>
          <h1 className=' font-mono font-bold text-3xl'>Welcome {user} !!</h1>
      </div>
        <AddNotes showAlert={showAlert}/>
        <button type="button" ref={ref} className=" collapse btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Update Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                {/* Model Body */}
                <div className=' flex flex-row justify-center'>
                <div className=' ml-5 flex flex-col mt-[2rem]'>
                <p className=' text-3xl font-mono font-bold'>Update Your Notes Here !!</p>
           
                <p className=' mt-5 ml-[11.5rem] font-mono font-bold text-2xl'>Title</p>

                <textarea onChange={onChange} id='etitle' name='etitle' value={enote.etitle} className=' mt-2 border-black border-[0.1rem] w-[27rem] pl-2' rows="2"></textarea>

                <p className=' mt-5 font-mono ml-[9.5rem] font-bold text-2xl'>Description</p>
            
                <textarea onChange={onChange} id='edesc' name='edesc' value={enote.edesc} className=' mt-2 border-black border-[0.1rem] w-[27rem] pl-2' rows="5"></textarea>

                <p className=' mt-5 font-mono ml-[12rem] font-bold text-2xl'>Tags</p>
            
                <textarea onChange={onChange} id='etag' name='etag' value={enote.etag} className=' mt-2 border-black border-[0.1rem] w-[27rem] pl-2' rows="2" type="text"></textarea>
                </div>
                </div>

              </div>
              <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
              </div>
            </div>
          </div>
        </div>


        <div className=' flex mt-20 flex-row justify-center' >
          <p className=' text-4xl font-mono font-bold'>Your Saved Notes !!</p>
      </div>
      <div className=' flex justify-center mt-3 font-bold text-xl'>
        <p>{notes.length === 0 && 'No notes to display'}</p>
      </div>

        <div className=' flex justify-around flex-wrap mb-5'>
            {notes.map((note)=>{
                return <NotesItem key={note._id} showAlert={showAlert} update={update} note = {note}/> ;
            })}
        </div>
    </>
  )
}
