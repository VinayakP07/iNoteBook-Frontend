/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/style-prop-object */
import React from 'react'

export const Contact = () => {
  return (
    <>
    <div className=' flex justify-center ml-[15rem] mr-[15rem] mt-[10rem] mb-[10rem] bg-slate-400 p-4 rounded-xl border-black border-2 h-[100%]'>
        <div>
            <h2 className=' text-4xl font-mono font-bold'>Contact Us</h2>
            <p className=' font-semibold text-left mt-3 w-[35rem]'>We would love to hear from you! Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.</p>
            <div className=' mt-5'>
                <p><strong>Email:</strong> <a className=' font-semibold' href="mailto:vinayakpuranik0707@gmail.com">vinayakpuranik0707@gmail.com</a></p>
                <p><strong>Phone No.:</strong> <a className=' font-semibold' href="tel:+7000461608">7000461608</a></p>
                <p><strong>Instagram:</strong> <a className=' font-semibold' href="https://www.instagram.com/vinayak_puranik07?igsh=enpoejR3ZG44Z2x0" target="_blank">vinayak_puranik07</a></p>
                <p><strong>LinkedIn:</strong> <a className=' font-semibold' href="https://www.linkedin.com/in/vinayakpuranik04052004/" target="_blank">vinayakpuranik04052004</a></p>
            </div>
        </div>
    </div>
    </>
  )
}
