import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { toast } from 'sonner';


const Newsletter = () => {
    const [email,setEmail] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/api/newsletter",{
                email
            })
            .then(res=>{
                if(res.data == "exists"){
                    toast.error("This user already exists")
                    
                }
                else if(res.data == "Mail sent"){
                    toast.success("An email has been sent to ur email")
                }
            })
            .catch(e => {
                toast.error("Something went wrong")
            })
        }
        catch(e){
            console.log(e)
        }
      }
    
    return (
        <div className='w-full bg-gray-800/5 min-h-[40vh] py-10'>
            <p className=' text-center text-xs md:text-base pt-8 tracking-normal font-medium text-slate-700'>Join our newsletter and get 10% off your first order</p>
            <h1 className=' text-center text-xs tracking-normal pt-5 text-slate-600'>Plus, receive exclusive offers, product news, tips and guides to help you grow in dressing confidence</h1>

            <form onSubmit={handleSubmit} className='flex justify-center gap-2 mt-9'>
                <input onChange={e=>setEmail(e.target.value)} type='email' value={email} placeholder='Enter Email' className=' py-2 px-4 text-sm focus:outline-none border-2 border-gray-200' required></input>
                <button className='bg-black text-white px-4 py-2 text-sm'>SIGN UP</button>
            </form>

        </div>
    )
}

export default Newsletter