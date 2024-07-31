import React, { useState } from 'react'
import { toast } from 'sonner'

const AddDetails = () => {
    // const []
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [description, setDesc] = useState("")
    const [price, setPrice] = useState("")

    const convertBase64 = (e) => {
        console.log(e.target.files[0]);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result)
        }
        // setImage(e.target.files[0])
        reader.onerror = err => {
            console.log("error" + err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello Clicked Submit");

        fetch("http://localhost:5000/admin/addProduct", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                name,
                image,
                description,
                price
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "Product Registered ");
                toast.success("Product Registered Successfully")
            })


    }
    return (

        <div className='w-full mt-[55px] sm:mt-[60px] md:mt-[70px] lg:mt-[80px] ml-[18rem]'>
            <div className='container w-full flex flex-col items-center py-10 lg:py-20 '>
                <form onSubmit={handleSubmit} className='lg:w-[600px] lg:bg-gray-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <p className='text-3xl font-semibold mb-8 py-5 text-center bg-slate-700 text-white shadow-lg'>Enter Car Details</p>
                    <div className='px-5'>
                        <div className='mb-5 flex items-center gap-4'>
                            <label className=' w-[100px] text-sm mb-1'>Product Name </label>
                            <input onChange={e => setName(e.target.value)} name='text' type='text' placeholder='Enter Product  name' className='w-full p-2 text-sm border-gray-400 border-[1px] focus:outline-none' required></input>
                        </div>
                        <div className='mb-5 flex items-center gap-4'>
                            <label className='  w-[100px] text-sm mb-1'>Description</label>
                            <textarea onChange={e => setDesc(e.target.value)} type='text' rows='3' placeholder='Enter description' className='w-full p-2 text-sm border-gray-400 border-[1px] focus:outline-none' required></textarea>
                        </div>
                        <div className='mb-5 flex items-center gap-4'>
                            <label className='  w-[100px] text-sm mb-1'>Image</label>
                            <input accept='image/' type='file' onChange={convertBase64} className='w-full p-2 text-sm bg-white border-gray-400 border-[1px] focus:outline-none' required></input>
                        </div>

                        <div className='mb-6 flex items-center gap-4'>
                            <label className=' w-[100px] text-sm mb-1'>Price </label>
                            <input onChange={e => setPrice(e.target.value)} type='number' placeholder='Enter price' className='w-full p-2 text-sm border-gray-400 border-[1px] focus:outline-none' required></input>
                        </div>


                        <div className='flex gap-3 justify-end'>
                            <button className=' p-1 px-4 md:p-2 md:px-4 rounded-sm text-sm font-medium bg-slate-700 text-white mb-4'>Done</button>
                            <button className=' p-1 px-4 md:p-2 md:px-5 rounded-sm text-sm font-medium bg-gray-400 text-white mb-4'>Cancel</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
)}
export default AddDetails