'use client'
import React, { useEffect, useState } from 'react';
import CardProducts from './card_products';
import { error } from 'console';

const ListProduct = () => {
    const [products, setProducts] = useState<any>([]);
    useEffect(() => {
        const getProductsApi = async () => {
            try {
                const payProdcuts = await fetch('http://api-core.dsp.one/api/client/product');
                if (!payProdcuts.ok) {
                    throw new Error('Lỗi rồi kìa');
                } else {
                    const resProduct = await payProdcuts.json();
                    setProducts([...resProduct.data.data]);
                }

            } catch (error) {
                console.log(error);
            }
        }
        getProductsApi();
    }, [])


    return (
        <div className="accomodation_room listProduct">
            <div className="md:grid md:grid-cols-4 gap-8">
                {
                    products.map((pr: any, index: number) => (
                        <CardProducts data={pr} key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default ListProduct;