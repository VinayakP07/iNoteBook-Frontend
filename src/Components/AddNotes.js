import React, {useContext, useState} from 'react';
import noteContext from '../Context/notes/noteContext'


const AddNotes = (props) => {

    const {showAlert} = props;

    const context = useContext(noteContext);
    const {addNote} = context;
    const [note,setNote] = useState({title : "", desc : "" , tag : ""})

    const handleClick = () => {
        addNote(note.title, note.desc , note.tag);
        showAlert("Note Added Successfully","success");
        setNote({title : "", desc : "" , tag : ""})
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]:e.target.value})
    }

  return (
    <>
        <div className=' flex flex-row justify-center'>
        <div className=' ml-5 flex flex-col mt-[2rem]'>
            <p className=' text-4xl font-mono font-bold'>Add Your Notes Here !!</p>
           
            <p className=' mt-4 font-mono font-bold text-2xl'>Title - Atleast 5 character</p>

            <textarea onChange={onChange} id='title' name='title' value={note.title} className=' mt-2 border-black border-[0.1rem] w-[27rem] pl-2 ' placeholder='Enter Title of your new note here' rows="2"></textarea>

            <p className=' mt-5 font-mono font-bold text-2xl'>Description - Atleast 5 character</p>
            
            <textarea onChange={onChange} id='desc' name='desc' value={note.desc} className=' mt-2 border-black border-[0.1rem] w-[27rem] pl-2' rows="5" placeholder='Enter Description of your new note here'></textarea>

            <p className=' mt-5 font-mono font-bold text-2xl'>Tags</p>
            
            <textarea onChange={onChange} id='tag' name='tag' value={note.tag} className=' mt-2 border-black border-[0.1rem] w-[27rem] pl-2' rows="2" type="text" placeholder='Enter Tags of your new note here'></textarea>

            <button onClick={handleClick} disabled={note.title.length<5 || note.desc.length<5} className='bg-blue-500 border-2 border-black mt-8 ml-[9.5rem] w-[8rem] font-bold  text-white p-2 rounded-md'>Add Note</button>
        </div>
      </div>
    </>
  )
}

export default AddNotes