import React from 'react';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts()
    return (
        <div>
            This is Orders route :{products.length}.
        </div>
    );
};

export default Orders;