import React from 'react'

export const About = () => {
  return (
    <>
     <div className=' flex justify-around'>

        <div className=' w-[18%] bg-slate-400 p-4 rounded-xl border-black border-2 h-[100%]'>
            <h1 className=' flex justify-center text-2xl font-bold'>About iNoteBook</h1>
            <p className=' flex justify-center text-center mt-3'>Welcome to iNoteBook - your ultimate online companion for organizing your daily thoughts, tasks, objectives, and notes. Whether you're a student, professional, or anyone who loves to keep things organized, iNoteBook provides a seamless and secure platform to store and manage all your notes in one place.</p>
        </div>

        <div className=' w-[18%] bg-slate-400 p-4 rounded-xl border-black border-2 h-[100%]'>
          <h2 className=' flex justify-center text-2xl font-bold'>Our Mission</h2>
          <p className=' flex justify-center text-center mt-3'>At iNoteBook, our mission is to simplify your life by providing a reliable and secure space to capture and organize your ideas and tasks. We believe that everyone deserves a tool that helps them stay on top of their day-to-day activities, no matter where they are.</p> <br />
        </div>

        <div className=' w-[18%] bg-slate-400 p-4 rounded-xl border-black border-2 h-[100%]'>
          <h2 className=' flex justify-center text-2xl font-bold'>Features</h2>
          <p className=' text-left mt-3'><b>1. Create Your Account:</b> Sign up to start using iNoteBook. With your own account, you can create, edit, and delete notes as per your needs. <br /> <br />

          <b>2. Cloud Storage:</b> Store your notes securely in the cloud. Access your information anytime, anywhere in the world. <br /> <br />

          <b>3. Security:</b> Your privacy is our priority. We use advanced hashing with added salt to securely store your passwords. Even our administrators cannot access your password, ensuring that your data is protected from hacking attempts. <br /> <br />

          <b>4. User Control:</b> Enjoy full control over your notes. Easily manage your entries by creating new ones, editing existing notes, or deleting those that are no longer needed.</p> <br />
        </div>

        <div className=' w-[18%] bg-slate-400 p-4 rounded-xl border-black border-2 h-[100%]'>
          <h2 className=' flex justify-center text-2xl font-bold'>Our Commitments</h2>
          <p className=' flex justify-center text-center mt-3'>We are committed to providing a user-friendly and secure platform that meets your needs. We are continually working to improve iNoteBook and plan to introduce new features and updates that will enhance your experience.</p>
        </div>

        <div className=' w-[18%] bg-slate-400 p-4 rounded-xl border-black border-2 h-[100%]'>
          <h2 className=' flex justify-center text-2xl font-bold'>Thank You</h2>
          <p className=' flex justify-center text-center mt-3'>Thank you for choosing iNoteBook. We hope you find our website useful and it helps you stay organized. Your feedback is invaluable to us, and we look forward to making iNoteBook even better in the future. <br />

          Stay organized, stay secure with iNoteBook.</p> <br />
        </div>

    </div>
    </>
  )
}
