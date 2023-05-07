"use client"

import { useState } from 'react'

export default function Hero() {
    const [show, setShow] =useState(true);


  return (
    <>
    <section className='hero-section'>
        <div className="container">
            <div className="row">
                <div className="col flex flex-col align-middle items-center gap-3">
                    <h1 className={show && "hidden "}>
                        Jasa Joki tugas tanpa ribet
                    </h1>
                    <button onClick={()=> setShow(!show)} className='button btn bg-yellow-300 p-1 rounded-md'>show</button>
                </div>
            </div>
        </div>
    </section>
    </>
    
  )
}
