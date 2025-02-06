import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import HeaderContact from './HeaderContact'
import EditorHome from './EditorHome'
import ProductsHome from './ProductsHome'
import SummerHome from './SummerHome'
import FeaturedHome from './FeaturedHome'
import { request } from '@/api'

export const Home = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        request
            .get("/products")
            .then((res) => {
                setProducts(res.data.slice(0, 8));
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <HeaderContact />
            <Hero />
            <EditorHome />
            <ProductsHome products={products} >
                <div className='text-center'>
                    <p className='text-[#737373] text-xl font-medium'>Featured Products</p>
                    <h3 className='text-2xl font-bold text-[#252B42]'>BESTSELLER PRODUCTS</h3>
                    <p className='text-[#737373]'>Problems trying to resolve the conflict between </p>
                </div>
            </ProductsHome>
            <SummerHome />
            <FeaturedHome />
        </>
    )
}

export default Home