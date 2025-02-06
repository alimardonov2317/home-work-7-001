import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { request } from '@/api'
import HeaderContact from '@/pages/home/HeaderContact'
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoEyeSharp } from "react-icons/io5";

const Detail = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        request.get(`/products/${id}`)
            .then(res => {
                setData(res.data)
            })
    }, [])
    return (
        <>
            <HeaderContact />
            <div className='container'>
                <div className='flex justify-around items-center py-10'>
                    <div>
                        <img className='max-w-[500px] max-h-[450px]' src={data?.image} alt="" />
                    </div>
                    <div className='max-w-[510px]'>
                        <h4 className='text-xl font-medium mb-3'>{data?.title}</h4>
                        <div className='flex gap-3 items-center'>
                            <span className='text-yellow-400 font-bold '>Rate: {data?.rating.rate}</span>
                            <span className='text-[#737373] font-semibold text-sm block'>10 Reviews</span>
                        </div>
                        <p className='text-2xl font-bold mt-5'>${data?.price}</p>
                        <p className='text-sm text-[#737373] font-bold flex gap-2 mt-2'>Availability:<span className='text-sm text-[#23A6F0] font-bold'>{data?.category}</span></p>
                        <p className='mt-8 text-sm text-[#737373] font-medium'>{data?.description}</p>
                        <hr className='w-full  border-[1px] border-[#BDBDBD] my-8' />
                        <div className='flex gap-2 mt-3 max-[500px]:justify-center'>
                            <div className='w-8 h-8 rounded-full bg-[#23A6F0]'></div>
                            <div className='w-8 h-8 rounded-full bg-[#23856D]'></div>
                            <div className='w-8 h-8 rounded-full bg-[#E77C40]'></div>
                            <div className='w-8 h-8 rounded-full bg-[#252B42]'></div>
                        </div>
                        <div className='flex items-center gap-3 mt-16'>
                            <button className='py-[10px] px-5 bg-[#23A6F0] rounded-md text-sm font-bold text-white'>Select Options</button>
                            <button className='py-[10px] px-[10px] rounded-full border-[#E8E8E8] border-[1px] border-solid '><FaRegHeart className='text-xl' /></button>
                            <button className='py-[10px] px-[10px] rounded-full border-[#E8E8E8] border-[1px] border-solid'><FiShoppingCart className='text-xl' /></button>
                            <button className='py-[10px] px-[10px] rounded-full border-[#E8E8E8] border-[1px] border-solid'><IoEyeSharp className='text-xl' /></button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail