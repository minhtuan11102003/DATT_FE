'use client'
import React, { useEffect, useState } from 'react';
import CardProducts from './card_products';
import axios from 'axios';

const ListProduct = () => {
    const [products, setProducts] = useState<any>([]);
    useEffect(() => {
        const getProductsApi = async () => {
            try {
                const payProdcuts = await axios.get(`http://api-core.dsp.one/api/client/product`);
                console.log(payProdcuts.data);
                if (payProdcuts.status === 200) {
                    const data = payProdcuts.data?.data.data;
                    setProducts([...data]);
                }
            } catch (error) {
                console.error("Lỗi khi gọi API:", error);
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