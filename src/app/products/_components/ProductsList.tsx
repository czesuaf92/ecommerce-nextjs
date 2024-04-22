
import React from 'react';

const ProductsList = ({ products }: any) => {
    return (
        <div>
            {
                products.map((product: any) => {
                    const descriptionMarkup = { __html: product.description };
                    return (
                        <div key={product.id}>
                            <h1 className='text-3xl'>{product.name}</h1>
                            <div dangerouslySetInnerHTML={descriptionMarkup}></div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ProductsList;
