import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ProductType } from "../types/Product";
import Products from "../components/Products";

type ProductsProps = {
    products: ProductType[];
};

const Home = (props: ProductsProps) => {
    return (
        <div>
            <Products products={props.products} />
        </div>
    );
};

export default Home;
