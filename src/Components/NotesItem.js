import React, {useContext} from 'react';
import noteContext from '../Context/notes/noteContext';

const NotesItem = (props) => {
    const {note, update, showAlert} = props; 
    const context = useContext(noteContext);
    const {deleteNote} = context;


  return (
    <>
    <div className='bg-slate-300 shadow-lg mt-10 border-black border-2 p-3 w-[20rem] rounded-lg flex-col justify-around space-y-5'>
        <div>
            <p><b>Title :</b> {note.title}</p>
        </div>
        <div>
            <p><b>Tag :</b> {note.tag}</p>
        </div>
        <div>
            <p className=' w-[17rem]'><b>Description :</b> {note.desc}</p>
        </div>
        <div className=' flex space-x-5'>
            <i className=" cursor-pointer fa-solid fa-trash" onClick={()=>{
                deleteNote(note._id);
                showAlert("Note Deleted!!","danger");
                }}></i>
            <i className="fa-solid cursor-pointer fa-pen-to-square" onClick={()=>{update(note)}}></i>
        </div>
    </div>
    </>
  )
}

export default NotesItem;