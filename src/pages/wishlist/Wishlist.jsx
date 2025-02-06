import { useStateValue } from '@/context'
import React, { useEffect } from 'react'
import ProductsHome from '../home/ProductsHome'
import WishlistImage from "@/assets/wishlist.png"

const Wishlist = () => {
    const [state] = useStateValue()

    useEffect(() => {
        window.scrollTo({ behavior: "smooth", left: 0, top: 0 })
    }, [])
    return (
        <>
            {
                state.wishlist.length ?
                    <ProductsHome products={state.wishlist} >
                        <div className='text-center'>

                        </div>
                    </ProductsHome>
                    :
                    <div className='container min-h-[500px] flex items-center justify-center'>

                        <div className='flex items-center max-md:flex-col'>
                            <img src={WishlistImage} alt="" />
                            <span className='text-3xl font-semibold'>Your cart is empty.</span>
                        </div>
                    </div>
            }
        </>
    )
}

export default Wishlist