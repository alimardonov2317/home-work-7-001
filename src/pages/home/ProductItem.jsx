import { useStateValue } from '@/context'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaRegHeart, FaHeart } from "react-icons/fa";


const ProductItem = ({product}) => {

    const navigate = useNavigate()
    const [state, dispatch] = useStateValue()

    return (
        <div className="p-4">
            <div className='relative'>
                <img
                    src={product.image}
                    className="h-[250px] max-[500px]:mx-auto"
                    alt={product.title}

                />
                <button onClick={() => dispatch({ type: "TOGGLE_LIKE", payload: product })} className='absolute top-1 right-1 text-xl'>

                    {
                        state.wishlist?.some(({ id }) => id === product.id) ?
                            <FaHeart className='text-red-500' /> : <FaRegHeart />
                    }
                </button>
            </div>
            <div>
                <h2 onClick={() => navigate(`/product/${product.id}`)} className='font-bold mt-6 truncate'>{product.title}</h2>
                <p className='text-sm text-[#737373] font-bold py-3'>English Department</p>
                <p className='text-[#23856D] font-bold'>${product.price}</p>
                <div className='flex gap-2 mt-3 max-[500px]:justify-center'>
                    <div className='w-4 h-4 rounded-full bg-[#23A6F0]'></div>
                    <div className='w-4 h-4 rounded-full bg-[#23856D]'></div>
                    <div className='w-4 h-4 rounded-full bg-[#E77C40]'></div>
                    <div className='w-4 h-4 rounded-full bg-[#252B42]'></div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ProductItem) 