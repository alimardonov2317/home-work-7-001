import React from 'react';
import ProductItem from './ProductItem';

const ProductsHome = ({ products, children }) => {


    return (
        <div className='py-20'>
            <div className='container'>
                {children}
                <div>
                    <div className="grid grid-cols-4 gap-8 mt-20 max-[950px]:grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:text-center">
                        {products?.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(ProductsHome);
